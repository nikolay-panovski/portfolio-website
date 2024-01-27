import HeaderGraphic from 'components/HeaderGraphic';
import './App.css';

import ProjectCard from 'components/ProjectCard';
import ProjectCardTitle from 'components/ProjectCardTitle';
import ProjectCardText from 'components/ProjectCardText';
import ProjectProperty from 'components/ProjectProperty';
import ProjectPropertyExpandable from 'components/ProjectPropertyExpandable';

import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import { ReactComponent as JSLogo } from "icons/icons8-javascript.svg";
import { ReactComponent as LuaLogo } from "icons/Logo_Lua.svg";
import { ReactComponent as CPPLogo } from "icons/icons8-c++.svg"
import MQTTLogo from "icons/mqtt.png";
import ProcessingLogo from "icons/processing-1024.png";

import DurationLogo from "icons/icons8-time-100-dark.png";
import TeamLogo from "icons/icons8-team-100-dark.png";
import ClientLogo from "icons/icons8-client-64-dark.png";

function App() {
  return (
    <>
      {/* Icons by icons8.com */}
      <div className="App">
        <header className="App-header ">
          <HeaderGraphic />
        </header>
        <main>

          <ProjectCard 
            coverUrl={"/images/Unity_Prototype_Overview.png"}
            CardBodyComponents={<>
              <ProjectCardTitle text="IMT&S Unity Prototype" />

              {/* !! also add location property?? */}
              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/ScrMult_Cover.png"}
            CardBodyComponents={<>
              <ProjectCardTitle text="IMT&S Phone-controllable screens" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<img src={MQTTLogo} alt="MQTT logo" width="30px" height="30px" />} propertyValue="MQTT"/>
                <ProjectPropertyExpandable icon={<JSLogo width="30px" height="30px"/>} propertyValue="JavaScript"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Web Development Projects" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} propertyValue="Various"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} propertyValue="Personal/School assignments"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="A collection of smaller projects where I learned various Web functionalities."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="RFID Interactive Video Experience" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Deuvels tikken game" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Practical Research: Game Juice" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Desk Research: Game Juice" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Furfare" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text={"Multiplayer party game summarizable as \"Bomberman Dodgeball\"."}/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Tower defense prototype" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText="Client" propertyValue="ACuTe for Nova Gorica"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<UnityLogo width="30px" height="30px"/>} propertyValue="Unity"/>
                <ProjectPropertyExpandable icon={<CSLogo width="30px" height="30px"/>} propertyValue="C#"/>
              </div>

              <ProjectCardText text="Concept prototype under fast development for several minigames with real-world elements."/>
            </>}
          />

          <ProjectCard 
            coverUrl={"/images/TTT_embed_flow_Cover.png"}
            CardBodyComponents={<>
              <ProjectCardTitle text="Research: Embedding languages for game modding" />

              <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText="Duration" propertyValue="2 weeks"/>
              <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue="Individual"/>
              <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} propertyValue="Personal/School assignment"/>
              <div className="flex flex-row flex-wrap justify-start">
                <ProjectPropertyExpandable icon={<LuaLogo width="30px" height="30px"/>} propertyValue="Lua"/>
                <ProjectPropertyExpandable icon={<JSLogo width="30px" height="30px"/>} propertyValue="JavaScript"/>
                <ProjectPropertyExpandable icon={<CPPLogo width="30px" height="30px"/>} propertyValue="C++"/>
              </div>

              <ProjectCardText text="Embedded Lua and JavaScript in C++ to measure their performance in simple operations, justified with the popularity of game modding and scripting."/>
            </>}
          />

        </main>
      </div>

    </>
  );
}

export default App;
