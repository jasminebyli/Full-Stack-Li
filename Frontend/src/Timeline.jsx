import './styles.css'
import {Link} from 'react-router-dom'


function Timeline () {
    return(
        <div>
            <h1 className='nametag'>Timeline</h1>
            <button> <Link to="/">Click to go back</Link></button>
            <h2>Born in May 5, 2009
            </h2>

            <h2>August 2014</h2>
            <p>Started kindergarden at Spangler</p>

            <h2>August 2015</h2>
            <p>Started 1st grade at Sinnott, stayed for 2nd and 3rd grade</p>

            <h2>August 2018</h2>
            <p>Moved to Curtner for 4th grade. But I didn't like it because the students kept trying to blame farts.</p>

            <h2>August 2019</h2>
            <p>Moved to Weibel for 5th grade. In that school year, I joined the school band as a flute player.</p>

            <h2>March 13, 2020</h2>
            <p>We packed up our books and supplies to bring home due to COVID 19.</p>

            <h2>August 2020</h2>
            <p>Started 6th grade for Horner Middle School, but on distance learning due to Covid. 
                We frequently used Zoom for classes, which probably wasn't the best for my grade.</p>

            <h2>August 2021</h2>
            <p>Started 7th grade at Horner Middle School in person. Still had to wear a face mask. 
                I resumed band as a flute player, but after my dad worried about possible covid risk, he suggested I switch to an instrument that I don't have to blow to play.
                So I switched to percussion. But turns out I actually liked percussion better than flute.
            </p>

            
        </div>
    )
}

export default Timeline;