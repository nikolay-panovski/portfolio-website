
import ProjectTag from "./ProjectTag";


function ProjectTagsSelector() {

    const usedTags = [
        "Unity",
        "JavaScript",
        "UI",
        "Device Communication",
        "Games",
        "Installations",
        "Practical",
        "Research",

    ];

    const notUsedTags = [
        "demo",

    ];

    const usedTagsJSX = usedTags.map(tag => <ProjectTag key={tag} name={tag}/>);

    return (
        <>
            <div className="flex flex-row flex-wrap justify-center w-2/3 mx-auto my-8">
                {usedTagsJSX}
            </div>
        </>
    );
}


export default ProjectTagsSelector;