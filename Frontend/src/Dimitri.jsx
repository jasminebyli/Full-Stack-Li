import './styles.css'
import { Link } from 'react-router-dom'


function Dimitri () {
    return(
        <div>
            <h1 className='nametag'>Dimitri Suburbs</h1>
            <button> <Link to="/">Click to go back</Link></button>
            <p>Dimitri Suburbs is an art series where each character represents an element of the periodic table. 
                Below is the picture of the sign seen at the front of the neighborhood.
            </p>
            
            <a href="https://www.deviantart.com/thanksforviewing/gallery?deviationid=1087489646#content"><img src="src/assets/Dimitri_suburbs_logo.jpg" width="700px"></img></a>
            
            <br/>
            <br/>

            <p>
                Hyun and Hyacinth (Hydrogen) are 2 children 
                Helen (Helium) is a clown who also has a giant balloon.
                I did not digitize Linda (Lithium) but her early sketch is here.   
            </p>
            <div className="side_images">
                <img src="src/assets/Hyacinth.jpg" width="400px"></img>
                <img src="src/assets/Helen.jpg" width="400px"></img> 

            </div>

            <br/>
            <br/>

            <p>
                Nidya (Nitrogen) has ice powers, which is a nod to the fact that liquid nitrogen is used as a cryofluid.     
                Neil (Neon) is a cool breakdancer, referencing neon lights.
            </p>
            <div className="side_images">
                <img src="src/assets/Nidya.jpg" width="400px"></img> 
                <img src="src/assets/Neil.jpg" width="400px"></img>
                
            </div>
                       
        </div>
    )
}

export default Dimitri;