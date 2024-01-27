
function ProjectCard( { coverUrl, CardBodyComponents } ) {
  return (
    <>
      {/*Card*/}
      <div className='card-border card-my card-mx flex flex-row'>
        {/*Col*/}
        <div className='basis-1/3'>
          <div className='w-full h-full bg-center bg-cover rounded-l-xl' style={{backgroundImage:"url(" + coverUrl + ")"}}></div>
        </div>
        {/*Col*/}
        <div className='basis-2/3'>
          {/*CardBody*/}
          <div className='flex flex-col py-2 px-4'>
            {/* everything inside CardBody is innerComponents */}
            {CardBodyComponents}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;