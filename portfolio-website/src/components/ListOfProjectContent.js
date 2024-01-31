import MD_IMTSUnity_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_Unity.md";
import MD_IMTSUnity_Main from "components/ContentMarkdown/MainParagraph/IMTS_Unity.md";
import MD_ScrMult_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_ScrMult.md";
import MD_ScrMult_Main from "components/ContentMarkdown/MainParagraph/IMTS_ScrMult.md";
import MD_TowerD_Starter from "components/ContentMarkdown/StarterParagraph/SA_TowerD.md";
import MD_TowerD_Main from "components/ContentMarkdown/MainParagraph/SA_TowerD.md";
import MD_TTT_Starter from "components/ContentMarkdown/StarterParagraph/TTT_Embed.md";
import MD_TTT_Main from "components/ContentMarkdown/MainParagraph/TTT_Embed.md";

import GitHubLogo from "icons/Logo_GitHub_Light.png";
import UnityWebLogo from "icons/logo-unity-light.png";
import DownloadLogo from "icons/icons8-download-96-light.png";

async function fetchMarkdownText(markdown) {
    return fetch(markdown).then((response) => response.text());
}

const ListOfProjectContent = [
    {
        name: "City games concept prototype",
        backgroundURL: "/images/Unity_Prototype_DetailsHeading.png",
        durationProperty: "2 weeks",
        teamProperty: "Individual (Group project)",
        clientProperty: "EU ACuTe",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/23QcIhjb5-g?si=7uFTEriqOFGZ1nIV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowFullScreen></iframe>
        ],
        headerButtons: [
            <a href="https://nikolay-panovski.github.io/CityGames_Build/"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={UnityWebLogo} alt="Unity logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">Play in browser</p>
            </a>,
            <a href="https://github.com/nikolay-panovski/CityGames"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={GitHubLogo} alt="GitHub logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">See GitHub source</p>
            </a>,
        ],
        mainGalleryContent: [
            <img src="/images/gallery/IMTS_Unity/Code_Tween.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/Code_MorseBlinker1.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/Code_MorseBlinker2.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/Unity_UIInput.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/TV_Static.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/ScrMult.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/MorseCode.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/PP_River.png" alt="City games Unity prototype" />,
            <img src="/images/gallery/IMTS_Unity/PP_Square.png" alt="City games Unity prototype" />,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_IMTSUnity_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_IMTSUnity_Main),
    },
    {
        name: "Phone-controllable screens experience",
        backgroundURL: "/images/ScrMult_Cover.png",
        durationProperty: "2 weeks",
        teamProperty: "Individual (Group project)",
        clientProperty: "EU ACuTe",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NFvQ7CNCCdg?si=aTWd9YTA232Rq0mk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ],
        headerButtons: [

        ],
        mainGalleryContent: [
            <img src="/images/gallery/ScrMult/ScrMult_InitialIdea.png" alt="Phone-controllable screens experience" />,
            <img src="/images/gallery/ScrMult/ScrMult_AppEnd.png" alt="Phone-controllable screens experience" />,
            <img src="/images/gallery/ScrMult/ScrMult_UnityView.png" alt="Phone-controllable screens experience" />,
            <img src="/images/gallery/ScrMult/ScrMult_DeviceEnd.png" alt="Phone-controllable screens experience" />,
            <img src="/images/gallery/ScrMult/ScrMult_AppEnd_IRL.png" alt="Phone-controllable screens experience" />,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Furfare",
        backgroundURL: "/images/furfare_main_menu_temp.png",
        durationProperty: "8 weeks",
        teamProperty: "2 programmers (Group project)",
        clientProperty: "WIRWAR Festival (Netherlands)",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Web Development Projects",
        backgroundURL: "",
        durationProperty: "Various",
        teamProperty: "Individual",
        clientProperty: "Minor Web Development",
        locationProperty: "EASV, Esbjerg, Denmark",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "RFID Interactive Video Experience",
        backgroundURL: "",
        durationProperty: "8 weeks",
        teamProperty: "Individual (Internship)",
        clientProperty: "Palthe Huis (Netherlands)",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Deuvels tikken game",
        backgroundURL: "",
        durationProperty: "4.5 weeks",
        teamProperty: "Individual (Internship)",
        clientProperty: "Enterse Zomp (Netherlands)",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Practical Research: Game Juice",
        backgroundURL: "",
        durationProperty: "2 weeks",
        teamProperty: "Individual",
        clientProperty: "",
        locationProperty: "",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Desk Research: Game Feel",
        backgroundURL: "",
        durationProperty: "2 weeks",
        teamProperty: "Individual",
        clientProperty: "",
        locationProperty: "",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Tower defense prototype",
        backgroundURL: "/images/gallery/SA_TowerDefense/BuildPhase.png",
        durationProperty: "5 weeks",
        teamProperty: "Individual",
        clientProperty: "",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/relt5flWIDo?si=slNYJiU5it1mC0_T" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ],
        headerButtons: [

        ],
        mainGalleryContent: [
            <img src="/images/gallery/SA_TowerDefense/BuildPhase.png" alt="Tower defense game with design patterns" />,
            <img src="/images/gallery/SA_TowerDefense/GameOver.png" alt="Tower defense game with design patterns" />,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_TowerD_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_TowerD_Main),
    },
    {
        name: "Research: Embedding languages for game modding",
        backgroundURL: "https://wofsauge.github.io/IsaacDocs/rep/images/infographics/Isaac%20Callbacks.svg",
        durationProperty: "2 weeks",
        teamProperty: "Individual",
        clientProperty: "",
        locationProperty: "",
        headerContent: [
            
        ],
        headerButtons: [

        ],
        mainGalleryContent: [
            <img src="/images/TTT_embed_flow_Cover.png" alt="Research embedding Lua and JavaScript in C++" />,
            <img src="/images/gallery/TTT_Embed/chart1.png" alt="Research embedding Lua and JavaScript in C++" />,
            <img src="/images/gallery/TTT_Embed/chart2.png" alt="Research embedding Lua and JavaScript in C++" />,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_TTT_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_TTT_Main),
    },

];

export default ListOfProjectContent;