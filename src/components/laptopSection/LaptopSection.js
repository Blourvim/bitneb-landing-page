import LaptopCard from './LaptopCard';
import laptopCards from '../../content/texts/laptopCards'
import './laptop-section.css'
const LaptopSection =()=>{

return(
    laptopCards.map(item=>{

        return(
            <LaptopCard content={item}/>
        )


    })
)
}

export default LaptopSection;