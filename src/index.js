import React from 'react';
import ReactDOM from 'react-dom/client';

import {Header} from './components/header';
import {NewList} from './components/news-list';
import './styles/style.css';
import JSON from './db.json';

const App = () => {
    
    return (
        <>
            <Header />
            <NewList
                news={JSON}
            />
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);