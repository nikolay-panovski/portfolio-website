
function ProjectTag({ name }) {
    return (
        <>
            <button className="btn-bordered flex flex-row items-center m-2 p-3 rounded-full" >
                <span className="px-2">
                    <p className="btn-bordered-text font-bold">{name}</p>
                </span>
            </button>
        </>
    );
}


export default ProjectTag;