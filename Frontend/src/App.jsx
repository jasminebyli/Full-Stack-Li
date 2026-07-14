
import Home from './Home.jsx'
import Dimitri from './Dimitri.jsx'
import Timeline from './Timeline.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dimitri' element={<Dimitri/>}/>
      <Route path='/Timeline' element={<Timeline/>}/>
    </Routes>
  )
}

export default App;
