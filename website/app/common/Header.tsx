import { Link } from "react-router";
import TabSelect from "./TabSelect";

export default function Header({ title }: { title: string }) {
    return (
        <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 border border-b-gray-600 bg-[#0F172A] z-50 select-none">
            <div className="flex items-center">
                <i className="fas fa-code text-blue-500 text-xl"></i>
                <span className="ml-2 text-white text-lg font-semibold">oAo</span>
            </div>
            <nav className="flex text-sm font-medium">
                <TabSelect />
            </nav>
            <Link to={"https://github.com/fromsko"} className="button-down-lay">
                GitHub
            </Link>
        </header>
    );
}
