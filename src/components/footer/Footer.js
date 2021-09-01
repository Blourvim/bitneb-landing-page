import './footer.css';
const Footer =(props)=>{

    const {header, text, button, image,alt}= props.content


return(
    <footer>
    <div className="footer-content">
        <img className='footer-logo'src={image} alt={alt}/>
        <div className="footer-divider"></div>
        <header><h1 className="footer-header">{header}</h1>
            <p className='footer-text'>{text}</p>
            
        </header>
        <button className='footer-button'>{button}</button>
        
    </div>
</footer>
)

}


export default Footer