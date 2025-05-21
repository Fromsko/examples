import ProfileCard from "../common/ProfileCard";
import Quote from "../common/Quote";
import SkillTags from "../common/SkillTags";

export default function HomePage() {
    return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen text-gray-300">
            <section className="selection-lay">
                <ProfileCard />
            </section>

            <section className="selection-lay">
                <SkillTags />
            </section>

            <section className="selection-lay">
                <Quote />
            </section>
        </div>
    );
}
