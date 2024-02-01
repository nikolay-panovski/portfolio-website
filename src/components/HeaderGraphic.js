import Face from "pictures/492686_square.jpg";

function HeaderGraphic() {
    return (
        <>
            <div className="flex flex-row relative w-full h-[67vh]">
                <div className="relative w-1/2 h-full">
                    <div className="w-full h-full grid grid-rows-2 grid-cols-2 gap-0.5">
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.80), rgba(40,44,52,.80) ), url(/images/Furfare_HeaderFrame.png)"}}></div>
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.80), rgba(40,44,52,.80) ), url(/images/Unity_Prototype_HeaderFrame.png)"}}></div>
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.80), rgba(40,44,52,.80) ), url(/images/100FAT_Deuvels_Ingame_HeaderFrame.png)"}}></div>
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.80), rgba(40,44,52,.80) ), url(/images/Beans_HeaderFrame.png)"}}></div>
                    </div>
                    <h3 className="text-3xl pr-12 text-right absolute w-full top-[80%]">Digital games</h3>
                </div>

                <div className="relative w-1/2 h-full">
                    <div className="w-full h-full grid grid-rows-2 grid-cols-2 gap-0.5">
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.75), rgba(40,44,52,.75) ), url(/images/100FAT_PaltheHuis_HeaderFrame.png)"}}></div>
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.75), rgba(40,44,52,.75) ), url(/images/ScrMult_Cover.png)"}}></div>
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.75), rgba(40,44,52,.75) ), url(/images/100FAT_Esch_HeaderFrame.jpeg)"}}></div>
                        <div style={{backgroundSize: "100% 100%", backgroundImage:"linear-gradient( rgba(40,44,52,.75), rgba(40,44,52,.75) ), url(/images/100FAT_Deuvels_IRL_HeaderFrame.png)"}}></div>
                    </div>
                    <h3 className="text-3xl pl-12 text-left absolute w-full top-[80%]">Interactive experiences</h3>
                </div>
                
                {/* middle: vertical line with image in center, on top of the regular flow;
                    position last in order to stay in front of all images */}
                <div className="absolute h-full top-0 border-solid border-[0.25rem] border-yellow-50" style={{left:"calc(50% - 0.375rem)"}}></div>
                <img src={Face} alt="Nikolay Panovski face" width="192" height="192"
                    className="rounded-full absolute top-[33%] left-1/2 border-solid border-[0.25rem] border-yellow-50"
                    style={{transform:"translate(-96px,-96px)"}} />
                <h1 className="text-4xl text-center absolute w-full top-[60%]">&nbsp;&nbsp;NIKOLAY&nbsp;&nbsp;&nbsp;&nbsp;PANOVSKI</h1>

            </div>

            
        </>
    );
}

export default HeaderGraphic;