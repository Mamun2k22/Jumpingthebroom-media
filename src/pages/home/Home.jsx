import React from 'react';

import Card from './Card';
import ContentCover from './ContentCover';
import Hero from './Hero';
import HoverCard from './HoverCard';
import SwiperSection from './SwiperSection';
import WeedTv from './WeedTv';
import WhoContent from './WhoContent';

const Home = () => {
    return (

        <div>
            <Hero></Hero>
            <WhoContent></WhoContent>
            <Card></Card>
            <HoverCard></HoverCard>
            <SwiperSection></SwiperSection>
            <WeedTv></WeedTv>
            <ContentCover></ContentCover>



        </div>
    );
};

export default Home;