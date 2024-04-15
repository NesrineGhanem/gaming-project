import './MostPopular.css';

import {Card,SectionHeader,SeactionWrapper} from '../../components/index'
import MostPopularData from '../../components/Data/MostPopularData';



const MostPopular= () =>{
 

  const cards = MostPopularData.map(card =>{
    return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  })
  
 return(
   <>
    <SeactionWrapper>
      
      <SectionHeader>Most Popular</SectionHeader>

      
      <div className='most-popular-items'>
   
         {cards}
              </div>

              


             



         
      
    </SeactionWrapper>
   </>

 )
};
export default MostPopular;