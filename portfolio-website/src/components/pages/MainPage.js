import { useState, useEffect } from 'react';

import HeaderGraphic from 'components/HeaderGraphic';
import ProjectTagsSelector from 'components/ProjectTagsSelector';
import TagSelectorContext from 'components/TagSelectorContext';

import ProjectCard from 'components/ProjectCard';
import ProjectCardTitle from 'components/ProjectCardTitle';
import ProjectCardText from 'components/ProjectCardText';
import ProjectProperty from 'components/ProjectProperty';
import ProjectPropertyExpandable from 'components/ProjectPropertyExpandable';

import ListOfProjectCards from 'components/ListOfProjectCards';

import DurationLogo from "icons/icons8-time-100-dark.png";
import TeamLogo from "icons/icons8-team-100-dark.png";
import ClientLogo from "icons/icons8-client-64-dark.png";
import { Link } from 'react-router-dom';

function MainPage() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCardsList, setSelectedCardsList] = useState([]);
  
    useEffect( () => {
      if (selectedTags.length === 0) {
        setSelectedCardsList(MapListInfoToCards(ListOfProjectCards));
      }
      
      else {
        let ListOfSelectedCards = [];
  
        for (let i = 0; i < ListOfProjectCards.length; i++) {
          if (selectedTags.some(tag => ListOfProjectCards[i].tags.includes(tag) ) ) {
            ListOfSelectedCards.push(ListOfProjectCards[i]);
          }
        }
  
        setSelectedCardsList(MapListInfoToCards(ListOfSelectedCards));
      }
      
    }, [selectedTags] );
  
    function MapListInfoToCards(ListArray) {
      return ListArray.map( 
        (card) => 
        
        <Link key={card.name} to={`/item_pages/${encodeURI(card.name)}`} reloadDocument> {/* preventScrollReset={false} */}
            <ProjectCard /*className={card.tags.includes("Research") ? "card-research-bg-color" : ""}*/
            
            name={card.name}
            coverUrl={card.coverUrl}
            CardBodyComponents={<>
                <ProjectCardTitle text={card.name} />
    
                {/* !! also add location property?? */}
                <ProjectProperty icon={<img src={DurationLogo} alt="Logo of running time" width="36px" height="36px" />} describerText={card.durationDescriber} propertyValue={card.durationProperty}/>
                <ProjectProperty icon={<img src={TeamLogo} alt="Logo of team" width="36px" height="36px" />} describerText={card.teamDescriber} propertyValue={card.teamProperty}/>
                <ProjectProperty icon={<img src={ClientLogo} alt="Logo of business clients" width="36px" height="36px" />} describerText={card.clientDescriber} propertyValue={card.clientProperty}/>
                <div className="flex flex-row flex-wrap justify-start">
                {card.expandableIcons.map(eIcon => <ProjectPropertyExpandable key={eIcon.propertyValue} icon={eIcon.icon} propertyValue={eIcon.propertyValue}/>)}
                </div>
    
                <ProjectCardText text={card.cardText}/>
            </>}
            />
        </Link>
        );
    }

    return (
        <>
            <header className="App-header ">
                <HeaderGraphic />
            </header>
            <main>

            <TagSelectorContext.Provider value={{selectedTags, setSelectedTags}}>
                <h2 className='text-center font-bold mx-auto my-8 text-3xl'>Projects</h2>
                <p className='text-center mx-auto my-6 text-lg'>Welcome to my projects! My main work is <b>programming</b> for various games and experiences.</p>
                <p className='text-center mx-auto my-6 text-lg'>Click on the following tags to filter the projects below:</p>
                <ProjectTagsSelector />
                <hr />

                {selectedCardsList}
            </TagSelectorContext.Provider>

            <hr />

            </main>
        </>
    );
}


export default MainPage;