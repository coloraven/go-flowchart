FROM amd64/golang:latest AS builder

ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GOPROXY=https://goproxy.cn,direct

WORKDIR $GOPATH/src/go-flowchart

COPY main.go .

COPY go.mod .

#增加缺失的包，移除没用的包
RUN go mod tidy

RUN go build -ldflags-"-w -s" -o draw .

FROM scratch

ADD . /go-flowchart
COPY --from=builder go/src/go-flowchart/draw /go-flowchart

ENTRYPOINT  ["./draw"]