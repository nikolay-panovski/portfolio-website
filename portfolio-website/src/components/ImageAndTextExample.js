import ProjectProperty from './ProjectProperty';
import ProjectPropertyExpandable from './ProjectPropertyExpandable';

import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import ProcessingLogo from "icons/processing-1024.png";

function ImageAndTextExample() {
  return (
    <>
      {/*Card*/}
      <div className='flex flex-row my-4 mx-[15%]'>
        {/*Col*/}
        <div className='basis-1/3'>
          <div className='w-full h-full bg-center bg-cover' style={{backgroundImage:"url(/logo512.png)"}}></div>
        </div>
        {/*Col*/}
        <div className='basis-2/3'>
          {/*CardBody*/}
          <div className='flex flex-column py-2 px-4'>
            {/*CardTitle*/}
            <h3 className=''>IMT&S Unity Prototype</h3>

            <ProjectProperty icon={<UnityLogo width="36px" height="36px"/>} describerText="Duration" propertyValue="2 weeks"/>
            <ProjectProperty icon={<UnityLogo width="36px" height="36px"/>} propertyValue="Individual"/>
            <div className="flex flex-row flex-wrap justify-start">
              <ProjectPropertyExpandable icon={<UnityLogo width="36px" height="36px"/>} propertyValue="Unity"/>
              <ProjectPropertyExpandable icon={<CSLogo width="36px" height="36px"/>} propertyValue="C#"/>
            </div>

            {/*CardText*/}
            <p className=''>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageAndTextExample;