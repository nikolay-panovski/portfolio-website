import Face from "photos/492686_square.jpg";

function HeaderGraphic() {
    return (
        <>
            <div className="flex flex-row relative w-full h-[67vh]">
                <div className="relative w-1/2 h-full">
                    {/*img x 4, grid */}
                    <h3 className="text-3xl pr-8 text-right absolute w-full top-[80%]">Video games</h3>
                </div>

                {/* middle: vertical line with image in center, on top of the regular flow */}
                <div className="absolute h-full top-0 border-solid border-[0.25rem] border-yellow-50" style={{left:"calc(50% - 0.375rem)"}}></div>
                <img src={Face} alt="Nikolay Panovski face" width="192" height="192"
                    className="rounded-full absolute top-[33%] left-1/2 border-solid border-[0.25rem] border-yellow-50"
                    style={{transform:"translate(-96px,-96px)"}} />
                <h1 className="text-4xl text-center absolute w-full top-[60%]">Nikolay&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Panovski</h1>

                <div style={{position:"relative", width:"50%", height:"100%"}}>
                    {/*img x 4, grid */}
                    <h3 className="text-3xl pl-8 text-left absolute w-full top-[80%]">Interactive experiences</h3>
                </div>
            </div>

            
        </>
    );
}

export default HeaderGraphic;