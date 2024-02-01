

function ProjectProperty({ icon, describerText, propertyValue }) {
    return (
        <>
            <div className="flex flex-row justify-start items-center m-2">
                {icon ?? <></>}
                {describerText ? <p className="text-lg font-bold ml-2">{describerText}: {propertyValue}</p>
                            : <p className="text-lg font-bold ml-2">{propertyValue}</p>}
            </div>

        </>
    );
}


export default ProjectProperty;