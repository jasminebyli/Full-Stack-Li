import './styles.css'
import { Link } from 'react-router-dom'
import FloatingLines from './FloatingLines.jsx';

function Dimitri () {
    return(
        <div>
            <div style={{ width: '100%', height: '100vh', position: 'fixed', zIndex: '-1' }}>
              <FloatingLines 
                enabledWaves={["top","middle","bottom"]}
                // Array - specify line count per wave; Number - same count for all waves
                lineCount={8}
                // Array - specify line distance per wave; Number - same distance for all waves
                lineDistance={8}
                bendRadius={8}
                bendStrength={-2}
                interactive
                parallax={true}
                animationSpeed={1}
                gradientStart="#e945f5"
                gradientMid="#6f6f6f"
                gradientEnd="#6a6a6a"
            />
            </div>

            <h1 className='nametag'>Dimitri Suburbs</h1>
            
            <div className="navbar">
                <Link to="/"><button>Home</button></Link>
                <Link to="/Timeline"><button>Timeline</button></Link>
                <Link to="/Dimitri"><button>Dimitri Suburbs</button></Link>

            </div>

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