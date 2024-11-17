import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import {Header} from './components/header';
import {NewList} from './components/news-list';
import {Footer} from './components/footer';
import {Life} from './components/lifecycle';
import {Post} from './components/posts';
import './styles/style.css';
import JSON from './db.json';

const App = ({initialCount}) => {
    const [state, setState] = useState({
        news: JSON,
        filtered: JSON,
        footerText: 'I am a happy footer',
        active: true,
    });

    const [number, setNumber] = useState(initialCount);

    const [count, setCount] = useState({
        number: initialCount,
        user: 'Francis',
    })

    const [posts, setPost] = useState([
        {
            name: 'Super awesome post',
            body: 'The content of the post',
        },
        {
            name: 'React is cool',
            body: 'Something else',
        }
    ]);

    const getKeywords = (event) => {
        const keywords = event.target.value.toLowerCase();
        const filtered = state.news.filter((item) => 
            item.title.toLowerCase().includes(keywords)
        );

        setState((prevState) => ({
            ...prevState,
            filtered,
        }));
    };

    const addPost = () => {
        const newPost = {
            name: 'PHP is still awesome',
            body: 'Something about php',
        };

        setPost([
            ...posts,
            newPost,
        ])
    };

    const removePost = () => {
        setPost([]);
    };
    
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

            <h1>{count.user}</h1>
            <h3>Count: {count.number}</h3>
            <button onClick={() => setCount({
                ...count,
                number: count.number+1
            })}>
                Add One
            </button>
            <button onClick={() => setCount({
                ...count,
                number: count.number-1
            })}>
                Rest One
            </button>
            <button onClick={() => setCount({number: initialCount})}>Reset</button>

            <hr />

            {posts.map((item, index) => (
                <Post
                    key={`${item}-${index}`}
                    item={item}
                />
            ))}

            <button onClick={addPost}>Add post</button>
            <button onClick={removePost}>Remove post</button>

            <Footer footerText={state.footerText} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App initialCount={0}/>);
