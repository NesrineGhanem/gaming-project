import './Home.css';
import {Hero,MostPopular,GamingLibrary} from '../../sections/index';

const Home = () => {
  return (
    <>
    <h2>HOME PAGE</h2>
    <Hero/>
        <MostPopular/>
        <GamingLibrary/>
        </>
  )
}

export default Home;