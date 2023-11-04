import slugify from "slugify";
import Logo from "../assets/logo.svg"
function Header() {
  return (
    <header className="p-3 flex justify-between w-full items-center">
      <div className="logo-links flex w-[70%] items-center">
        <img src={Logo} alt="Degree Dollars Logo" className="h-10" />
        <ul className="hidden md:flex space-x-3 ml-12">
          {["Why us?", "about", "How it works?"].map((link) => {
            return (
              <li key={link}>
                <a className="capitalize" href={slugify(link, {lower: true})}>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
        <div>
          <button className="border-[#2ecc71] border-2 py-2 px-4
          rounded-xl text-[#2ecc71] font-medium font-[Inter]
          text-sm hover:text-white hover:bg-[#12c77c] hover:border-[#12c77c] hover:transition 
          hover:duration-500">Start A Campaign</button>
        </div>
    </header>
  );
}
export default Header;
