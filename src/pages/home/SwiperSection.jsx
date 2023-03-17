import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import SwiperImages from './SwiperImages';

const SwiperSection = () => {
    return (
        <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 lg:my-40 my-8'>

            <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse justify-between gap-4">
                <div class="sm:w-1/2 md:w-1/3 lg:w-6/12 p-4">
                    <div class="bg-white rounded-lg overflow-hidden">
                        <div class="overflow-hidden">
                            <SwiperImages></SwiperImages>
                        </div>

                    </div>
                </div>
                <div className="lg:mb-0 md:mb-14 mb-14 items-center lg:items-end">

                    <h5 className="font-medium text-lg my-2">
                        <a className='text-[#C2945E] uppercase text-lg' href="www.blackweeding.com">Showroom Prague </a>
                    </h5>
                    <br />
                    <h1 className="font-medium text-lg my-2">
                        <a className='text-[#032A58] font-bold lg:text-4xl text-3xl' href="www.blackweeding.com">We look forward to <br /> welcoming you to our <br /> showroom</a>
                    </h1>
                    <br />
                    <p >
                        We look forward to welcoming you to our showroom with luxury <br />
                        Le Chomat beds at Fügnerovo náměstí 6, Prague 2.
                    </p>
                    <div className="lg:mb-0 md:mb-10 ">

                        <h5 className="font-medium text-lg lg:my-3 text-center lg:text-start">
                            <a className='text-[#C2945E]' href="www.blackweeding.com">SHOW MORE MAP<BsArrowRight className="w-4 h-4 inline" /> </a>
                        </h5>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default SwiperSection;