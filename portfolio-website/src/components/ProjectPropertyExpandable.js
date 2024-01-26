
function ProjectPropertyExpandable({ icon, describerText, propertyValue }) {
    return (
        <>
            <button className="expand-btn flex flex-row items-center m-2 p-3 rounded-full" >
                <span className="expand-btn-icon px-2">{icon ?? <></>}</span>
                <span className="expand-btn-text">{describerText ? <p className="h5">{describerText}: {propertyValue}</p>
                                                                : <p className="h5">{propertyValue}</p>}</span>
            </button>
        </>
    );
}


export default ProjectPropertyExpandable;