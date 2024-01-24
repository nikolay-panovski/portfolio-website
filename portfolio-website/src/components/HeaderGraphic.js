import Face from "photos/492686_square.jpg";

function HeaderGraphic() {
    return (
        <>
            <div className="d-flex" style={{position:"relative", width:"100%", height:"75vh"}}>
                <div style={{width:"50%", height:"100%"}}>
                    left{/*img x 4, grid */}
                    {/* text: title 1 (games) */}
                </div>

                {/* middle: vertical line with image in center, on top of the regular flow */}
                <div style={{height:"100%", position:"absolute", top:"0", left:"calc(50% - 0.25rem)", borderStyle:"solid", borderWidth:"0.25rem", borderColor:"#fff"}}></div>
                <img src={Face} alt="Nikolay Panovski face" width="192" height="192" className="rounded-circle"
                    style={{position:"absolute", top:"33%", left:"50%", transform:"translate(-96px,-96px)", borderStyle:"solid", borderWidth:"0.5rem", borderColor:"#fff"}} />
                {/* text: my name */}

                <div style={{width:"50%", height:"100%"}}>
                    right{/*img x 4, grid */}
                    {/* text: title 2 (outdoors) */}
                </div>
            </div>

            
        </>
    );
}

export default HeaderGraphic;