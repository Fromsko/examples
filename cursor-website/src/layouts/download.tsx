import React from 'react'

const Download: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-base-content mt-10">下载 Cusor</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M3 5.1L10.5 4v7H3V5.1M11.5 4L21 2.7v8.3h-9.5V4M3 12h7.5v7L3 18.9V12m8.5 0H21v8.4L11.5 19v-7z"
                />
              </svg>
              <h2 className="card-title mt-4">Windows</h2>
              <p className="text-base-content/70 mb-4">支持 Windows 10/11</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  下载 Windows 版本
                  <span className="ml-2 text-xs opacity-70">v1.0.0</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
              <h2 className="card-title mt-4">macOS</h2>
              <p className="text-base-content/70 mb-4">支持 Intel 和 Apple Silicon</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  下载 macOS 版本
                  <span className="ml-2 text-xs opacity-70">v1.0.0</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14.62 8.35c-.42.28-1.75-.5-2.38-.5s-1.96.78-2.38.5c-.42-.28.68-2.12 2.38-2.12s2.8 1.84 2.38 2.12m-4.76 1.46c-.24 0-.43.2-.43.45v.68c0 .25.19.45.43.45s.43-.2.43-.45v-.68c0-.25-.19-.45-.43-.45m4.28 0c-.24 0-.43.2-.43.45v.68c0 .25.19.45.43.45s.43-.2.43-.45v-.68c0-.25-.19-.45-.43-.45M20.5 17.13c-.65-1.39-1.95-2.24-3.47-2.24c-.78 0-1.5.19-2.12.5c-.46.23-.94.35-1.41.35s-.95-.12-1.41-.35c-.62-.31-1.34-.5-2.12-.5c-1.52 0-2.82.85-3.47 2.24c-.43.91-.67 1.93-.67 3c0 .85.17 1.66.47 2.4c.47 1.17 1.33 2.16 2.41 2.81c1.49.91 3.37 1.46 5.29 1.46s3.8-.55 5.29-1.46c1.08-.65 1.94-1.64 2.41-2.81c.3-.74.47-1.55.47-2.4c0-1.07-.24-2.09-.67-3m-8.62-9.09c-.25-.37-.23-.84.05-1.2c.32-.42.86-.69 1.45-.69c.47 0 .89.18 1.18.46c.35.35.37.89.02 1.24c-.15.15-.39.24-.64.24c-.31 0-.61-.13-.82-.35c-.13-.13-.31-.21-.51-.21c-.27 0-.51.14-.66.36c-.02.03-.05.06-.07.09c0 .01-.01.02-.01.03l.01.03m-4.79 1.97c-.53.75-1.37 1.23-2.31 1.23c-1.12 0-2.11-.62-2.61-1.54c-.21-.39-.33-.83-.33-1.3c0-.78.33-1.48.87-1.97c.37-.34.83-.57 1.33-.66c.17-.03.33-.05.5-.05c1.58 0 2.87 1.28 2.87 2.85c0 .51-.13.99-.37 1.41l.05.03m12.36-.41c-.5.92-1.49 1.54-2.61 1.54c-.94 0-1.78-.48-2.31-1.23c-.24-.42-.37-.9-.37-1.41c0-1.57 1.29-2.85 2.87-2.85c.17 0 .33.02.5.05c.5.09.96.32 1.33.66c.54.49.87 1.19.87 1.97c0 .47-.12.91-.33 1.3l.05-.03z"
                />
              </svg>
              <h2 className="card-title mt-4">Linux</h2>
              <p className="text-base-content/70 mb-4">支持主流 Linux 发行版</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  下载 Linux 版本
                  <span className="ml-2 text-xs opacity-70">v1.0.0</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-base-content">系统要求</h2>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-2">Windows</h3>
                  <ul className="list-disc list-inside text-base-content/70">
                    <li>Windows 10 64位或更高版本</li>
                    <li>8GB RAM 以上</li>
                    <li>2GB 可用磁盘空间</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">macOS</h3>
                  <ul className="list-disc list-inside text-base-content/70">
                    <li>macOS 11.0 或更高版本</li>
                    <li>8GB RAM 以上</li>
                    <li>2GB 可用磁盘空间</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Linux</h3>
                  <ul className="list-disc list-inside text-base-content/70">
                    <li>Ubuntu 20.04 或更高版本</li>
                    <li>8GB RAM 以上</li>
                    <li>2GB 可用磁盘空间</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download