const header: React.FC = () => {


    return(
        <>
            <div className="w-full flex justify-center fixed top-5 left-0 z-50">
                <header className="w-[15rem] h-16 flex items-center justify-center bg-gray-600/30 backdrop-blur-sm rounded-xl border border-gray-600">
                    <ul className="list-none text-[16px] flex gap-4 font-bold cursor-pointer">
                        <li className="transition-transform duration-200 hover:scale-110" onClick={()=> scrollToObkect("home")}>Home</li>
                        <li className="transition-transform duration-200 hover:scale-110" onClick={()=> scrollToObkect("galary")}>Gallary</li>
                        <li className="transition-transform duration-200 hover:scale-110"onClick={()=> scrollToObkect("about")}>About</li>
                    </ul>
                </header>
            </div>
        </>
    );
}

const scrollToObkect = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    };
}

export default header;