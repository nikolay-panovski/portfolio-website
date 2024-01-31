import { useParams } from "react-router-dom";

import ListOfProjectContent from "components/ListOfProjectContent";

import DurationLogo from "icons/icons8-time-100-light.png";
import TeamLogo from "icons/icons8-team-100-light.png";
import ClientLogo from "icons/icons8-client-64-light.png";
import LocationLogo from "icons/icons8-location-100-light.png";
import ProjectProperty from "components/ProjectProperty";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


function ProjectPage( { } ) {
    const { name } = useParams();

    const content = ListOfProjectContent.find(item => item.name === name);

    return (
        <>
            <header className="App-header relative w-full min-h-screen flex flex-col justify-evenly items-center"
                    style={content.backgroundURL ? {backgroundSize: "cover", backgroundImage:`linear-gradient( rgba(40,44,52,.85), rgba(40,44,52,.85) ), url(${content.backgroundURL})`} : {} }>
                <h1 className="text-4xl text-center w-full top-1/4">{name}</h1>

                <div className='flex flex-row flex-wrap justify-evenly w-full py-2 px-4'>
                    {content.headerContent}
                </div>

                <div className='flex flex-row flex-wrap py-2 px-4' > {/* self-start */}
                    {content.durationProperty ? <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} propertyValue={content.durationProperty} /> : <></>}
                    {content.teamProperty ? <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} propertyValue={content.teamProperty} /> : <></>}
                    {content.clientProperty ? <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} propertyValue={content.clientProperty} /> : <></>}
                    {content.locationProperty ? <ProjectProperty icon={<img src={LocationLogo} alt="Logo of location" width="36px" height="36px" />} propertyValue={content.locationProperty} /> : <></>}
                </div>
            </header>
            <main>
                <h2 className='text-center font-bold mx-auto my-8 text-3xl'>Project description</h2>
                <h3 className='text-left font-bold mx-16 my-8 text-2xl'>What I learned</h3>
                <Markdown remarkPlugins={[remarkGfm]} className='markdown text-left mx-16 my-8 text-base sm:text-lg md:text-xl'>{content.starterParagraphContent}</Markdown>
                <h3 className='text-left font-bold mx-16 my-8 text-2xl'>Overview</h3>
                <Markdown remarkPlugins={[remarkGfm]} className='markdown text-left mx-16 my-8 text-base sm:text-lg md:text-xl'>{content.mainParagraphContent}</Markdown>
                <h3 className='text-left font-bold mx-16 my-8 text-2xl'>Gallery</h3>
                {/* https://www.material-tailwind.com/docs/react/gallery */}
                <div className="grid grid-cols-1 gap-4 mx-16 my-8 sm:grid-cols-2 md:grid-cols-3">
                    {content.mainGalleryContent}
                </div>
            </main>
        </>
    );
}

export default ProjectPage;