import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>

        <header className="container py-5 mx-auto">
            <div className="grid gap-2 lg:grid-cols-2 mx-0 md:grid-cols-1 mx-3">
        <div className=" text-amber-50 uppercase text-xl font-semibold">
         <Link to="/">Abderrazak Dsouli</Link>
        </div>
         <ul className="flex text-gray-50">
        <li className="mx-2">
            <Link to="/">Home</Link>
        </li>
        <li className="mx-2">
            <Link to="/about">About</Link>
        </li>
        <li className="mx-2">
            <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-2">
            <Link to="/contact">Contact</Link>
        </li>
       </ul> 
            </div>
        </header>
    </>
  )
}
