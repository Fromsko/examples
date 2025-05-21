#!/bin/bash

# 定义Node.js版本
NODE_VERSION=18.16.0

# 定义安装目录
INSTALL_DIR=/usr/local

# if [ $(id -u) = 0 ]; then

# else
#     echo "当前用户不是root用户"
# fi

get_remote_file(){
    if ! command -v tar &> /dev/null; then
        apt install tar unzip xz-utils -y
    fi

    if ! command -v wget &> /dev/null; then
        apt install wget curl -y
    fi

    # 下载Node.js二进制包
    wget https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz

    # 解压二进制包
    tar -xvf node-v${NODE_VERSION}-linux-x64.tar.xz

    # 将Node.js移动到安装目录
    sudo mv node-v${NODE_VERSION}-linux-x64 ${INSTALL_DIR}/nodejs
}

set_link(){
    if [ -L "${INSTALL_DIR}/nodejs/bin/node" ]; then
        echo "软链接 nodejs/bin/node 已存在"
    else
        # 创建软链接
        sudo ln -s ${INSTALL_DIR}/nodejs/bin/node /usr/local/bin/node
        sudo ln -s ${INSTALL_DIR}/nodejs/bin/npm /usr/local/bin/npm
    fi
}

set_source(){
    if ! command -v zsh &> /dev/null; then
        echo "export PATH=\$PATH:${INSTALL_DIR}/nodejs/bin" >> ~/.zshrc  
        source ~/.zshrc
    fi
    # 设置并刷新环境变量
    echo "export PATH=\$PATH:${INSTALL_DIR}/nodejs/bin" >> ~/.bashrc
    source ~/.bashrc
    npm config set registry https://registry.npm.taobao.org
}

if ! command -v node &> /dev/null; then
    # 下载
    get_remote_file
    # 软链接
    set_link
    # 设置环境变量
    set_source
fi

# 验证安装
node -v
npm -v