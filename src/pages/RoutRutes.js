
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Home from './Home'

export const RoutRutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
        </Routes>
    )
}
