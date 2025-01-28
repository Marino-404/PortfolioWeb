import About from "./About";
import NavBar from "./NavBar";

export default function HomePage() {

    return (
        <div className="flex flex-col h-screen w-full">
            <NavBar />
            <About />
        </div>
    );
}