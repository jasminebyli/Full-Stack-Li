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
            <p>Moved to Curtner for 4th grade.</p>

            <h2>August 2019</h2>
            <p>Moved to Weibel for 5th grade.</p>

            <h2>March 13, 2020</h2>
            <p>We packed up our books and supplies to bring home due to COVID 19.</p>

            <h2>August 2020</h2>
            <p>Started 6th grade for Horner Middle School, but on distance learning due to Covid. 
                We frequently used Zoom for classes, which probably wasn't the best for my grade.</p>

            
        </div>
    )
}

export default Timeline;