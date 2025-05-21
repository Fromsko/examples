import ReactLogo from '@assets/react.svg'
import React from 'react'
import { Link } from 'react-router-dom'

const MainContent: React.FC = () => {
  return (
    <main className="pt-10">
      <div className="relative flex h-screen w-full select-none flex-col items-center justify-center overflow-hidden py-4">
        <div
          className="relative z-10 flex w-full flex-col items-center justify-between px-5 xl:px-0"
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className="flex flex-col items-center">
            <div
              className="mb-8 h-24 w-24 rounded-lg border border-gray-200/20 p-2 shadow-lg backdrop-blur-sm dark:border-gray-600/50"
              style={{ opacity: 1, transform: 'none' }}
            >
              <img src={ReactLogo} alt="Chat Nio Logo" className="h-full w-full object-contain" />
            </div>
            <h1
              className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-gray-300 dark:to-white sm:text-6xl dark:text-base-content"
              style={{ opacity: 1, transform: 'none' }}
            >
              Cusor
            </h1>
            <p
              className="mt-6 text-center text-xl font-medium text-gray-600 dark:text-gray-400"
              style={{ opacity: 1, transform: 'none' }}
            >
              集成 LLM 环境的{' '}
              <strong>
                <span className="relative">
                  一站式
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path
                      d="M0,5 Q25,9 50,5 T100,5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>
              </strong>
              企业解决方案
            </p>
            <div className="mt-10 flex justify-center gap-x-6" style={{ opacity: 1, transform: 'none' }}>
              <Link to={'/download'} className="btn btn-primary">
                立即开始
              </Link>
              <Link to={'https://github.com/fromsko'} className="btn btn-outline">
                了解更多
              </Link>
            </div>
          </div>
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full fill-gray-400/30 stroke-gray-400/30 opacity-40 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        >
          <defs>
            <pattern id=":r0:" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:r0:)" />
          <svg x="-1" y="-1" className="overflow-visible">
            <rect
              width="39"
              height="39"
              x="601"
              y="1321"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.2042706404317869"
            />
            <rect
              width="39"
              height="39"
              x="81"
              y="1281"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.07580339607375208"
            />
            <rect
              width="39"
              height="39"
              x="641"
              y="1041"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.02556898606417235"
            />
            <rect
              width="39"
              height="39"
              x="161"
              y="1161"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.1431125692470232"
            />
            <rect
              width="39"
              height="39"
              x="281"
              y="1001"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.2512817332899431"
            />
            <rect
              width="39"
              height="39"
              x="601"
              y="81"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.351506257764413"
            />
            <rect
              width="39"
              height="39"
              x="41"
              y="1201"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4250097441399703"
            />
            <rect
              width="39"
              height="39"
              x="321"
              y="1121"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4834353821206605"
            />
            <rect
              width="39"
              height="39"
              x="761"
              y="561"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.49976938280451577"
            />
            <rect
              width="39"
              height="39"
              x="201"
              y="161"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.47141298481437843"
            />
            <rect
              width="39"
              height="39"
              x="81"
              y="1121"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4161703632125864"
            />
            <rect
              width="39"
              height="39"
              x="641"
              y="561"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.32529979616811033"
            />
            <rect
              width="39"
              height="39"
              x="681"
              y="1321"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.22604589762340765"
            />
            <rect
              width="39"
              height="39"
              x="241"
              y="481"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.11580947415495757"
            />
            <rect width="39" height="39" x="321" y="361" fill="currentColor" strokeWidth="0" opacity="0" />
            <rect width="39" height="39" x="241" y="1001" fill="currentColor" strokeWidth="0" opacity="0" />
            <rect width="39" height="39" x="881" y="201" fill="currentColor" strokeWidth="0" opacity="0" />
            <rect width="39" height="39" x="1" y="761" fill="currentColor" strokeWidth="0" opacity="0" />
            <rect
              width="39"
              height="39"
              x="521"
              y="521"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.05150875986146275"
            />
            <rect
              width="39"
              height="39"
              x="601"
              y="1361"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.14210949510743376"
            />
            <rect
              width="39"
              height="39"
              x="401"
              y="521"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.24139555379224475"
            />
            <rect
              width="39"
              height="39"
              x="721"
              y="201"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.320018378624809"
            />
            <rect
              width="39"
              height="39"
              x="1"
              y="1241"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.39319752431765664"
            />
            <rect
              width="39"
              height="39"
              x="281"
              y="321"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4521711997076636"
            />
            <rect
              width="39"
              height="39"
              x="441"
              y="401"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4887963746004971"
            />
            <rect
              width="39"
              height="39"
              x="681"
              y="1081"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4999528807675233"
            />
            <rect
              width="39"
              height="39"
              x="761"
              y="721"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.48400055766978767"
            />
            <rect
              width="39"
              height="39"
              x="321"
              y="1321"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.4487244969495805"
            />
            <rect
              width="39"
              height="39"
              x="161"
              y="681"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.39564019087993074"
            />
            <rect
              width="39"
              height="39"
              x="481"
              y="921"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.3203714453120483"
            />
          </svg>
        </svg>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black" style={{ opacity: 1 }}>
          <div
            className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-40 blur-[100px]"
            style={{ opacity: 0.4, transform: 'none' }}
          />
          <div
            className="absolute left-1/3 right-0 top-1/3 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-400 opacity-40 blur-[100px]"
            style={{ opacity: 0.4, transform: 'none' }}
          />
        </div>
      </div>

      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-base-content mb-6">AI驱动的代码编辑器</h1>
            <p className="text-xl text-base-content/80 mb-8">
              使用最先进的AI技术提升您的编程效率。智能代码补全、实时代码分析、自动重构等功能助您事半功倍。
            </p>
            <div className="flex justify-center space-x-4"></div>
          </div>
        </div>
      </div>

      <div className="py-44 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">智能代码补全</h3>
                <p className="text-base-content/70">基于上下文的智能代码建议，提高编码速度</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">实时代码分析</h3>
                <p className="text-base-content/70">即时发现潜在问题，提供优化建议</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">自动代码重构</h3>
                <p className="text-base-content/70">一键优化代码结构，提升代码质量</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
