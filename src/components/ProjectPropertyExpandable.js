
function ProjectPropertyExpandable({ icon, describerText, propertyValue }) {
    return (
        <>
            <button className="btn-bordered expand-btn flex flex-row items-center m-2 p-3 rounded-full" >
                <span className="expand-btn-icon px-2">{icon ?? <></>}</span>
                <span className="btn-bordered-text expand-btn-text">{describerText ? <p className="font-bold">{describerText}: {propertyValue}</p>
                                                                : <p className="font-bold">{propertyValue}</p>}</span>
            </button>
        </>
    );
}


export default ProjectPropertyExpandable;