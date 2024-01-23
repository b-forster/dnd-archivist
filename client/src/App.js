import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Header, ModalContent } from './components';

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Routes>
                <Route path="/create" element={<ModalContent />} />
            </Routes> */}
            <ModalContent />
            <footer>
                Parchment icon by <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/YcQqArFgdVcn/parchment">Icons8</a> ＊ D20 icons by <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-icons/d20" title="d20 icons">Freepik - Flaticon</a>
            </footer>
        </div>
    );
}

export default App;
