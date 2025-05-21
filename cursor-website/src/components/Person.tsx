interface PersonProps {
  name?: string;
}

const Person: React.FC<PersonProps> = ({ name }) => {
  return (
    <div className="dropdown dropdown-end inline-block roudned-full">
      <div tabIndex={0} role="button" className="btn btn-ghost h-10 px-4 flex items-center gap-3 min-h-0">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              alt="用户头像"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <span className="normal-case text-sm">{name || '未登录'}</span>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-36 p-2 shadow">
        <li>
          <a href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            返回主页
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            退出登录
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Person
