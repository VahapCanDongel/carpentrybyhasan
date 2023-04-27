import React from 'react';

export default function About() {
    return (
        <div className="flex w-1/2 items-center justify-center my-20 flex-col mx-auto sm:w-full sm:p-2">
            <div className="flex items-center justify-center gap-16 xl:flex-col sm:w-full sm:justify-center sm:items-center">
                <div>
                    <div className="mr-auto font-bold text-[50px] xl:text-4xl lg:text-3xl">
                        About Us
                    </div>
                    <p className="w-[600px] mr-auto text-[22px] mt-4 xl:w-full xl:text-xl lg:text-lg">Crafting custom woodwork that elevates your space to new heights. Welcome to our carpentry workshop, where our skilled artisans bring your vision to life. From bespoke furniture to intricate cabinetry, we're passionate about creating functional and stunning pieces that stand the test of time. Let us help you turn your home or business into a work of art. Explore our portfolio and let's start building something beautiful together.</p>
                </div>
                <img src="https://major.com.au/wp-content/uploads/2019/12/Carpenter-with-Timber-1.jpg" alt="" className="w-[450px] h-[350px] rounded-sm xl:w-full xl:h-auto" />
            </div>
        </div>
    )
}
