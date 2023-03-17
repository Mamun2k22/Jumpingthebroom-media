import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import jtb from '../../assets/jtb.png'

const WhoContent = () => {
    return (
        <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 '>
            <div className='lg:my-10 my-10'>
                <div className='flex flex-col-reverse lg:flex-row md:flex-col-reverse justify-between items-center lg:items-end'>
                    <div> <h5 className='text-[20px] font-[600] text-[#C2945E] uppercase'>Who we are</h5> <br />
                        <h2 className='text-[36px] font-[700] text-[#032A58]'>A Black Owned business seeking <br /> to Uplift the Black Community.</h2>
                    </div>

                    <div>
                        <img className='h-14' src={jtb} alt="" srcset="" />
                    </div>

                </div>


                <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 lg:mt-12 sm:mt-5'>

                    <div className='sm:col-span-2 col-span-1 sm:mt-0 mt-5 relative '>
                        <div className='flex flex-col justify-between items-start '>
                            <div>
                                <p className="">
                                    We are a Black owned magazine based in Houston. We hope to encourage black wedding vendors to reach their full potential through cooperation, connection, and grit. Our magazine is dedicated to the issues that are important to upcoming brides to be. We publish content and ads for those of you who looking for Exposure throughout the City of Houston and more.

                                </p>
                            </div>
                            <div className='flex absolute bottom-0 gap-10 lg:mt-0 -my-8'>
                                <a className='text-[#C2945E]' href="https://jordancollective.com/">OUR LINK<BsArrowRight className="w-4 h-4 inline" /> </a>
                                <a className='text-[#C2945E] uppercase' href="https://jordancollective.com/">Advertising Your Business<BsArrowRight className="w-4 h-4 inline" /> </a>

                            </div>
                        </div>

                    </div>
                    <div>
                        <p>
                            Tradition is the transmission of knowledge that leads to the formation of what is most precious today - values ​​that we value and respect, values ​​that we pass on from generation to generation.

                            It's important to put emphasis on every thing you do, on every detail...

                            Create everything with passion
                        </p>
                    </div>

                    <div>
                        <p>
                            and respect for the final piece - only then will you create a true essence.

                            Few of us can do that. But if you succeed, you will create something that is already hard to beat... Which does not lose its value, but on the contrary strengthens it and lasts forever... With love for tradition, we make custom-made luxury beds.
                        </p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default WhoContent;