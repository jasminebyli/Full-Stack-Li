import './styles.css'
import {Link} from 'react-router-dom'
import FloatingLines from './FloatingLines.jsx';


function Timeline () {
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


            <h1 className='nametag'>Timeline</h1>

            <div className="navbar">
                <Link to="/"><button>Home</button></Link>
                <Link to="/Timeline"><button>Timeline</button></Link>
                <Link to="/Dimitri"><button>Dimitri Suburbs</button></Link>

            </div>

            
            <h2>May 5, 2009</h2>
            <p>I was born in Milpitas, California. My mom and dad were living in separate houses since some time before then. </p>
            <img src="src/assets/Milpitas.jpg" width="400px"></img>

            <h2>August 2014</h2>
            <p>Started kindergarden at Spangler. 
                There wasn't a lot of stuff worth noting, except when people took turns riding a tricycle around a track, they either tried to race each other. 
                Alternatively, if I was the only one there, I would go as slow as possible to make sure that I ride as long as possible.</p>
            <img src="src/assets/Spangler.jpg" width="400px"></img>

            <h2>August 2015</h2>
            <p>Started 1st grade at Sinnott, stayed for 2nd and 3rd grade. My teacher name was Ms. Walia. 
                These years weren't so much about learning as they were about watching classmates play games or do silly stuff.</p>
            <img src="src/assets/Sinnott.png" width="400px"></img>

            <h2>August 2018</h2>
            <p>Moved to Curtner for 4th grade. But I didn't like it because the students kept trying to blame farts.</p>
            <img src="src/assets/Curtner.jpg" width="400px"></img>

            <h2>August 2019</h2>
            <p>Moved to Weibel for 5th grade. This was my first time walking to school, since Weibel happened to be in my neighborhood. 
                It was my favorite elementary school, but sadly, I only got to stay for 1 year.
                </p>
            <img src="src/assets/Weibel.jpg" width="400px"></img>

            <h2>2019 - 2020</h2>
            <p>I joined the school band as a flute player. 
                Meanwhile, my teacher Ms. Klingler was having a baby, so Ms. Rodamer was the substitute. 
                Interestingly, both teachers were in the class photo for the year.</p>
            <img src="src/assets/band.jpg" width="400px"></img>

            <h2>March 13, 2020</h2>
            <p>We packed up our books and supplies to bring home due to COVID 19. (The reason I remember this date is because it also happened to be Friday 13th)</p>
            <img src="src/assets/covid.jpg" width="400px"></img>

            <h2>August 2020</h2>
            <p>Started 6th grade for Horner Middle School, but on distance learning due to Covid. 
                We frequently used Zoom for classes, which probably wasn't the best for my grade.</p>

            <h2>August 2021</h2>
            <p>Started 7th grade at Horner Middle School in person. Still had to wear a face mask. 
                I resumed band as a flute player, but after my dad worried about possible covid risk, he suggested I switch to an instrument that I don't have to blow to play.
                So I switched to percussion. But turns out I actually liked percussion better than flute.
            </p>
            <img src="src/assets/Horner.jpg" width="400px"></img>

            <h2>December 2021</h2>
            <p>I performed in a school concert for the first time. Specifically the Horner 2021 Winter Concert, as Beginning Band. 
                The other bands, namely Concert band period 1, Concert band period 3, and Symphonic Band, performed in it as well.
            </p>

            <h2>March 2022</h2>
            <p>I started auditioning for Symphonic Band (the highest level band class in Horner), and then made it to the list 2 months later.
            </p>

            <h2>August 2022</h2>
            <p>In 8th grade, I am officially a percussionist in Symphonic Band. 
                In December, I officially performed 9 different instruments in the 2022 Winter Concert. 
            </p>

            <h2>2022-2026</h2>
            <p>My mom signed me up for a full Python course on Udemy, although it wasn't my first time typing Python code. 
                Interestingly, the course also happened to include HTML web development.
            </p>
            <img src="src/assets/udemy.jpg" width="400px"></img>

            <h2>2022-2026</h2>
            <p>My mom signed me up for the USACO programming contest. 
                For the first contest I attempted using Python, but since Python has long runtimes, my mom suggested swtiching to c++ since it runs faster.
                Ever since, I was learning competitive c++ programming on X-Camp.
            </p>

            <h2>2025-2026</h2>
            <p>I created the Social Dojo website to give kids with special needs an opportunity to practice conversations while earning badges for completion.
                
            </p>

            <h2>2026 7/5 - 7/17</h2>
            <p>This is the time when I was attending this very Stanford iD Tech camp. It's also my first time attending a summer camp.
                My class was called Full Stack Engineering & AI Academy, but in practice it was mostly about designing a website.
                And so, this is when I made this very website.
            </p>
            <img src="src/assets/stanford.jpg" width="400px"></img>
            
        </div>
    )
}

export default Timeline;