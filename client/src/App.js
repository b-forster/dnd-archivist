import React from 'react';
import './App.css';
import { Header, Modal } from './components';

function App() {
    return (
        <div className="App">
            <Header />
            <Modal
                buttonLabel="+ Create a Character"
                title="Create a New Character"
                summary="Enter your character&apos;s description and attributes below."
            />
            <footer>
                Parchment icon by <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/YcQqArFgdVcn/parchment">Icons8</a> ＊ D20 icons by <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-icons/d20" title="d20 icons">Freepik - Flaticon</a>
            </footer>
        </div>
    );
}

export default App;
