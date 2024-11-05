import React from 'react';
import ReactDOM from 'react-dom/client';

import {Header} from './components/header';
import {NewList} from './components/news-list';
import {Footer} from './components/footer';
import './styles/style.css';
import JSON from './db.json';

const App = () => {
    const initialState = {
        news: JSON,
        footerText: 'I am a happy footer'
    }
    
    return (
        <>
            <Header />
            <NewList
                news={initialState.news}
            />
            <Footer footerText={initialState.footerText} />
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);