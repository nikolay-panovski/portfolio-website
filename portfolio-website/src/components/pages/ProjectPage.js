import { useParams } from "react-router-dom";

import ListOfProjectContent from "components/ListOfProjectContent";

import DurationLogo from "icons/icons8-time-100-light.png";
import TeamLogo from "icons/icons8-team-100-light.png";
import ClientLogo from "icons/icons8-client-64-light.png";
import LocationLogo from "icons/icons8-location-100-light.png";
import ProjectProperty from "components/ProjectProperty";


function ProjectPage( { } ) {
    const { name } = useParams();

    const content = ListOfProjectContent.find(item => item.name === name);

    return (
        <>
            <header className="App-header relative w-full h-[67vh]"
                    style={content.backgroundURL ? {backgroundSize: "cover", backgroundImage:`linear-gradient( rgba(40,44,52,.85), rgba(40,44,52,.85) ), url(${content.backgroundURL})`} : {} }>
                <h1 className="text-4xl text-center absolute w-full top-1/4">{name}</h1>

                <div className='flex flex-row wrap-row py-2 px-4'>
                    {content.headerContent}
                </div>

                <div className='flex flex-row wrap-row py-2 px-4 absolute bottom-0'>
                    {content.durationProperty ? <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} propertyValue={content.durationProperty} /> : <></>}
                    {content.teamProperty ? <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue={content.teamProperty} /> : <></>}
                    {content.clientProperty ? <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} propertyValue={content.clientProperty} /> : <></>}
                    {content.locationProperty ? <ProjectProperty icon={<img src={LocationLogo} alt="Logo of location" width="36px" height="36px" />} propertyValue={content.locationProperty} /> : <></>}
                </div>
            </header>
        </>
    );
}

export default ProjectPage;