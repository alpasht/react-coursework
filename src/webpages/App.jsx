import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './HomePage/Home'

import Footer from '../Footer';

function App() {
    return (
        <Router>
            <Home />
            <Footer />
        </Router>
    )
}

export default App
