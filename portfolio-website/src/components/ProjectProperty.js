

function ProjectProperty({ icon, describerText, propertyValue }) {
    return (
        <>
            <div className="d-flex flex-row justify-content-start align-items-center m-2">
                {icon ?? <></>}
                {describerText ? <p className="h5">{describerText}: {propertyValue}</p>
                            : <p className="h5">{propertyValue}</p>}
            </div>

        </>
    );
}


export default ProjectProperty;