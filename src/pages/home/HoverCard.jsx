import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function HoverCard() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cardDetails = [
        {
            id: 101,
            title: "Photographed by Tara Winstead",
            date: "2021-22 Family",
            imageUrl: "https://images.pexels.com/photos/6479591/pexels-photo-6479591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:
                "Click the image above to watch Calvin (11 years old) and his mom, Jackie, share their experience at All-Star Academy.",
            watchNowUrl: "https://www.youtube.com/watch?v=9PzOOxPLD7Y",
        },
        {
            id: 102,
            title: "Offer Two: $150/ month ",
            date: "2021-22 Family",
            imageUrl: "https://images.pexels.com/photos/12705633/pexels-photo-12705633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:
                "Click the image above to watch Calvin (11 years old) and his mom, Jackie, share their experience at All-Star Academy.",
            watchNowUrl:
                "https://www.youtube.com/watch?v=17hGSeEqE40&feature=youtu.be",
        },
        {
            id: 103,
            title: "Offer Three: $200/ month",
            date: "2021-22 Family",
            imageUrl: "https://images.pexels.com/photos/735249/pexels-photo-735249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:
                "Click the image above to watch Olga, parent of a 3rd grader, share her experience at All-Star Academy",
            watchNowUrl: "https://www.youtube.com/watch?v=xLt2-7kwSgU",
        },
    ];

    return (
        <div className="bg-[#fff] my-10">
            <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8 justify-between items-center lg:items-end">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cardDetails?.map((card) => (
                        <div
                            key={card.id}
                            className="relative w-11/12 h-[450px] overflow-hidden shadow-lg"
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-top"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            />
                            <div
                                className={`absolute py-5 inset-x-0 bottom-0 bg-[#1D67CD] text-white ${hoveredCard === card.id
                                    ? "h-48 opacity-100"
                                    : "h-32 opacity-100"
                                    } transition-all duration-700 ease-in-out`}
                            >
                                <div className="h-full flex flex-col justify-start items-start px-4">
                                    <h3 className="text-lg font-semibold">{card.name}</h3>
                                    <p className="text-sm mb-3 mt-1">{card.details}</p>
                                    {hoveredCard === card.id && (
                                        <a
                                            href={card.watchNowUrl}
                                            className="text-white transition-all duration-700 ease-in-out inline-block"
                                        >
                                            Watch Now <BsArrowRight className="w-4 h-4 inline" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default HoverCard;
