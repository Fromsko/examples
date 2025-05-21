import React from 'react'

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 mt-14">
          <h1 className="text-4xl font-bold mb-4">简单透明的定价方案</h1>
          <p className="text-xl text-base-content/70">为不同规模的团队和个人提供灵活的订阅选择</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">基础版</h2>
              <p className="text-base-content/70 mb-4">适合个人开发者</p>
              <div className="text-4xl font-bold mb-6">
                ¥0<span className="text-lg font-normal text-base-content/70">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  基础功能使用
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  社区支持
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1GB 存储空间
                </li>
              </ul>
              <button className="btn btn-outline w-full">免费开始</button>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="absolute -top-4 right-4">
                <div className="badge badge-secondary">最受欢迎</div>
              </div>
              <h2 className="card-title text-2xl mb-2">专业版</h2>
              <p className="opacity-70 mb-4">适合小型团队</p>
              <div className="text-4xl font-bold mb-6">
                ¥99<span className="text-lg font-normal opacity-70">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  所有基础版功能
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  优先技术支持
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  100GB 存储空间
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  高级数据分析
                </li>
              </ul>
              <button className="btn btn-secondary w-full">立即升级</button>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-2">企业版</h2>
              <p className="text-base-content/70 mb-4">适合大型企业</p>
              <div className="text-4xl font-bold mb-6">
                ¥299<span className="text-lg font-normal text-base-content/70">/月</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  所有专业版功能
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  24/7 专属支持
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  无限存储空间
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  自定义部署
                </li>
              </ul>
              <button className="btn btn-outline w-full">联系销售</button>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">如何选择合适的方案？</div>
              <div className="collapse-content">
                <p>
                  我们建议您根据团队规模和具体需求选择。基础版适合个人开发者，专业版适合小型团队，企业版则为大型企业提供更多定制化服务。
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">是否支持随时更换方案？</div>
              <div className="collapse-content">
                <p>是的，您可以随时升级或降级您的订阅方案。费用将按比例计算和调整。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
