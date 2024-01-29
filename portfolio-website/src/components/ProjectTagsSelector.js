import { useContext } from "react";
import TagSelectorContext from "./TagSelectorContext";

import ProjectTag from "./ProjectTag";


function ProjectTagsSelector() {
    const { setSelectedTags } = useContext(TagSelectorContext);

    const usedTags = [
        "Unity",
        "JavaScript",
        "Device Communication",
        "Games",
        "Installations",
        "Projects",
        "Research",

    ];

    const notUsedTags = [
        "demo",

    ];

    const usedTagsJSX = usedTags.map(tag => <ProjectTag key={tag} name={tag}/>);

    return (
        <>
            <div className="flex flex-row flex-wrap w-2/3 mx-auto my-8">
                {usedTagsJSX}
            </div>
        </>
    );
}


export default ProjectTagsSelector;