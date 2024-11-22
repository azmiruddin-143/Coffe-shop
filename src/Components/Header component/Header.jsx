import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100 justify-between">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a class=" font-bold text-3xl">COFFE SHOP</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-black text-lg gap-5 px-1">
                        <NavLink>Home</NavLink>
                        <NavLink to="/coffe" >Coffe</NavLink>
                        <NavLink to="/deshbord">Deshbord</NavLink>
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Header;