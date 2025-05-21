#!/bin/bash

# https://studygolang.com/dl/golang/go1.22.0.linux-arm64.tar.gz
# 定义Go版本
GO_VERSION=1.21.5

# 定义安装目录
INSTALL_DIR=/usr/local

# 检查Go是否已经安装
if ! command -v go &> /dev/null; then
    # 下载Go二进制包
    wget https://studygolang.com/dl/golang/go${GO_VERSION}.linux-amd64.tar.gz

    # 解压二进制包
    tar -C ${INSTALL_DIR} -xzf go${GO_VERSION}.linux-amd64.tar.gz

    # 添加环境变量
    echo "export PATH=\$PATH:${INSTALL_DIR}/go/bin" >> ~/.bashrc
    # echo "export PATH=\$PATH:${INSTALL_DIR}/go/bin" >> ~/.zshrc
fi

# 刷新环境变量
source ~/.bashrc
# source ~/.zshrc

# 验证安装
go version

# 设置七牛云代理
go env -w GOPROXY=https://goproxy.cn,direct

# 验证代理设置
go env | grep GOPROXY

# 设置Go Module支持
go env -w GO111MODULE=on

# 验证Go Module设置
go env | grep GO111MODULE