import { useState } from "react";
import jtb from '../../assets/jtb.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div class="bg-white shadow-sm">
            <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16 text-white">
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        {/* <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                About
                            </a>
                        </li> */}
                        <li>
                            <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                class="font-normal tracking-wide text-[#032A58] uppercase transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Advertising
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                class="font-normal tracking-wide text-[#032A58] uppercase transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Affinity Weddings TV
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                class="font-normal tracking-wide text-[#032A58] uppercase transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Black Wedding Market
                            </a>
                        </li>
                    </ul>
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >

                        <span class="ml-2 text-xl fonfont-normal tracking-wide text-[#032A58] uppercase uppercase">
                            <img className="h-8" src={jtb} alt="" srcset="" />
                        </span>
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <a
                                href="/"
                                aria-label="About us"
                                title="About us"
                                class="font-normal tracking-wide text-[#032A58] uppercase transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                About us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Sign in"
                                title="Sign in"
                                class="font-normal tracking-wide text-[#032A58] uppercase transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Sign in
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Sign up"
                                title="Sign up"
                                class="font-normal tracking-wide text-[#032A58] uppercase transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Sign up
                            </a>
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >

                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >

                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Advertising
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Affinity Weddings TV
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Black Wedding Market
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    About us
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Sign in"
                                                    title="Sign in"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Sign in
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Sign up
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;