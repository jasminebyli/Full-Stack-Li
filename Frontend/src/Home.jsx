import './styles.css'
import {Link} from 'react-router-dom'
import FloatingLines from './FloatingLines.jsx';


function Home () {
    return(
        <>
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

            <h1 className='nametag'>Jasmine Li</h1>

            <div className="navbar">
                <Link to="/"><button>Home</button></Link>
                <Link to="/Timeline"><button>Timeline</button></Link>
                <Link to="/Dimitri"><button>Dimitri Suburbs</button></Link>

            </div>

            <p>I created this website as my portfolio. You may view a timeline of my current life up until now by clicking the button below.</p>
            <Link to="/Timeline"><button>My timeline</button></Link>
                
            <p>
                I am the creator of Dimitri Suburbs on DeviantArt. 
                You can view the full gallery by clicking on the picture below.
            </p>

            
            
            <a href="https://www.deviantart.com/thanksforviewing/gallery?deviationid=1087489646#content"><img src="src/assets/Dimitri_suburbs_logo.jpg" width="700px"></img></a>
            
            <br/>
            <br/>
            <p>Dimitri Suburbs is an art series where each character represents an element of the periodic table. 
                For example, Neil (Neon) is a cool breakdancer, referencing neon lights (bottom left).
                Nidya (Nitrogen) has ice powers, which is a nod to the fact that liquid nitrogen is used as a cryofluid (bottom right). 
            </p>
            <Link to="/Dimitri"><button>See more information here</button></Link>
           
            <div className="side_images">
                <img src="src/assets/Neil.jpg" width="400px"></img>
                <img src="src/assets/Nidya.jpg" width="400px"></img> 
            </div>
                       
            <br></br>
            <p>I also created a song based on the sound that plays when you test the audio in CAASPP state testing. Click the image below to play it. </p>
            <a href="https://www.youtube.com/watch?v=cvzink1-Jo4"><img src="src/assets/CAASPP.png" width="700px"></img></a>
            <p>Fun fact: CAASPP originally stands for "California Assessment of Student Performance and Progress", but in the context of the song name, it stands for "Concert Audio At Student Proctored Practice".</p>
        </>
    )
}

export default Home;