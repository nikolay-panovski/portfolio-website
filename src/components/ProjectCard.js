
function ProjectCard( { name, coverUrl, CardBodyComponents } ) {
  return (
    <>
      {/*Card*/}
      <div className='card-border card-my card-mx flex flex-col md:flex-row'>
        {/*Col*/}
        <div className='basis-1/3'>
          <img className="h-64 w-full md:h-full object-cover rounded-lg" src={coverUrl} alt="Card cover image"></img>
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