import { ReactComponent as LinkIcon } from "icons/icons8-external-link.svg";

function ProjectCardTitle( { text } ) {
    return (
        <>
            <div className="flex flex-row flex-wrap items-start">
                <h3 className='text-2xl font-bold'>{text}</h3>
                <LinkIcon width="36px" height="36px" />
            </div>
        </>
    );
}


export default ProjectCardTitle;