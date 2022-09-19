import React from 'react';
import { WhoWalk } from '../../../context';
import './DrawModalWindow.scss'

const DrawModalWindow = ({children, setWin, clearField, setScorePlayer1, setScorePlayer2}) => {
    let {flag, setFlag} = React.useContext(WhoWalk)

    function restart(e) {
        setWin(false)
        setScorePlayer1(0)
        setScorePlayer2(0)
        setFlag('tic')
    }

    function playAgain() {
        setWin(false)
        setScorePlayer1(prev => prev + 0)
        setScorePlayer2(prev => prev + 0)
        clearField()
        setFlag('tic')
    }
    
    return (
        <div className='drawModalWindow'>
            <div className="drawModalWindow-body">
                <div className="drawModalWindow-body__title">
                    {children}
                </div>
                <button className='drawModalWindow-body__button drawModalWindow-body__button-play_again' onClick={e => {
                    playAgain(e)
                    clearField()
                    setFlag('tic')
                }}>Играть ещё раз</button>
                {/* реализовать метод счета */}
                <button className='drawModalWindow-body__button drawModalWindow-body__button-restart' onClick={e => {
                    restart(e)
                    clearField()
                    setFlag('tic')
                }}>Начать заного</button>
            </div>
        </div>
    );
};

export default DrawModalWindow;