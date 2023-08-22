export default function TestimonialCard({ testimonial_paragraph, user }) {
    return (
        <div className="w-[350px] h-[280px] rounded-sm flex flex-col justify-between items-center text-[15px]  sm:w-[400px] my-9">
            <div>
                {testimonial_paragraph}
            </div>

            <div className="mr-auto font-bold mt-4 mb-8">{user}</div>
        </div>
    )
}