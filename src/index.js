import React from 'react';
import ReactDOM from 'react-dom/client';

import {Header} from './components/header';
import {NewList} from './components/news-list';
import {Footer} from './components/footer';
import './styles/style.css';
import JSON from './db.json';

const App = () => {
    const state = {
        news: JSON,
        footerText: 'I am a happy footer'
    }
    
    return (
        <>
            <Header />
            <NewList news={state.news}>
                <br />
                <h1>I am children</h1>
            </NewList>
            <Footer footerText={state.footerText} />
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);