import LaptopCard from './LaptopCard';
import laptopCards from '../../content/texts/laptopCards';
import './laptop-section.css';
import Grid from '@material-ui/core/Grid';
const LaptopSection =()=>{

return(
<section className="laptops-section">
<div className="laptops-divider"></div>
<div  className='laptops'>
    <Grid container>
{
    laptopCards.map(item=>{

        return(
            <Grid item key={item.alt}  md={3} sm ={6}xs={12}>
            <LaptopCard content={item}/>
            </Grid>
        )


    })
}
</Grid>
</div>

</section>
 
)
}

export default LaptopSection;