import ProjectProperty from './ProjectProperty';
import ProjectPropertyExpandable from './ProjectPropertyExpandable';

import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import ProcessingLogo from "icons/processing-1024.png";
import DurationLogo from "icons/icons8-time-100-dark.png";
import TeamLogo from "icons/icons8-team-100-dark.png";
import ClientLogo from "icons/icons8-client-64-dark.png";

function ProjectCard() {
  return (
    <>
      {/*Card*/}
      <div className='card-border card-my card-mx flex flex-row'>
        {/*Col*/}
        <div className='basis-1/3'>
          <div className='w-full h-full bg-center bg-cover rounded-l-xl' style={{backgroundImage:"url(/images/Unity_Prototype_Overview.png)"}}></div>
        </div>
        {/*Col*/}
        <div className='basis-2/3'>
          {/*CardBody*/}
          <div className='flex flex-col py-2 px-4'>
            {/*CardTitle*/}
            <h3 className='text-2xl font-bold'>IMT&S Unity Prototype</h3>

            <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
            <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
            <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
            <div className="flex flex-row flex-wrap justify-start">
              <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
              <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
            </div>

            {/*CardText*/}
            <p className=''>
              Concept prototype under fast development for
              several minigames with real-world elements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;