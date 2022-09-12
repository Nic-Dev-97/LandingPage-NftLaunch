import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Begin from '../pages/begin';


export default function Rotas() {
    return (
        
            <Routes>
                <Route path="/" element={< Begin/>} />
                <Route path="/" element={<h1>404 - Not Found</h1>} />
                <Route path="/" element={<h1>404 - Not Found</h1>} />
            </Routes>
        
    );
}
