import { useContext } from "react";
import moonTheme from "../../public/icons/icon-moon.svg";
import { AuthContext } from "../context/AuthContext";



const Navbar = () => {

    const authContext = useContext(AuthContext);

    const username = authContext?.user?.firstName || "Guest"
    
  return (
    <div className="fixed top-0 bg-transparent py-6 border-b border-b-amber-700 px-28 w-full">
        <div className="flex items-center text-white justify-between w-full">
            <div className="flex gap-3 items-center">
                <span>
                    <img src={moonTheme} alt="darkTheme" />
                </span>
                <span>Theme Switcher</span>
            </div>
            <div>
                <h2 className="text-xl">Hello {username}</h2>
            </div>

        </div>
    </div>
  )
}

export default Navbar