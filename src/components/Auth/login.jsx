export default function Login() {

    return (
        <div className="flex flex-col justify-between p-4 rounded-xl  border-2 border-[#f5f5f5] w-[35%] m-auto items-center">
            <h1 className="font-semibold text-2xl text-black " >Welcome Back</h1>
            <h3 className="font-medium text-lg text-black">Please enter your details.</h3>
            <div className="p-1 rounded-lg h-12 my-4 cursor-pointer bg-[#f5f5f5] w-8/12 flex flex-row justify-evenly">
                <h3 className="w-[48%] bg-white rounded-lg px-2 justify-center items-center flex h-full font-medium ">
                    Sign In
                </h3>
                <h3 className="w-[48%] rounded-lg px-2 justify-center items-center flex h-full font-medium ">
                    Sign Up
                </h3>
            </div>
        </div>
    )
}