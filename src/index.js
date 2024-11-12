import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';

import {Header} from './components/header';
import {NewList} from './components/news-list';
import {Footer} from './components/footer';
import {Life} from './components/lifecycle';
import './styles/style.css';
import JSON from './db.json';

const App = () => {
    const [state, setState] = useState({
        news: JSON,
        filtered: JSON,
        footerText: 'I am a happy footer',
        active: true,
    });

    const getKeywords = (event) => {
        const keywords = event.target.value.toLowerCase();
        const filtered = state.news.filter((item) => 
            item.title.toLowerCase().includes(keywords)
        );

        setState((prevState) => ({
            ...prevState,
            filtered,
        }));
    }
    
    return (
        <>
            <Header keywords={getKeywords} />
         

            {state.active ?
                <Life />
                :
                null
            }
            
            <button
                onClick={() => setState((prevState) => ({
                    ...prevState,
                    active: !state.active,
                }))}
            >
                Action
            </button>

            <Footer footerText={state.footerText} />
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
