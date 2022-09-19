import React from 'react';
import './Board.scss'
import Header from './Header/Header';
import WithComputer from './WithComputer/WithComputer';
import WithPerson from './WithPerson/WithPerson';
import { GameWith } from '../context';


const Board = () => {
    let {playWith, setPlayWith} = React.useContext(GameWith)
    // console.log(playWith);
    return (
        <div className='board'>
            <Header />
            {playWith == 'person' ? <WithPerson /> : <WithComputer />}
        </div>
    );
};

export default Board;