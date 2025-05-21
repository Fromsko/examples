# 清空缓存
npm cache clean --force

# 禁止安全连接
npm config set strict-ssl false

# 依次执行以下命令，修改镜像源
npm config set registry https://registry.npmjs.org
npm config set registry https://registry.npmmirror.com

# 查看是否修改成功
npm config get registry
npm install