import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const WeedTv = () => {
    return (
        <div className='lg:my-40 my-4'>
            <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8'>

                <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse justify-between gap-4">

                    <div className="lg:mb-0 md:mb-14 mb-14 items-center lg:items-end">

                        <h5 className="font-medium text-lg my-2">
                            <a className='text-[#C2945E] uppercase text-lg' href="www.blackweeding.com">What is Affinity Weddings TV? </a>
                        </h5>
                        <br />
                        <h1 className="font-medium text-lg my-2">
                            <a className='text-[#032A58] font-bold lg:text-4xl text-3xl' href="www.blackweeding.com">The country's only wedding <br /> television network</a>
                        </h1>
                        <br />
                        <p >
                            Black wedding vendors are often overlooked in Houston’s wedding market. <br /> The Black Wedding Market was developed to link Black-owned businesses <br /> with the people who want to help them the most. It’s vital that Black couples <br /> planning a wedding are able to communicate with vendors  who look like <br /> them and can relate to their unique wedding  needs. The Black Wedding <br /> Market aspires to be a safe haven for all Black couples planning weddings; <br /> it is a place where everyone is welcome.
                        </p>
                        <div className="lg:mb-0 md:mb-10 ">

                            <h5 className="font-medium text-lg lg:my-3 text-center lg:text-start">
                                <a className='text-[#C2945E] underline' href="www.https://affinityweddings.net">SHOW MORE DETAILS<BsArrowRight className="w-4 h-4 inline" /> </a>
                            </h5>

                        </div>

                    </div>

                    <div class="sm:w-1/2 md:w-1/3 lg:w-5/12 p-4">
                        <div class="bg-white rounded-lg overflow-hidden">
                            <div class="overflow-hidden">
                                <img
                                    className="object-fill lg:w-11/12 h-80 sm:w-full md:w-11/12"
                                    src="https://images.pexels.com/photos/903400/pexels-photo-903400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="img2"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                {/* flex*/}
                {/* <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div class="w-full lg:w-1/2 p-4">
                        <h2 class="text-lg font-medium mb-2">Column 1 Title</h2>
                        <p class="text-gray-600 mb-4">Column 1 Description <a href="#" class="text-blue-500">Link</a></p>
                    </div>
                    <div class="w-full lg:w-1/2 p-4">
                        <h2 class="text-lg font-medium mb-2">Column 2 Title</h2>
                        <p class="text-gray-600 mb-4">Column 2 Description <a href="#" class="text-blue-500">Link</a></p>
                    </div>
                </div> */}



            </div>
        </div>
    );
};

export default WeedTv;