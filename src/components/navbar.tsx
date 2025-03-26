export function NavBar() {
  return (
    <nav className="flex justify-between w-full py-8 px-4  text-black">
      <div>
        <span className="relative group transition-transform">
          <span className="absolute bg-pink-400 w-full h-full -skew-12 -z-1 duration-300 group-hover:skew-12"></span>
          <span className="absolute w-full h-full bg-blue-400  skew-12 -z-1 duration-300 group-hover:-skew-12"></span>
          <p className="text-white">Developer logo</p>
        </span>
      </div>
      <ul className="flex justify-center h-full">
        <li>
          <a className="py-4 px-2" href="">
            Home
          </a>
        </li>
        <li>
          <a className="py-4 px-2" href="">
            About
          </a>
        </li>
        <li>
          <a className="py-4 px-2" href="">
            Services
          </a>
        </li>
        <li>
          <a className="py-4 px-2" href="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
