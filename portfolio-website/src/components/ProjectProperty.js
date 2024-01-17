

function ProjectProperty({ icon, describerText, propertyValue }) {
    return (
        <>
            <div className="d-flex flex-row">
                {icon ?? <></>}
                {describerText ? <p className="h4">{describerText}: {propertyValue}</p> : <></>}
            </div>
        </>
    );
}


export default ProjectProperty;