import './footer.css';
import Grid from '@material-ui/core/Grid'
const Footer =(props)=>{

    const {header, text, button, image,alt}= props.content


return(
    <footer>
        <Grid className='footer-content' container xs={11}md={10}>
        <Grid item lg={3} md={3} sm={3} xs={12} className='grid-item' >

        <img className='footer-logo'src={image} alt={alt}/>

        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}  className='grid-item'>
        <div className='footer-divider'></div>

<div className='center'>
       <h1 className="footer-header">{header}</h1>
            <p className='footer-text'>{text}</p>
            </div>       

        </Grid>
        <Grid item style={{margin:20}} lg={2}  md={3} sm={2}xs={12} marginTop='20px' className='grid-item'>
        <button className='footer-button center'>{button}</button>
        </Grid>
    </Grid>
    <div className='blue-ribbon'></div>
</footer>
)

}


export default Footer