import { Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './styles/App.scss';

import Home from './pages/Home';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Routes>
            <Route path="/" element={<Home isOpen={isOpen} toggle={toggle} />} />
        </Routes>
    );
}

export default App;
