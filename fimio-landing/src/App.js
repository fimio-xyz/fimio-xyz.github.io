import { Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './styles/App.scss';

import Home from './pages/Home';
import CareerDetailsPage from "./CareerDetails";
import { jobs } from './Data';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Routes>
            <Route path="/" element={<Home isOpen={isOpen} toggle={toggle} />} />
            {
                jobs.map(job =>
                    (<Route path={`jobs/${job.job_id}`}
                            element={<CareerDetailsPage isOpen={isOpen} toggle={toggle} {...job}/>}
                            key={job.job_id}
                    />))
            }
        </Routes>
    );
}

export default App;
