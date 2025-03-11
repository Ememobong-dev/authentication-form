import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import eyeOpened from "../../public/icons/openEyeOutline.svg"
import eyeClosed from "../../public/icons/closeEyeOutline.svg"

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    setUsername("");
    setPassword("");
    setLoading(true)
  };

  const handleInputChange = (setterName) => (e) => {
    setterName(e.target.value);
    setLoading(false)
    dispatch({
      type: "CLEAR_ERROR",
    });
  };

  return (
    <div className="h-dvh flex justify-center items-center bg-gradient-to-r from-amber-800 to-blue-900  ">
      <Navbar />
      <div className="bg-white p-10 rounded-lg xl:w-1/4 md:1/2 w-[90%] ">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center text-amber-900 font-bold">
            SIGN-IN FORM
          </h2>
          <div className="my-5 ">
            <label htmlFor="username">USERNAME</label>
            <div className="rounded-lg p-px hover:bg-gradient-to-r hover:from-amber-800 w-full hover:to-blue-700 ">
              <input
                type="text"
                placeholder="E.g Victoria1521"
                className="hover:rounded-[calc(0.5rem-1px)] hover:bg-white hover:border-0 hover:outline-0 w-full outline-0 border  border-amber-800 py-3 px-6  "
                id="username"
                value={username}
                onChange={handleInputChange(setUsername)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="my-5 ">
            <label htmlFor="password">PASSWORD</label>
            <div className="rounded-lg p-px hover:bg-gradient-to-r hover:from-amber-800 w-full hover:to-blue-700">
              <div className="hover:rounded-[calc(0.5rem-1px)] hover:bg-white hover:border-0 hover:outline-0 w-full outline-0 border  border-amber-800 py-3 px-6 flex justify-between items-center">
                <input
                  type={seePassword ? 'text' : 'password'  }
                  placeholder="Enter Password"
                  className="hover:bg-white hover:border-0 hover:outline-0 w-full outline-0"
                  id="password"
                  value={password}
                  onChange={handleInputChange(setPassword)}
                  autoComplete="off"
                />
                <span>
                  <img className="cursor-pointer" src={!seePassword ? eyeClosed : eyeOpened  } onClick={() => setSeePassword(prev => !prev)} alt="eye" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button disabled={loading} className="bg-amber-900 rounded-lg flex justify-center cursor-pointer text-white items-center py-3 px-8 hover:bg-amber-700 hover:font-bold hover:text-black ">
              SIGN-IN
            </button>
          </div>
        </form>
        {error && (
          <div className="text-red-600 text-center my-3 bg-red-200 p-2 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
