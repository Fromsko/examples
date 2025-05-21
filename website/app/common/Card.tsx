export default function Card({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-[#1E293B] rounded-lg p-6 shadow-lg flex flex-col justify-between">
            <div>
                <div className="flex items-center text-white text-lg font-semibold">
                    <i className="fas fa-sparkles text-blue-500 mr-2"></i>
                    {title}
                </div>
                <p className="text-gray-400 text-sm mt-2">{description}</p>
            </div>
            <div className="flex space-x-4 mt-6">
                <button className="button-down-lay">
                    Read More
                </button>
                <button className="bg-[#334155] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#475569]">
                    View Examples
                </button>
            </div>
        </div>
    );
}
