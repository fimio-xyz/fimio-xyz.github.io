import { Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './styles/App.scss';

import Home from './pages/Home';
import CareerDetailsPage from "./CareerDetails";
import { job1, job2, job3 } from './Data';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Routes>
            <Route path="/" element={<Home isOpen={isOpen} toggle={toggle} />} />
            <Route path="jobs/1" element={<CareerDetailsPage isOpen={isOpen} toggle={toggle} {...job1}/>} />
            <Route path="jobs/2" element={<CareerDetailsPage isOpen={isOpen} toggle={toggle} {...job2}/>} />
            <Route path="jobs/3" element={<CareerDetailsPage isOpen={isOpen} toggle={toggle} {...job3}/>} />
        </Routes>
    );
}

export default App;
