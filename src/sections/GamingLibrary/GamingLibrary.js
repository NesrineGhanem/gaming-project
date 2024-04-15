import  './GamingLibrary.css';
import {GamingLibraryCard,SectionHeader,SeactionWrapper} from '../../components/index';
import GamingLibraryData from '../../components/Data/GamingLibraryData';

const GamingLibrary=()=> {
  const cards = GamingLibraryData.map(card =>{
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download} />
  })
  return (
    <>
    <SeactionWrapper>
      
      <SectionHeader>Gaming Library</SectionHeader>

      
      <div className='gaming-Library-cards'>
   
          {cards}
              </div>
    </SeactionWrapper>
   </>

  )
}
export default GamingLibrary;
