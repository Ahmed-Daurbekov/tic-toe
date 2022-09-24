import React from 'react';
import {NamePlayer1, NamePlayer2, WhoWalk} from '../../context';
import './WithPerson.scss'
import DrawModalWindow from './DrawModalWindow/DrawModalWindow';
import WinModalWindow from './WinModalWindow/WinModalWindow';

const WithPerson = () => {
    const [isWin, setWin] = React.useState(false)
    let {flag, setFlag} = React.useContext(WhoWalk)
    const [posPlayer1, setPosPlayer1] = React.useState([])
    const [posPlayer2, setPosPlayer2] = React.useState([])
    const [clickCount, setClickCount] = React.useState(0)
    const [scorePlayer1, setScorePlayer1] = React.useState(0)
    const [scorePlayer2, setScorePlayer2] = React.useState(0)
    let {player1, setPlayer1} = React.useContext(NamePlayer1)
    let {player2, setPlayer2} = React.useContext(NamePlayer2)

    let winCombination = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]

    function test(e) {
        let cell = e.target
        if (flag == 'tic') {
            if (!cell.innerHTML) {
                setClickCount(prev => prev+1)
                cell.style.color = '#1ac547'
                cell.innerHTML = 'X'
                setFlag('toe')
                posPlayer1.push(+cell.id)
            }
        } else if(flag == 'toe') {
            if (!cell.innerHTML) {
                setClickCount(prev => prev+1)
                cell.style.color = '#ee231e'
                cell.innerHTML = 'O'
                setFlag('tic')
                posPlayer2.push(+cell.id)
            }
        }
        
        if (posPlayer1.length >= 3 || posPlayer2.length >= 3) {
            winCombination.forEach(arr => {
                if (posPlayer1.includes(arr[0]) && posPlayer1.includes(arr[1]) && posPlayer1.includes(arr[2])) {
                    setWin(true)
                    setClickCount(0)
                }

                if (posPlayer2.includes(arr[0]) && posPlayer2.includes(arr[1]) && posPlayer2.includes(arr[2])) {
                    setWin(true)
                    setClickCount(0)
                }
            })
        }
        console.log();
    }

    function clearField() {
        document.querySelectorAll('.cell').forEach(item => {
            item.innerHTML = ''
        })
        setPosPlayer1([])
        setPosPlayer2([])
        setClickCount(0)
    }
    
    return (
        <div className='playWithPerson'>
            <div className="left-column">
                <div className='left-column__title'>Счет игроков:</div>
                <div className="players_score">
                    <div className="player-score player__1-score">
                        {player1 ? player1 : 'Игрок 1'}:
                        <span>{scorePlayer1}</span> /
                    </div>
                    <div className="player-score player__2-score">
                        {player2 ? player2 : 'Игрок 2'}:
                        <span>{scorePlayer2}</span>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="gameField">
                    <div className="cell" id="1" onClick={e => test(e)}></div>
                    <div className="cell" id="2" onClick={e => test(e)}></div>
                    <div className="cell" id="3" onClick={e => test(e)}></div>
                    <div className="cell" id="4" onClick={e => test(e)}></div>
                    <div className="cell" id="5" onClick={e => test(e)}></div>
                    <div className="cell" id="6" onClick={e => test(e)}></div>
                    <div className="cell" id="7" onClick={e => test(e)}></div>
                    <div className="cell" id="8" onClick={e => test(e)}></div>
                    <div className="cell" id="9" onClick={e => test(e)}></div>
                </div>
                <button className='replay' onClick={e => {
                    clearField()
                    setFlag('tic')
                    setScorePlayer1(0)
                    setScorePlayer2(0)
                }}>Начать заного</button>
                {
                    isWin && <WinModalWindow setScorePlayer1={setScorePlayer1} setScorePlayer2={setScorePlayer2} clearField={clearField} setWin={setWin}>
                        Выиграл игрок: 
                        {flag == 'tic' ?
                        ` ${player2 ? player2 : 'Игрок 2'}` :
                        ` ${player1 ? player1 : 'Игрок 1'}`
                        }
                    </WinModalWindow>
                }
                {
                    clickCount == 9 && <DrawModalWindow setScorePlayer1={setScorePlayer1} setScorePlayer2={setScorePlayer2} clearField={clearField} setWin={setWin}>
                        Ничья
                    </DrawModalWindow>
                }
            </div>
        </div>
    );
};

export default WithPerson;