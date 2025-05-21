import Form from '@/components/form'
import Person from '@components/Person'
import React, { useEffect, useState } from 'react'

interface App {
  id: number
  name: string
  status: 'running' | 'stopped'
}

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState('light')
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [selectedApp, setSelectedApp] = useState<App | null>(null)

  const apps: App[] = [
    { id: 1, name: '应用 1', status: 'running' },
    { id: 2, name: '应用 2', status: 'stopped' }
  ]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleAction = (app: App) => {
    setSelectedApp(app)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="flex h-screen">
        <aside
          className={`bg-base-200 transition-[width] duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-64'} shadow-lg`}
        >
          <div className="p-4 flex items-center justify-between">
            <h1
              className={`font-bold text-xl transition-opacity duration-300 ${
                collapsed ? 'opacity-0 w-0' : 'opacity-100'
              }`}
            >
              管理系统
            </h1>
            <button
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
              onClick={() => setCollapsed(!collapsed)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={collapsed ? 'M13 5l7 7-7 7' : 'M11 19l-7-7 7-7'}
                />
              </svg>
            </button>
          </div>

          <ul className="menu menu-compact px-2">
            <li className="my-1">
              <a
                className={`flex items-center p-4 rounded-lg hover:scale-105 transition-all duration-200 ${
                  activeMenu === 'dashboard' ? 'bg-primary text-primary-content' : 'hover:bg-base-300'
                }`}
                onClick={() => setActiveMenu('dashboard')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className={`ml-3 transition-opacity duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  仪表盘
                </span>
              </a>
            </li>
            <li className="my-1">
              <a
                className={`flex items-center p-4 rounded-lg hover:scale-105 transition-all duration-200 ${
                  activeMenu === 'apps' ? 'bg-primary text-primary-content' : 'hover:bg-base-300'
                }`}
                onClick={() => setActiveMenu('apps')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className={`ml-3 transition-opacity duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  应用管理
                </span>
              </a>
            </li>
            <li className="my-1">
              <a
                className={`flex items-center p-4 rounded-lg hover:scale-105 transition-all duration-200 ${
                  activeMenu === 'settings' ? 'bg-primary text-primary-content' : 'hover:bg-base-300'
                }`}
                onClick={() => setActiveMenu('settings')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className={`ml-3 transition-opacity duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  设置
                </span>
              </a>
            </li>
          </ul>
        </aside>

        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="navbar bg-base-300 shadow-md">
            <div className="flex-1">
              <h2 className="text-xl font-bold px-4">
                {activeMenu === 'dashboard' && '仪表盘'}
                {activeMenu === 'apps' && '应用管理'}
                {activeMenu === 'settings' && '设置'}
              </h2>
            </div>
            <div className="flex-none gap-3 mr-2 flex">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  主题
                </label>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                  <li>
                    <a onClick={() => setTheme('light')}>浅色</a>
                  </li>
                  <li>
                    <a onClick={() => setTheme('dark')}>深色</a>
                  </li>
                </ul>
              </div>
              <Person name="张三" />
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {activeMenu === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">总访问量</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% 高于上月</div>
                  </div>
                </div>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">活跃用户</div>
                    <div className="stat-value text-primary">1,200</div>
                    <div className="stat-desc">↗︎ 5% 增长</div>
                  </div>
                </div>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">系统负载</div>
                    <div className="stat-value text-secondary">45%</div>
                    <div className="stat-desc">运行正常</div>
                  </div>
                </div>
              </div>
            )}

            {activeMenu === 'apps' && (
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">应用列表</h2>
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>应用名称</th>
                          <th>状态</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {apps.map((app) => (
                          <tr key={app.id}>
                            <td>{app.name}</td>
                            <td>
                              <div className={`badge ${app.status === 'running' ? 'badge-success' : 'badge-warning'}`}>
                                {app.status === 'running' ? '运行中' : '已停止'}
                              </div>
                            </td>
                            <td>
                              <button
                                className="btn btn-sm btn-primary hover:scale-105 transition-transform"
                                onClick={() => handleAction(app)}
                              >
                                管理
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeMenu === 'settings' && (
              <div className="flex gap-8">
                <div className="card shadow-xl flex-none">
                  <div className="card-body w-80 bg-base-200">
                    <h2 className="card-title">系统设置</h2>
                    <div className="form-control w-full mt-2">
                      <label className="label">
                        <span className="label-text">系统名称</span>
                      </label>
                      <input type="text" placeholder="输入系统名称" className="input input-bordered w-full" />
                    </div>
                    <button className="btn btn-primary">保存设置</button>
                  </div>
                </div>

                <div className="flex-1">
                  <Form />
                </div>
              </div>
            )}
          </div>

          {showModal && selectedApp && (
            <div className="modal modal-open">
              <div className="modal-box w-11/12 max-w-2xl mx-auto">
                <h3 className="font-bold text-lg text-center mb-4">{selectedApp.name} - 管理操作</h3>
                <div className="py-4">
                  <ul className="menu bg-base-200 rounded-box p-4 w-full max-w-md mx-auto space-y-2">
                    <li>
                      <a
                        className="flex items-center gap-2 p-3 rounded-lg hover:scale-105 transition-transform"
                        onClick={() => {
                          /* 实现启动逻辑 */
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        启动应用
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-2 p-3 rounded-lg hover:scale-105 transition-transform"
                        onClick={() => {
                          /* 实现停止逻辑 */
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h6v4H9z" />
                        </svg>
                        停止应用
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-2 p-3 rounded-lg hover:scale-105 transition-transform"
                        onClick={() => {
                          /* 实现重启逻辑 */
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        重启应用
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-2 p-3 rounded-lg hover:scale-105 transition-transform text-error"
                        onClick={() => {
                          /* 实现删除逻辑 */
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        删除应用
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="modal-action justify-center mt-6">
                  <button 
                    className="btn btn-primary min-w-[120px] hover:scale-105 transition-transform" 
                    onClick={() => setShowModal(false)}
                  >
                    关闭
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
