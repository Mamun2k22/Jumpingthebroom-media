import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import hasi from '../../assets/hasi.jpg'


const Card = () => {
    return (
        <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8  lg:my-20 my-14'>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-4 gap-6">

                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content1-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-gray-800 font-bold tracking-wide">Community</span>
                                <span class="block text-gray-600 text-sm">The community helps guide us in our lives and we can guide our community as well with our stories.
                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="lg:text-2xl text-xl font-bold text-white tracking-wider leading-relaxed font-sans">Community</span>
                            <div class="pt-8 text-center">
                                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 2nd card */}
                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content2-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-gray-800 font-bold tracking-wide">Tips from Vendors</span>
                                <span class="block text-gray-600 text-sm">Hear from Vendors and their Tips and tricks that are tried and true.
                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="lg:text-2xl text-xl font-bold text-white tracking-wider leading-relaxed font-sans">Tips from Vendors</span>
                            <div class="pt-8 text-center">
                                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 3rd card */}
                <div className="py-4"
                >
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content3-div"
                        style={{ backgroundImage: `url(${hasi})` }}>
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-gray-800 font-bold tracking-wide">Brides Helping Brides</span>
                                <span class="block text-gray-600 text-sm">Need Advice? We all can use some help sometimes but who better to get advice from about your wedding than from those that have been down this journey?

                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="lg:text-2xl text-xl font-bold text-white tracking-wider leading-relaxed font-sans">Brides Helping Brides</span>
                            <div class="pt-8 text-center">
                                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 4th card */}
                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content4-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-gray-800 font-bold tracking-wide"> Inspiration </span>
                                <span class="block text-gray-600 text-sm">Everyone has that moments of “where do I start”. This section is all about inspiring you and helping you on your matrimonial journey.

                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="lg:text-2xl text-xl font-bold text-white tracking-wider leading-relaxed font-sans"> Inspiration </span>
                            <div class="pt-8 text-center">
                                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* 1st Card */}
            <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse justify-between items-center lg:items-end">
                <div className="lg:mb-0 lg:w-8/12 lg:pr-5 lg:mt-16 mt-6">
                    <div> <h5 className='text-[16px] font-[500] text-[#C2945E] uppercase'> Looking to Advertise?</h5>
                        <h2 className='text-[32px] font-[700] text-[#032A58] lg:my-4 my-2'>We are out to encourage black wedding vendors to reach their full potential through cooperation, connection, and grit. </h2>
                    </div>
                </div>
                <div className="lg:mb-0 md:mb-10">

                    <h5 className="font-medium text-base my-2">
                        <a className='text-[#C2945E] text-light uppercase' href="www.blackweeding.com">Looking for the Black Wedding Market Details?<BsArrowRight className="w-4 h-4 inline" /> </a>
                    </h5>

                </div>
            </div>





        </div>
    );
};

export default Card;


