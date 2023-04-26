export default function Navigation() {
    return (
        <div className="flex justify-between items-center w-1/2 p-4 h-[150px]">
            <div className="bg-gray-400 w-[80px] h-[80px] rounded-full"></div>
            <ul className="flex gap-4 items-center sm:hidden">
                <li>About</li>
                <li>Services</li>
                <li>Testimonlials</li>
                <li>Projects</li>
                <li className="bg-gray-200 p-2 rounded-sm">Contact</li>
            </ul>
        </div>
    )
}