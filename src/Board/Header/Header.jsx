import React from 'react';
import { WhoWalk, NamePlayer1, NamePlayer2, GameWith } from '../../context';
import computer from '../../img/computer.svg'
import person from '../../img/person.svg'
import './Header.scss'

const Header = () => {
    let {flag, setFlag} = React.useContext(WhoWalk)
    let {player1, setPlayer1} = React.useContext(NamePlayer1)
    let {player2, setPlayer2} = React.useContext(NamePlayer2)
    let {playWith, setPlayWith} = React.useContext(GameWith)

    function renamePlayer1(e) {
        let name = prompt('Имя игрока 1')
        name = name.trim()
        if (name) {
            name = name.slice(0, 1).toUpperCase() + name.slice(1)
            setPlayer1(name)
        }
    }
    
    function renamePlayer2(e) {
        let name = prompt('Имя игрока 2')
        name = name.trim()
        if (name) {
            name = name.slice(0, 1).toUpperCase() + name.slice(1)
            setPlayer2(name)
        }
    }

    function selectMode(e) {
        let getId = e.target.id
        document.querySelectorAll('.selectWith').forEach(item => {
            item.classList.remove('active')
        })
        setPlayWith(getId)
        setFlag('tic')
        if (getId == 'person') {
            setPlayer2('Игрок 2')
        } else if (getId == 'computer') {
            setPlayer2('Компьютер')
        }
        e.target.classList.add('active')
    }

    return (
        <div className='header'>
            <div className={flag == 'tic' ? 'player player-1 active' : 'player player-1'}>
                <div className="player-1_block">
                    <div className="player__name">
                        <span>{player1 ? player1 : 'Игрок 1'}:</span> 
                        <span className='figure'>X</span>
                        <svg onClick={e => renamePlayer1(e)} xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30">
                            <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="mode">
                <div className="walking-player">
                    Ходит:<span className='name' style={{color: flag == 'tic' ? '#1ac547' : '#ee231e'}}>
                        {
                            flag == 'tic' ? 
                            player1 ? player1 : 'Игрок 1' : 
                            player2 ? player2 : 'Игрок 2'
                        }
                    </span>
                </div>
                <div className="select-mode">
                    <span>Играть:</span>
                    <img onClick={e => selectMode(e)} id='person' className='selectWith withPerson active' src={person} alt="person" />
                    <img onClick={e => selectMode(e)} id='computer' className='selectWith withComputer' src={computer} alt="comp" />
                </div>
            </div>
            <div className={flag == 'toe' ? 'player player-2 active' : 'player player-2'}>
                <div className="player-2_block">
                    <div className="player__name">
                        <span>{player2 ? player2 : 'Игрок 2'}:</span> 
                        <span className='figure'>O</span>
                        <svg onClick={e => renamePlayer2(e)} xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30">
                            <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;