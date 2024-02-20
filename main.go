package main

import (
	"fmt"
	"log"
	"math/rand"
	"net"
	"net/http"
	"os"
	"os/exec"
	"strconv"
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

	// 使用 RandomListen 函数获取一个空闲端口
	listener, err := RandomListen(80, 9000)
	if err != nil {
		log.Fatalf("Error finding an available port: %v", err)
	}

	// 获取监听的端口号
	_, port, _ := net.SplitHostPort(listener.Addr().String())

	go func() {
		err := http.Serve(listener, nil)
		if err != nil {
			log.Fatalf("Error starting server: %v", err)
		}
	}()

	// 打开默认浏览器并导航到指定地址
	url := fmt.Sprintf("http://127.0.0.1:%s/", port)
	err = exec.Command("cmd", "/C", "start", url).Start()
	if err != nil {
		log.Fatalf("Error opening browser: %v", err)
	}

	// 阻塞主线程，防止程序直接退出
	select {}
}

// RandomListen 在指定范围内随机寻找一个空闲端口进行监听
func RandomListen(minPort, maxPort int) (net.Listener, error) {
	// 首先尝试监听默认的 80 端口
	ln, err := net.Listen("tcp", ":80")
	if err == nil {
		return ln, nil
	}
	log.Printf("Failed to listen on port 80: %v", err) // 打印错误日志
	// 如果监听 80 端口失败，则在指定范围内随机寻找一个空闲端口
	for i := 0; i < 100; i++ { // 最多尝试100次
		port := rand.Intn(maxPort-minPort+1) + minPort
		ln, err := net.Listen("tcp", ":"+strconv.Itoa(port))
		if err == nil {
			return ln, nil
		}
	}
	return nil, fmt.Errorf("failed to find an available port in the range %d-%d", minPort, maxPort)
}
