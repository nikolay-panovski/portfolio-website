import MD_IMTSUnity_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_Unity.md";
import MD_IMTSUnity_Main from "components/ContentMarkdown/MainParagraph/IMTS_Unity.md";
import MD_ScrMult_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_ScrMult.md";
import MD_ScrMult_Main from "components/ContentMarkdown/MainParagraph/IMTS_ScrMult.md";

async function fetchMarkdownText(markdown) {
    return fetch(markdown).then((response) => response.text());
}

const ListOfProjectContent = [
    {
        name: "City games concept prototype",
        backgroundURL: "",
        durationProperty: "2 weeks",
        teamProperty: "Individual (Group project)",
        clientProperty: "EU ACuTe",
        locationProperty: "Enschede (Netherlands)",
        headerContent: [
            <iframe width="560" height="315" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

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
        backgroundURL: "",
        durationProperty: "5 weeks",
        teamProperty: "Individual",
        clientProperty: "",
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
        name: "Research: Embedding languages for game modding",
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

];

export default ListOfProjectContent;