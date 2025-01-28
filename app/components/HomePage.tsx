import About from "./About";
import NavBar from "./NavBar";
import Background from "./Background";

export default function HomePage() {

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden selection:bg-[#a7a7a7] selection:text-[#090909]">
            <Background />
            <NavBar />
            <About />
        </div>
    );
}