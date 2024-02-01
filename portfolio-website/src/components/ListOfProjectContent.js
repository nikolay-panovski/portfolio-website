import MD_Furfare_Starter from "components/ContentMarkdown/StarterParagraph/Furfare.md";
import MD_Furfare_Main from "components/ContentMarkdown/MainParagraph/Furfare.md";
import MD_100FAT_PH_Starter from "components/ContentMarkdown/StarterParagraph/100FAT_Palthe.md";
import MD_100FAT_PH_Main from "components/ContentMarkdown/MainParagraph/100FAT_Palthe.md";
import MD_100FAT_DT_Starter from "components/ContentMarkdown/StarterParagraph/100FAT_Deuvels.md";
import MD_100FAT_DT_Main from "components/ContentMarkdown/MainParagraph/100FAT_Deuvels.md";
import MD_IMTSUnity_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_Unity.md";
import MD_IMTSUnity_Main from "components/ContentMarkdown/MainParagraph/IMTS_Unity.md";
import MD_ScrMult_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_ScrMult.md";
import MD_ScrMult_Main from "components/ContentMarkdown/MainParagraph/IMTS_ScrMult.md";
import MD_WebDev_Starter from "components/ContentMarkdown/StarterParagraph/WebDev.md";
import MD_WebDev_Main from "components/ContentMarkdown/MainParagraph/WebDev.md";
import MD_JuiceP_Starter from "components/ContentMarkdown/StarterParagraph/Juice_Practical.md";
import MD_JuiceP_Main from "components/ContentMarkdown/MainParagraph/Juice_Practical.md";
import MD_JuiceD_Starter from "components/ContentMarkdown/StarterParagraph/Juice_Desk.md";
import MD_JuiceD_Main from "components/ContentMarkdown/MainParagraph/Juice_Desk.md";
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
            <a href="/images/gallery/IMTS_Unity/Code_Tween.png"><img src="/images/gallery/IMTS_Unity/Code_Tween.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/Code_MorseBlinker1.png"><img src="/images/gallery/IMTS_Unity/Code_MorseBlinker1.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/Code_MorseBlinker2.png"><img src="/images/gallery/IMTS_Unity/Code_MorseBlinker2.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/Unity_UIInput.png"><img src="/images/gallery/IMTS_Unity/Unity_UIInput.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/TV_Static.png"><img src="/images/gallery/IMTS_Unity/TV_Static.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/ScrMult.png"><img src="/images/gallery/IMTS_Unity/ScrMult.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/MorseCode.png"><img src="/images/gallery/IMTS_Unity/MorseCode.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/PP_River.png"><img src="/images/gallery/IMTS_Unity/PP_River.png" alt="City games Unity prototype" /></a>,
            <a href="/images/gallery/IMTS_Unity/PP_Square.png"><img src="/images/gallery/IMTS_Unity/PP_Square.png" alt="City games Unity prototype" /></a>,
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
            <a href="/images/gallery/ScrMult/ScrMult_InitialIdea.png"><img src="/images/gallery/ScrMult/ScrMult_InitialIdea.png" alt="Phone-controllable screens experience" /></a>,
            <a href="/images/gallery/ScrMult/ScrMult_AppEnd.png"><img src="/images/gallery/ScrMult/ScrMult_AppEnd.png" alt="Phone-controllable screens experience" /></a>,
            <a href="/images/gallery/ScrMult/ScrMult_UnityView.png"><img src="/images/gallery/ScrMult/ScrMult_UnityView.png" alt="Phone-controllable screens experience" /></a>,
            <a href="/images/gallery/ScrMult/ScrMult_DeviceEnd.png"><img src="/images/gallery/ScrMult/ScrMult_DeviceEnd.png" alt="Phone-controllable screens experience" /></a>,
            <a href="/images/gallery/ScrMult/ScrMult_AppEnd_IRL.png"><img src="/images/gallery/ScrMult/ScrMult_AppEnd_IRL.png" alt="Phone-controllable screens experience" /></a>,
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
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XVgqGERoLbc?si=N-GjvvXNDY0dwiqY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
            
        ],
        headerButtons: [
            <a href="https://github.com/nikolay-panovski/ProjectShowoff_Furfare/releases/tag/v1.1.0"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={DownloadLogo} alt="Download logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">Download Furfare</p>
            </a>,
            <a href="https://github.com/nikolay-panovski/ProjectShowoff_Furfare/"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={GitHubLogo} alt="GitHub logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">See source code</p>
            </a>,
        ],
        mainGalleryContent: [
            <a href="/images/gallery/Furfare/CharacterSelect.png"><img src="/images/gallery/Furfare/CharacterSelect.png" alt="Game character select screen" /></a>,
            <a href="/images/gallery/Furfare/Infographic.png"><img src="/images/gallery/Furfare/Infographic.png" alt="Infographic screen" /></a>,
            <a href="/images/gallery/Furfare/GameFrame1.png"><img src="/images/gallery/Furfare/GameFrame1.png" alt="Game view from earlier playtest" /></a>,
            <a href="/images/gallery/Furfare/GameFrame2.png"><img src="/images/gallery/Furfare/GameFrame2.png" alt="Game view from earlier playtest" /></a>,
            <a href="/images/gallery/Furfare/TheEnd.png"><img src="/images/gallery/Furfare/TheEnd.png" alt="Game view from earlier playtest" /></a>,
            <a href="/images/gallery/Furfare/Game_PlaytestW6.png"><img src="/images/gallery/Furfare/Game_PlaytestW6.png" alt="Game view from earlier playtest" /></a>,
            <a href="/images/gallery/Furfare/Game_Playtest2.png"><img src="/images/gallery/Furfare/Game_Playtest2.png" alt="Game view from earlier playtest" /></a>,

        ],
        starterParagraphContent: await fetchMarkdownText(MD_Furfare_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_Furfare_Main),
    },
    {
        name: "Web Development Projects",
        backgroundURL: "/images/EASV_Front.jpg",
        durationProperty: "Various",
        teamProperty: "Individual",
        clientProperty: "Minor Web Development",
        locationProperty: "EASV, Esbjerg, Denmark",
        headerContent: [
            
        ],
        headerButtons: [
            <a href="https://github.com/nikolay-panovski/PWA_todoapp_frontend"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={GitHubLogo} alt="GitHub logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">Code - PWA site (JS)</p>
            </a>,
            <a href="https://github.com/nikolay-panovski/DE_GamesCatalog"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={GitHubLogo} alt="GitHub logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">Code - DevEnv app (ASP.NET)</p>
            </a>,
            <a href="https://github.com/nikolay-panovski/nikolay-panovski.github.io"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={GitHubLogo} alt="GitHub logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">Code - Portfolio site</p>
            </a>,
        ],
        mainGalleryContent: [
            <a href="/images/EASV_WebDev_Cover.png"><img src="/images/EASV_WebDev_Cover.png" alt="Web dev project: PWA/API" /></a>,
            <a href="/images/gallery/WebDev/DevEnv_Cover.png"><img src="/images/gallery/WebDev/DevEnv_Cover.png" alt="Web dev project: Development Environments" /></a>,
            <a href="/images/gallery/WebDev/API_Code.png"><img src="/images/gallery/WebDev/API_Code.png" alt="Web dev code: PWA/API" /></a>,
            <a href="/images/gallery/WebDev/DevEnv_Code.png"><img src="/images/gallery/WebDev/DevEnv_Code.png" alt="Web dev code: Development Environments" /></a>,
            <a href="/images/gallery/WebDev/WebXR_Cover.png"><img src="/images/gallery/WebDev/WebXR_Cover.png" alt="Web dev project: AR/VR Development" /></a>,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_WebDev_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_WebDev_Main),
    },
    {
        name: "RFID Interactive Video Experience",
        backgroundURL: "/images/100FAT_Palthe_ItemCover.jpg",
        durationProperty: "8 weeks",
        teamProperty: "Individual (Internship)",
        clientProperty: "Palthe Huis (Netherlands)",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CXMD6cHiJXw?si=LBCAKfCuEhYU1a_h" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7G8toOqyIjw?si=ithSw9Q2-eKaFpj7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ],
        headerButtons: [

        ],
        mainGalleryContent: [
            <a href="/images/gallery/100FAT_Palthe/Hanze_Watchalong.jpg"><img src="/images/gallery/100FAT_Palthe/Hanze_Watchalong.jpg" alt="Frame from live experience with visitors" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_IRL_Schraper.jpg"><img src="/images/gallery/100FAT_Palthe/Hanze_IRL_Schraper.jpg" alt="Frame from live experience with visitors" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_IRL_Zout.jpg"><img src="/images/gallery/100FAT_Palthe/Hanze_IRL_Zout.jpg" alt="Frame from live experience with visitors" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_IRL_Vis.jpg"><img src="/images/gallery/100FAT_Palthe/Hanze_IRL_Vis.jpg" alt="Frame from live experience with visitors" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_ItemPick.jpg"><img src="/images/gallery/100FAT_Palthe/Hanze_ItemPick.jpg" alt="Frame from live experience with visitors" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_ItemPlace.jpg"><img src="/images/gallery/100FAT_Palthe/Hanze_ItemPlace.jpg" alt="Frame from live experience with visitors" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Code_RFID.png"><img src="/images/gallery/100FAT_Palthe/Code_RFID.png" alt="Code for video experience (RFID)" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Code_UIManager.png"><img src="/images/gallery/100FAT_Palthe/Code_UIManager.png" alt="Code for video experience (UI)" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_Story_Design_crop.png"><img src="/images/gallery/100FAT_Palthe/Hanze_Story_Design_crop.png" alt="Crop of design document for video experience" /></a>,
            <a href="/images/gallery/100FAT_Palthe/Hanze_Story_Flowchart_overhaul.png"><img src="/images/gallery/100FAT_Palthe/Hanze_Story_Flowchart_overhaul.png" alt="Flowchart for video experience" /></a>,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_100FAT_PH_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_100FAT_PH_Main),
    },
    {
        name: "Deuvels tikken game",
        backgroundURL: "/images/gallery/100FAT_Deuvels/RoomOverview.png",
        durationProperty: "4.5 weeks",
        teamProperty: "Individual (Internship)",
        clientProperty: "Enterse Zomp (Netherlands)",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7GQaD3HwV8I?si=HNGX_-G2MKLgsTcL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Z61GJXM_Am8?si=XmNCHoTEZE73dOj2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ],
        headerButtons: [

        ],
        mainGalleryContent: [
            <a href="/images/gallery/100FAT_Deuvels/RoomOverview.png"><img src="/images/gallery/100FAT_Deuvels/RoomOverview.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/Game1.png"><img src="/images/gallery/100FAT_Deuvels/Game1.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/Game2.png"><img src="/images/gallery/100FAT_Deuvels/Game2.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/Game3.png"><img src="/images/gallery/100FAT_Deuvels/Game3.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/DisplayGoalRotation-False.png"><img src="/images/gallery/100FAT_Deuvels/DisplayGoalRotation-False.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/DisplayGoalRotation-True.png"><img src="/images/gallery/100FAT_Deuvels/DisplayGoalRotation-True.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/DisplayHitCounter-False.png"><img src="/images/gallery/100FAT_Deuvels/DisplayHitCounter-False.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/DisplayHitCounter-True.png"><img src="/images/gallery/100FAT_Deuvels/DisplayHitCounter-True.png" alt="Reggehub room overview" /></a>,
            <a href="/images/gallery/100FAT_Deuvels/UnityEarly.png"><img src="/images/gallery/100FAT_Deuvels/UnityEarly.png" alt="Reggehub room overview" /></a>,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_100FAT_DT_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_100FAT_DT_Main),
    },
    {
        name: "Practical Research: Game Juice",
        backgroundURL: "/images/gamejuiceoverview.jpg",
        durationProperty: "2 weeks",
        teamProperty: "Individual",
        clientProperty: "",
        locationProperty: "",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wjhzPwCQW28?si=K8n0ulXOrnbXRdpk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ],
        headerButtons: [
            <a href="https://github.com/nikolay-panovski/ProjectShowoff_Furfare/releases/tag/v1.2.0"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={DownloadLogo} alt="Download logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">Download Furfare ("juicy")</p>
            </a>,
            <a href="https://github.com/nikolay-panovski/ProjectShowoff_Furfare/tree/JuicePlaytestEdits"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={GitHubLogo} alt="GitHub logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">See code changes (Furfare)</p>
            </a>,
        ],
        mainGalleryContent: [
            <a href="/docs/492686_Nikolay_Panovski_PP2_Reflection.pdf"><img src="/images/gallery/Juice_Practical/ReflectionReport.png" alt="Reflection report (document download)" /></a>,
            <a href="/docs/Juice_EnhancementsShortList.pdf"><img src="/images/gallery/Juice_Practical/EnhancementsList.png" alt="'Juicy' additions (document download)" /></a>,
            <a href="/images/gallery/Juice_Practical/Furfare_Juicy.png"><img src="/images/gallery/Juice_Practical/Furfare_Juicy.png" alt="'Juicy' additions to Furfare (game)" /></a>,
            <a href="/images/gallery/Juice_Practical/Beans_Juicy.png"><img src="/images/gallery/Juice_Practical/Beans_Juicy.png" alt="'Juicy' additions to Beans' Adventure (game)" /></a>,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_JuiceP_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_JuiceP_Main),
    },
    {
        name: "Desk Research: Game Feel",
        backgroundURL: "/images/GameFeel_Poster_Cover.png",
        durationProperty: "2 weeks",
        teamProperty: "Individual",
        clientProperty: "",
        locationProperty: "",
        headerContent: [
            
        ],
        headerButtons: [
            <a href="/docs/492686_Panovski_Nikolay_AR_GameFeel_Paper.pdf"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={DownloadLogo} alt="Download logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">View white paper</p>
            </a>,
            <a href="/docs/492686_Panovski_Nikolay_AR_GameFeel_Poster.pdf"
            className="header-btn flex flex-row justify-evenly items-center p-4">
                <img className="pr-2" src={DownloadLogo} alt="Download logo" width="48px" height="48px" />
                <p className="font-bold text-2xl">View poster</p>
            </a>,
        ],
        mainGalleryContent: [
            <a href="/docs/492686_Panovski_Nikolay_AR_GameFeel_Paper.pdf"><img src="/images/gallery/Juice_Desk/Paper_Cover.png" alt="Game Feel White paper" /></a>,
            <a href="/docs/492686_Panovski_Nikolay_AR_GameFeel_Poster.pdf"><img src="/images/GameFeel_Poster_Cover.png" alt="Game Feel Poster" /></a>,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_JuiceD_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_JuiceD_Main),
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
            <a href="/images/gallery/SA_TowerDefense/BuildPhase.png"><img src="/images/gallery/SA_TowerDefense/BuildPhase.png" alt="Tower defense game with design patterns" /></a>,
            <a href="/images/gallery/SA_TowerDefense/GameOver.png"><img src="/images/gallery/SA_TowerDefense/GameOver.png" alt="Tower defense game with design patterns" /></a>,
            <a href="/images/gallery/SA_TowerDefense/Requirements.png"><img src="/images/gallery/SA_TowerDefense/Requirements.png" alt="Tower defense game with design patterns" /></a>,
            <a href="/images/gallery/SA_TowerDefense/UMLClass.png"><img src="/images/gallery/SA_TowerDefense/UMLClass.png" alt="Tower defense game with design patterns" /></a>,
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
            <a href="/images/TTT_embed_flow_Cover.png"><img src="/images/TTT_embed_flow_Cover.png" alt="Research embedding Lua and JavaScript in C++" /></a>,
            <a href="/images/gallery/TTT_Embed/chart1.png"><img src="/images/gallery/TTT_Embed/chart1.png" alt="Research embedding Lua and JavaScript in C++" /></a>,
            <a href="/images/gallery/TTT_Embed/chart2.png"><img src="/images/gallery/TTT_Embed/chart2.png" alt="Research embedding Lua and JavaScript in C++" /></a>,
        ],
        starterParagraphContent: await fetchMarkdownText(MD_TTT_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_TTT_Main),
    },

];

export default ListOfProjectContent;