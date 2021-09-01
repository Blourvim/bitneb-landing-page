import './footer.css';
const Footer =()=>{

return(
    <footer>
    <div className="footer-content">
        <img className='footer-logo'src="./assets/BitNeb-logo.png" alt="BitNeb Logo"/>
        <div className="footer-divider"></div>
        <header><h1 className="footer-header">Farklı Kriptoparalar ve Limit/Stop Emirleri Kullanın</h1>
            <p className='footer-text'>SkyNeb farklı kriptoparalar,gerçek zamanlı grafikler, grafik analizi araçları ve indikatörler ile profesyoneller için gelişmiş bir alım satım deneyimi sunar.</p>
            
        </header>
        <button className='footer-button'>Hemen Başlayın</button>
        
    </div>
</footer>
)

}


export default Footer