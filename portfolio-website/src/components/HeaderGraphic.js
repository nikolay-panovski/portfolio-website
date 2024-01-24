import Face from "photos/492686_square.jpg";

function HeaderGraphic() {
    return (
        <>
            <div className="d-flex" style={{position:"relative", width:"100%", height:"67vh"}}>
                <div style={{position:"relative", width:"50%", height:"100%"}}>
                    {/*img x 4, grid */}
                    <p className="h3 px-sm-3 px-md-5" style={{textAlign:"right", position:"absolute", width:"100%", top:"80%" }}>Video games</p>
                </div>

                {/* middle: vertical line with image in center, on top of the regular flow */}
                <div style={{height:"100%", position:"absolute", top:"0", left:"calc(50% - 0.25rem)", borderStyle:"solid", borderWidth:"0.25rem", borderColor:"#fff"}}></div>
                <img src={Face} alt="Nikolay Panovski face" width="192" height="192" className="rounded-circle"
                    style={{position:"absolute", top:"33%", left:"50%", transform:"translate(-96px,-96px)", borderStyle:"solid", borderWidth:"0.5rem", borderColor:"#fff"}} />
                <h1 style={{textAlign:"center", position:"absolute", width:"100%", top:"60%" }}>Nikolay Panovski</h1>

                <div style={{position:"relative", width:"50%", height:"100%"}}>
                    {/*img x 4, grid */}
                    <p className="h3 px-sm-3 px-md-5" style={{textAlign:"left", position:"absolute", width:"100%", top:"80%" }}>Interactive experiences</p>
                </div>
            </div>

            
        </>
    );
}

export default HeaderGraphic;