import LaptopCard from './LaptopCard';
import laptopCards from '../../content/texts/laptopCards'
import './laptop-section.css'
const LaptopSection =()=>{

return(
<section className="laptops-section">
<div className="laptops-divider"></div>
<div  class='laptops'>
{
    laptopCards.map(item=>{

        return(
            <LaptopCard content={item}/>
        )


    })
}
</div>

</section>
 
)
}

export default LaptopSection;