import MD_IMTSUnity_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_Unity.md";
import MD_IMTSUnity_Main from "components/ContentMarkdown/MainParagraph/IMTS_Unity.md";
import MD_ScrMult_Starter from "components/ContentMarkdown/StarterParagraph/IMTS_ScrMult.md";
import MD_ScrMult_Main from "components/ContentMarkdown/MainParagraph/IMTS_ScrMult.md";

async function fetchMarkdownText(markdown) {
    return fetch(markdown).then((response) => response.text());
}

const ListOfProjectContent = [
    {
        name: "IMT&S Unity Prototype",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
        clientProperty: "",
        locationProperty: "",
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
        name: "IMT&S Phone-controllable screens experience",
        backgroundURL: "/images/ScrMult_Cover.png",
        durationProperty: "2 weeks",
        teamProperty: "Individual",
        clientProperty: "ACuTe for Nova Gorica",
        locationProperty: "Enschede (NL)",
        headerContent: [
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NFvQ7CNCCdg?si=aTWd9YTA232Rq0mk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ],
        headerButtons: [

        ],
        mainGalleryContent: [

        ],
        starterParagraphContent: await fetchMarkdownText(MD_ScrMult_Starter),
        mainParagraphContent: await fetchMarkdownText(MD_ScrMult_Main),
    },
    {
        name: "Furfare",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
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
        name: "Web Development Projects",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
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
        name: "RFID Interactive Video Experience",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
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
        name: "Deuvels tikken game",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
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
        name: "Practical Research: Game Juice",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
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
        durationProperty: "",
        teamProperty: "",
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
        durationProperty: "",
        teamProperty: "",
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
        name: "Research: Embedding languages for game modding",
        backgroundURL: "",
        durationProperty: "",
        teamProperty: "",
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