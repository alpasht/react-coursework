import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Property from './PropertyPage/Property'

import Footer from '../Footer';

function App() {
    return (
        <Router>
            <Property />
            <Footer />
        </Router>
    )
}

export default App
