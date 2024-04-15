import './Hero.css';
import { PrimaryButton } from '../../components';
const Hero =()=>{
    return(
<div className='hero-main'>
<div className='hero-text'>
<h6 className='hero-subtitle'>Welcom To Cyborg</h6>
<h4 className='hero-title'><em>BROWSE </em>OUR POPULAR GAMES HERE</h4>

<PrimaryButton>Browse Now</PrimaryButton>

</div>
</div>

    )
}
export default Hero;