import HeaderGraphic from 'components/HeaderGraphic';
import './App.css';

import ProjectProperty from './components/ProjectProperty';
import ProjectPropertyExpandable from './components/ProjectPropertyExpandable';

import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import { ReactComponent as JSLogo } from "icons/icons8-javascript.svg";
import MQTTLogo from "icons/mqtt.png";
import ProcessingLogo from "icons/processing-1024.png";

import DurationLogo from "icons/icons8-time-100-dark.png";
import TeamLogo from "icons/icons8-team-100-dark.png";
import ClientLogo from "icons/icons8-client-64-dark.png";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header ">
          <HeaderGraphic />
        </header>
        <main>



          {/*<ProjectCard />*/}
          <div className='card-border card-my card-mx flex flex-row'>
            <div className='basis-1/3'>
              <div className='w-full h-full bg-center bg-cover rounded-l-xl' style={{backgroundImage:"url(/images/Unity_Prototype_Overview.png)"}}></div>
            </div>
            <div className='basis-2/3'>
              <div className='flex flex-col py-2 px-4'>
                <h3 className='text-2xl font-bold'>IMT&S Unity Prototype</h3>

                <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
                <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
                <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
                <div className="flex flex-row flex-wrap justify-start">
                  <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                  <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
                </div>

                <p className=''>
                  Concept prototype under fast development for
                  several minigames with real-world elements.
                </p>
              </div>
            </div>
          </div>

          {/*<ProjectCard />*/}
          <div className='card-border card-my card-mx flex flex-row'>
            <div className='basis-1/3'>
              <div className='w-full h-full bg-center bg-cover rounded-l-xl' style={{backgroundImage:"url(/images/ScrMult_Cover.png)"}}></div>
            </div>
            <div className='basis-2/3'>
              <div className='flex flex-col py-2 px-4'>
                <h3 className='text-2xl font-bold'>IMT&S Phone-controllable screens</h3>

                <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
                <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
                <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
                <div className="flex flex-row flex-wrap justify-start">
                  <ProjectPropertyExpandable icon={<img src={MQTTLogo} alt="MQTT logo" width="30px" height="30px" />} propertyValue="MQTT"/>
                  <ProjectPropertyExpandable icon={<JSLogo width="30px" height="30px"/>} propertyValue="JavaScript"/>
                </div>

                <p className=''>
                  Concept prototype under fast development for
                  several minigames with real-world elements.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* Icons by icons8.com */}
    </>
  );
}

export default App;
