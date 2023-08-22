import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
    return (
        <div className="flex w-1/2 items-center justify-center my-20 flex-col mx-auto sm:w-full sm:p-2 sm:mt-[370px]">

            <div className="mr-auto font-bold text-[50px] xl:text-4xl lg:text-3xl">
                Testimonials
            </div>

            <div className="flex flex-wrap gap-4 mr-auto justify-between sm:justify-center w-full mt-6">

                <TestimonialCard testimonial_paragraph={"Working with Carpentry By Hasan was an absolute pleasure. From the initial consultation to the final installation, their attention to detail was impeccable. They took my rough ideas for a custom bookshelf and turned them into a stunning reality that seamlessly blended with the rest of my home's design. It's evident that they put their heart and soul into every piece. Highly recommended for anyone who values quality and craftsmanship."} user={"Faruk Kilic"} />

                <TestimonialCard testimonial_paragraph={"I've had my fair share of dealings with carpenters over the years, but none have stood out quite like Carpentry By Hasan. Their team's dedication to preserving the authenticity of our heritage home while infusing modern touches was remarkable. They respected the history, yet weren’t afraid to innovate. Our newly restored wooden staircase is a testament to their skill and dedication."} user={"Idris Bilen"} />

                <TestimonialCard testimonial_paragraph={"Having Carpentry By Hasan craft a custom dining table for our family was a decision we’ll always cherish. It’s not just a piece of furniture; it’s a piece of art. Every dinner, every family gathering, we’re reminded of the craftsmanship and love that went into it. They took the time to understand our needs and preferences, resulting in a centerpiece that will be in our family for generations."} user={"David Barnes"} />

                <TestimonialCard testimonial_paragraph={" We hired Carpentry By Hasan for a complete kitchen overhaul, and they exceeded all our expectations. Every drawer, cabinet, and shelf was meticulously planned and executed. Their understanding of wood, its nuances, and how it interacts in a living space is unparalleled. Now, our kitchen isn't just a place to cook; it's the heart of our home, all thanks to their exceptional work."} user={"Ian Kell"} />


            </div>


        </div>
    )
}