#!/bin/bash

# 定义Python版本
PYTHON_VERSION=3.9.5

# 定义安装目录
INSTALL_DIR=/usr/local

# 检查当前用户是否为root用户
if [ $(id -u) = 0 ]; then
    # 更新系统软件包
    apt update

    # 安装必要的依赖
    apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev wget curl -y

    # 下载Python源码包
    wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tar.xz

    # 解压源码包
    tar -xf Python-${PYTHON_VERSION}.tar.xz

    # 进入源码目录
    cd Python-${PYTHON_VERSION}

    # 配置安装路径
    ./configure --prefix=${INSTALL_DIR}/python-${PYTHON_VERSION}

    # 编译并安装
    make && make install

    # 创建软链接
    ln -s ${INSTALL_DIR}/python-${PYTHON_VERSION}/bin/python3 /usr/local/bin/python3
    ln -s ${INSTALL_DIR}/python-${PYTHON_VERSION}/bin/pip3 /usr/local/bin/pip3

    # 设置清华源作为pip的默认源
    pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

    # 清理安装过程中的临时文件
    cd ..
    rm -rf Python-${PYTHON_VERSION} Python-${PYTHON_VERSION}.tar.xz

    echo "Python ${PYTHON_VERSION} 安装完成"
else
    echo "当前用户不是root用户，请使用root权限运行脚本"
fi