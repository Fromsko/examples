
export default function ProfileCard() {
    return (
        <div className="selection-card-lay">
            <div className="text-center mb-8">
                <img
                    src="https://q.qlogo.cn/g?b=qq&nk=1614355756&s=100"
                    alt="头像"
                    className="profile-img mx-auto mb-4 rounded-full w-24 h-24 object-cover shadow-md"
                />
                <h1 className="text-3xl font-bold text-white">Fromsko</h1>
                <p className="text-lg text-gray-400">前端练习生</p>
            </div>
        </div>
    );
}
