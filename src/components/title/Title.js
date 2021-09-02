import './title.css'

const Title =(props)=>{


    return(

        <section>
            <div>
                <h1 className="title">{props.content}</h1>
                <div className="title-divider">
                </div> 
            </div>
        </section>

    )
}
 export default Title