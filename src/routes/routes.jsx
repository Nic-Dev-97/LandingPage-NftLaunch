import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Begin from '../pages/begin';


export default function Rotas() {
    return (
        
            <Routes>
                <Route path="/" element={< Begin/>} />
            </Routes>
        
    );
}
