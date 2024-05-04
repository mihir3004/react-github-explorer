import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col justify-center items-center px-5">
                <h1 className="text-white text-lg md:text-5xl text-center font-bold mb-20 md:mb-8">
                    Welcome to React GitHub Explorer
                </h1>
                <p className="text-white md:text-lg text-sm text-center mb-20 md:mb-8">
                    Discover trending GitHub repositories and explore topics you
                    love.
                </p>
                <Button
                    label="Get Started"
                    style={{ border: "none" }}
                    className="p-button-raised transition-none  text-gray-600 px-5 py-2 bg-white hover:text-white hover:bg-gray-400"
                    onClick={() => {
                        navigate("/repositeries");
                    }}
                />
            </div>
        </>
    );
}

export default Home;
