import React from 'react';

export default function About() {
    return (
        <div className="flex w-1/2 items-center justify-center my-20 flex-col mx-auto sm:w-full sm:p-2" id='about'>
            <div className="flex items-center justify-center gap-16 xl:flex-col sm:w-full sm:justify-center sm:items-center ">
                <div>
                    <div className="mr-auto font-bold text-[50px] xl:text-4xl lg:text-3xl">
                        About Us
                    </div>
                    <p className="w-[700px] mr-auto text-[18px] mt-4 xl:w-full xl:text-xl lg:text-lg">Crafting custom woodwork that elevates your space to new heights. Welcome to our carpentry workshop, where our skilled artisans bring your vision to life. From bespoke furniture to intricate cabinetry, we're passionate about creating functional and stunning pieces that stand the test of time. Let us help you turn your home or business into a work of art. Explore our portfolio and let's start building something beautiful together.</p>

                    <ul className='mt-6'>
                        <li className='flex items-center gap-4'>
                            <div className='bg-gray-700 w-2 h-2 rounded-full'></div>
                            <div>
                                Certified Materials
                            </div>
                        </li>
                        <li className='flex items-center gap-4'>
                            <div className='bg-gray-700 w-2 h-2 rounded-full'></div>
                            <div>
                                Creative Designs
                            </div>
                        </li>
                        <li className='flex items-center gap-4'>
                            <div className='bg-gray-700 w-2 h-2 rounded-full'></div>
                            <div>
                                Well Managed Project Time
                            </div>
                        </li>
                    </ul>

                </div>

                <div className='w-[420px] bg-gray-700  h-[450px] sm:w-[350px] p-6 flex flex-col items-center justify-center gap-4'>
                    <div className='text-white text-[25px] text-center font-semibold'>
                        Request a Quote
                    </div>

                    <input type='text' placeholder='Your Name' className='p-2 rounded-sm w-[350px] sm:w-[330px] bg-zinc-100' />
                    <input type='email' placeholder='Your Email' className='p-2 rounded-sm w-[350px] bg-zinc-100 sm:w-[330px]' />
                    <textarea placeholder='Your Message' className='p-2 rounded-sm w-[350px] h-[150px] resize-none bg-zinc-100 sm:w-[330px]'></textarea>
                    <div className='bg-orange-400 p-3 rounded-sm mr-auto ml-2 text-white cursor-pointer hover:bg-orange-300 transition-all sm:w-[280px]  sm:text-center'>Send Message</div>
                </div>
            </div>
        </div>
    )
}
