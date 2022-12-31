import Link from "next/link";
import {Hover} from "../styles/styled"
import { cx } from "@linaria/core";



const Navbar = () => {
  return <nav>
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className={cx("text-xl font-semibold hover:border-b-8 border-blue-500 hover:cursor-pointer",Hover)}>GITHUB PAGE</a>
  </div>
  <div className="navbar-center">
  <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
  <Link href="/about" className="btn btn-ghost normal-case text-xl">About</Link>
  <Link href="/users" className="btn btn-ghost normal-case text-xl">Users</Link>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  
  </nav>

};

export default Navbar;
