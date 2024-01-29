import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import { ReactComponent as JSLogo } from "icons/icons8-javascript.svg";
import { ReactComponent as LuaLogo } from "icons/Logo_Lua.svg";
import { ReactComponent as CPPLogo } from "icons/icons8-c++.svg"
import MQTTLogo from "icons/mqtt.png";
import ProcessingLogo from "icons/processing-1024.png";

const ListOfProjectCards = [
    {
        name: "IMT&S Unity Prototype",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "IMT&S Phone-controllable screens",
        coverUrl: "/images/ScrMult_Cover.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <img src={MQTTLogo} alt="MQTT logo" width="30px" height="30px" />, propertyValue: "MQTT"}, 
            { icon: <JSLogo width="30px" height="30px"/>, propertyValue: "JavaScript"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Web Development Projects",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "",
        durationProperty: "Various",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignments",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `A collection of smaller projects where I learned various Web functionalities.`
    },
    {
        name: "RFID Interactive Video Experience",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Deuvels tikken game",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Practical Research: Game Juice",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Desk Research: Game Juice",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Furfare",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Tower defense prototype",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Client",
        clientProperty: "ACuTe for Nova Gorica",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Research: Embedding languages for game modding",
        coverUrl: "/images/TTT_embed_flow_Cover.png",
        tags: ["Unity", "Projects"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
            { icon: <LuaLogo width="30px" height="30px"/>, propertyValue: "Lua"}, 
            { icon: <JSLogo width="30px" height="30px"/>, propertyValue: "JavaScript"}, 
            { icon: <CPPLogo width="30px" height="30px"/>, propertyValue: "C++"}, 
        ],
        cardText: `Embedded Lua and JavaScript in C++ to measure their performance in simple operations, 
                    justified with the popularity of game modding and scripting.`
    },

];

export default ListOfProjectCards;