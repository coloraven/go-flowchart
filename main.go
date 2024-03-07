package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/exec"
	"runtime"
	"time"
)

// ResponseWriterWrapper 包装 http.ResponseWriter 以捕获响应状态和数据大小
type ResponseWriterWrapper struct {
	http.ResponseWriter
	StatusCode int
	DataSize   int
}

// WriteHeader 捕获响应状态
func (w *ResponseWriterWrapper) WriteHeader(statusCode int) {
	w.StatusCode = statusCode
	w.ResponseWriter.WriteHeader(statusCode)
}

// Write 捕获数据大小
func (w *ResponseWriterWrapper) Write(data []byte) (int, error) {
	size, err := w.ResponseWriter.Write(data)
	w.DataSize += size
	return size, err
}

func main() {
	var port int
	// 解析命令行参数
	flag.IntVar(&port, "port", 80, "The port to listen on.")
	flag.Parse()

	// 创建或打开日志文件
	logFile, err := os.OpenFile("access.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		log.Fatalf("Error opening log file: %v", err)
	}
	defer logFile.Close()

	// 设置日志输出到文件
	log.SetOutput(logFile)

	// 定义一个日志记录器中间件
	loggingMiddleware := func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// 使用 ResponseWriterWrapper 来捕获响应状态和数据大小
			wrappedWriter := &ResponseWriterWrapper{ResponseWriter: w, StatusCode: http.StatusOK}

			start := time.Now()
			next.ServeHTTP(wrappedWriter, r)
			duration := time.Since(start)
			// 记录请求和响应的详细信息
			log.Printf("%s\t%s\t%s\t%d\t%d\t%s\t%s\n", r.RemoteAddr, r.Method, r.URL, wrappedWriter.StatusCode, wrappedWriter.DataSize, duration, r.Header)
		})
	}

	// 根目录路由
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", loggingMiddleware(http.StripPrefix("/", fs)))

	// 监听指定端口
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("Error listening on port %d: %v", port, err)
	}

	go func() {
		err := http.Serve(listener, nil)
		if err != nil {
			log.Fatalf("Error starting server: %v", err)
		}
	}()

	// 如果是 Windows 系统，则打开默认浏览器
	if runtime.GOOS == "windows" {
		url := fmt.Sprintf("http://127.0.0.1:%d/", port)
		err = exec.Command("cmd", "/C", "start", url).Start()
		if err != nil {
			log.Fatalf("Error opening browser: %v", err)
		}
	}

	// 阻塞主线程，防止程序直接退出
	select {}
}
