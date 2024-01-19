import styles from "components/ExpandingButton.css";

function ProjectProperty({ icon, describerText, propertyValue }) {
    return (
        <>
            <button className="expand-btn d-flex align-items-center flex-row m-2 p-3 rounded-pill" style={{ }}>
                <span className="expand-btn-icon px-2">{icon ?? <></>}</span>
                <span className="expand-btn-text">{describerText ? <p className="h4">{describerText}: {propertyValue}</p> : <></>}</span>
            </button>
        </>
    );
}


export default ProjectProperty;