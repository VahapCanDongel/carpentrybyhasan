import React from 'react';

export default function Welcome() {
    return (
        <div className="w-full mt-5 mb-20 sm:w-full">
            <div className="w-full relative sm:w-full sm:h-96">
                <img
                    src="https://www.betterteam.com/images/lead-carpenter-job-description-6240x4160-20201118_2020-11-18-153427.jpeg?crop=16:9,smart&width=1200&dpr=2"
                    className="object-cover h-full w-full sm:w-full"
                    alt="your-alt-text"
                />

                <div className="absolute top-0 left-0 text-white text-9xl font-bold p-4 sm:text-[60px]">Carpentry By Hasan</div>
            </div>
        </div>
    );
}
