import React from 'react';
import Contact from '../footer/Contact';

const ContentCover = () => {
    return (
        <div>
            <div
                className="relative flex flex-col justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/272243/pexels-photo-272243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    height: "830px",
                }}
            >

                <div className='text-center'>
                    <h4 className='uppercase text-lg text-[#D0B47F]'>Want to Know more?</h4>
                    <h1 className="text-white lg:font-[600] lg:text-[42px] md:w-11/12 text-[28px] mb-4 lg:mb-0">
                        We love to hear from our Clients and subscribers!
                    </h1>
                </div>
                <Contact></Contact>

            </div>

        </div>
    );
};

export default ContentCover;