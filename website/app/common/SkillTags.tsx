
export default function SkillTags() {
    const skills = [
        "Tailwind CSS", "Fastapi", "Gorm", "Gin", "fiber", "kratos", "React", "Vue", "Golang",
        //  "SpringBoot", "SpringCloud", "Mybatis", "k8s", "Canddy"
    ];

    return (
        <div className="selection-card-lay">
            <h2 className="text-2xl font-bold mb-5 text-white">技能</h2>
            <div className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="skill-tag bg-orange-500/80 border border-[#333] text-gray-200 rounded-full px-4 py-2 text-sm m-2 shadow-md hover:scale-105 transition-transform duration-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
