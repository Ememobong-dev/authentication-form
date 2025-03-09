import { useState } from "react"

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {

    }
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-amber-800 to-blue-900  ">
        <div className="bg-white p-10 rounded-lg ">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl text-center text-amber-900 font-bold">SIGN-IN FORM</h2>
                <div className="my-5 ">
                    <label htmlFor="username">USERNAME</label>
                    <input type="text"
                    placeholder="Enter Placeholder"
                    className="rounded-lg w-full my-2 border border-amber-800 py-3 px-6"
                    id="username"
                    value={username}
                    onChange={ (e) => setUsername(e.target.value) }
                     />
                </div>
                <div className="my-5 ">
                    <label  htmlFor="password">PASSWORD</label>
                    <input type="text"
                    placeholder="Enter Placeholder"
                    className="rounded-lg w-full my-2 border border-amber-800 py-3 px-6"
                    id="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                     />
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-amber-900 flex justify-center cursor-pointer text-white rounded-lg items-center py-2 px-8"> 
                    SIGN-IN
                </button>  
                </div>
                

            </form>
         

        </div>
        
    </div>
  )
}

export default SignIn