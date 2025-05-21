export default function Form() {
  return (
    <div className="card w-80 bg-base-200 shadow-xl">
      <div className="card-body gap-3">
        <input placeholder="Email" className="input" />
        <label className="label">
          <input type="checkbox" className="toggle toggle-sm" />
          提交到新闻通讯
        </label>
        <label className="label">
          <input type="checkbox" className="toggle toggle-sm" />
          接受使用条款
        </label>
        <button className="btn btn-primary">保存</button>
      </div>
    </div>
  )
}
