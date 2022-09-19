import React from 'react';
import Board from './Board/Board.jsx'
import './index.scss'
import { NamePlayer1, NamePlayer2, WhoWalk, GameWith } from './context.js';

function App() {
    const [flag, setFlag] = React.useState('tic')
    const [player1, setPlayer1] = React.useState('')
    const [player2, setPlayer2] = React.useState('')
    const [playWith, setPlayWith] = React.useState('person')

    return (
        <WhoWalk.Provider value={{flag, setFlag}}>
            <GameWith.Provider value={{playWith, setPlayWith}}>
                <NamePlayer1.Provider value={{player1, setPlayer1}}>
                    <NamePlayer2.Provider value={{player2, setPlayer2}}>
                        <div className="App">
                            <Board />
                        </div>
                    </NamePlayer2.Provider>
                </NamePlayer1.Provider>
            </GameWith.Provider>
        </WhoWalk.Provider>
    );
}

export default App;
