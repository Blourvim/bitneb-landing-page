import './footer.css';
import Grid from '@material-ui/core/Grid'
const Footer =(props)=>{

    const {header, text, button, image,alt}= props.content


return(
    <footer>
        <Grid className='footer-content' container xs={11}md={8}>
        <Grid item lg={3} md={3} sm={3} xs={12} className='grid-item' >

        <img className='footer-logo'src={image} alt={alt}/>

        </Grid>
        <Grid item lg={5} md={4} sm={6} xs={12} align-content-xs-center className='grid-item'>
        <div className='footer-divider'></div>

<div className='center'>
       <h1 className="footer-header">{header}</h1>
            <p className='footer-text'>{text}</p>
            </div>       

        </Grid>
        <Grid item  lg={3}  md={4} sm={12}xs={12} align-content-xs-center className='grid-item'>
        <button className='footer-button center'>{button}</button>
        </Grid>
    </Grid>
</footer>
)

}


export default Footer