import React from 'react';
import {WhoWalk} from '../../../context';
import './WinModalWindow.scss'

const WinModalWindow = ({children, setWin, clearField, setScorePlayer1, setScorePlayer2}) => {
    let {flag, setFlag} = React.useContext(WhoWalk)

    function restart(e) {
        setWin(false)
        setScorePlayer1(0)
        setScorePlayer2(0)
    }

    function playAgain() {
        setWin(false)
        if (flag == 'toe') {
            setScorePlayer1(prev => prev + 1)
        } else {
            setScorePlayer2(prev => prev + 1)
        }
        clearField()
        setFlag('tic')
    }
    
    return (
        <div className='winModalWindow'>
            <div className="winModalWindow-body">
                <div className="winModalWindow-body__title">
                    {children}
                </div>
                <button className='winModalWindow-body__button winModalWindow-body__button-play_again' onClick={e => {
                    playAgain(e)
                    clearField()
                    setFlag('tic')
                }}>Играть ещё раз</button>
                {/* реализовать метод счета */}
                <button className='winModalWindow-body__button winModalWindow-body__button-restart' onClick={e => {
                    restart(e)
                    clearField()
                    setFlag('tic')
                }}>Начать заного</button>
            </div>
        </div>
    );
};

export default WinModalWindow;