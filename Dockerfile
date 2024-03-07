FROM amd64/golang:latest AS goappbuild

ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GOPROXY=https://goproxy.cn,direct

WORKDIR /go/src/app

COPY main.go .

RUN go mod init draw \
    && go mod tidy

RUN go build -ldflags="-w -s" -o draw .
# RUN ls -l /go/src/app  # Add this line to list files

# 编译excalidraw
FROM node:20.11.1-bookworm as statics
RUN cd /tmp \
    && npm install -g yrm \
    && yrm use npm \
    && git clone --depth 1 https://github.com/excalidraw/excalidraw.git \
    && cd excalidraw && yarn && yarn build \
    && cd .. \
    && git clone --depth 1 https://github.com/jgraph/drawio.git draw.io

# 编译flowchart-fun
FROM node:18-bookworm as fun
WORKDIR /tmp
RUN git clone --depth 1 https://github.com/tone-row/flowchart-fun.git \
    && cd flowchart-fun && cp app/.env.example .env && npm install -g pnpm && pnpm install && pnpm run build

FROM scratch
COPY --from=statics /tmp/excalidraw/excalidraw-app/ /app/excalidraw/
COPY --from=statics /tmp/draw.io/src/main/webapp/ /app/draw.io/
COPY --from=goappbuild /go/src/app/draw /app/draw
COPY --from=ghcr.io/mermaid-js/mermaid-live-editor /usr/share/nginx/html/ /app/mermaid-live-editor/
COPY --from=fun /tmp/flowchart-fun/app/build/ /app/flowchart-fun/
WORKDIR /app
COPY index.html .
EXPOSE 80
ENTRYPOINT ["/app/draw"]