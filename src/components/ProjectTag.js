import { useState, useContext, useEffect } from "react";
import TagSelectorContext from "./TagSelectorContext";

function ProjectTag({ name }) {
    const { selectedTags, setSelectedTags } = useContext(TagSelectorContext);
    const [isSelected, setIsSelected] = useState(false);

    function onClickSetSelected() {
        setIsSelected(!isSelected);
    }

    useEffect(() => {
        setSelectedTags(isSelected ? selectedTags.concat([name]) : selectedTags.filter(element => element !== name) );
    }, [isSelected]);

    return (
        <>
            <button onClick={onClickSetSelected} className={` ${isSelected ? "btn-bordered-selected" : "btn-bordered" }
             flex flex-row items-center m-2 p-3 rounded-full`} >
                <span className="px-2">
                    <p className={`${isSelected ? "btn-bordered-text-selected" : "btn-bordered-text" } font-bold`}>{name}</p>
                </span>
            </button>
        </>
    );
}


export default ProjectTag;