import error  from '../assets/404.svg'

export default function PageNotFound() {
    return (
        <div className="flex justify-center flex-col items-center min-h-fit  ">
        <img src={error} alt="404" className="w-[50%] h-[50%] bg-white "/>
        <h3 className="text-4xl font-medium text-black my-5 text-center ">Oh No! Something went wrong. </h3>
        <h3 className="text-xl font-medium text-black mb-5 ">This Page Was Not Found.</h3>
        <a href="/" className="text-medium  font-medium text-white bg-primary
        px-4 py-2 rounded-lg hover:duration-500 cursor-pointer hover:bg-[#12c77c]">
            Go Home</a>
        </div>
    )
}