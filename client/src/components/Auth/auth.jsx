import React, { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"
import { AiFillApple } from "react-icons/ai"

export default function Auth() {

    const [isSignIn, setIsSignIn] = useState(true)
    const [isSignUp, setIsSignUp] = useState(false)



    return (
        <div className="flex flex-col justify-between p-4 rounded-xl  border-2 border-gray-200 w-[35%] m-auto items-center">
            <h1 className="font-semibold text-2xl text-black mb-2">
                { isSignIn ? "Welcome Back" : "Welcome"}
            </h1>
            <h3 className="font-medium text-black">{ isSignIn ? "Please enter your details." : "Please sign up with your details."}</h3>
            <div className="p-1 rounded-lg h-12 my-4 cursor-pointer bg-gray-200 w-8/12 flex flex-row justify-evenly">
                <h3 className="w-[49%] rounded-lg px-2 justify-center items-center flex h-full font-medium"
                style={{ background: isSignIn ? "#ffffff" : null }}
                onClick={() => {
                    setIsSignIn(true)
                    setIsSignUp(false)
                }}>
                    Sign In
                </h3>
                <h3 className="w-[49%] rounded-lg px-2 justify-center items-center flex h-full font-medium"
                style={{ background: isSignUp ? "#ffffff" : null }}
                onClick={() => {
                    setIsSignIn(false)
                    setIsSignUp(true)
                }}>
                    Sign Up
                </h3>
            </div>
            {/* slider form */}
            <div className="w-8/12 flex flex-row justify-evenly">
                <FaFacebookF className="text-4xl bg-gray-200 p-2 rounded-lg cursor-pointer" style={{ color: '#1877F2' }}/>
                <FcGoogle className="text-4xl bg-gray-200 p-2 rounded-lg cursor-pointer"/>
                <AiFillApple className="text-4xl bg-gray-200 p-2 rounded-lg cursor-pointer"/>
            </div>
        </div>
    )
}