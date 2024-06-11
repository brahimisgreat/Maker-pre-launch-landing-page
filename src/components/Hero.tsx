import heroLeft from '../assets/illustration-hero-left.svg'
import heroRight from '../assets/illustration-hero-right.svg'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
        <img  src={heroLeft} />
        <img  src={heroRight} />
    </div>
  )
}
