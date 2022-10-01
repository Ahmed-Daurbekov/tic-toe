import React from 'react';
import {NamePlayer1, NamePlayer2, WhoWalk} from '../../context';
import './WithComputer.scss'
import DrawModalWindow from './DrawModalWindow/DrawModalWindow';
import WinModalWindow from './WinModalWindow/WinModalWindow';

const WithComputer = () => {
    let cells
    React.useEffect(() => {
        cells = document.querySelectorAll('.cell')
        cells.forEach(item => {
            item.addEventListener('click', start)
        })

        return () => {
            cells.forEach(item => item.removeEventListener('click', start))
        }
    })
    const [isWin, setWin] = React.useState(false)
    let {flag, setFlag} = React.useContext(WhoWalk)
    const [clickCount, setClickCount] = React.useState(0)
    const [scorePlayer1, setScorePlayer1] = React.useState(0)
    const [scorePlayer2, setScorePlayer2] = React.useState(0)
    let {player1, setPlayer1} = React.useContext(NamePlayer1)
    let {player2, setPlayer2} = React.useContext(NamePlayer2)

    let arr = [null, null, null, null, null, null, null, null, null]

    let concat = function (a, b, c) {
        let result = arr[a] + arr[b] + arr[c]
        if (result == 'xxx' || result == 'ooo') {
            return result
        }

        switch (result){
            case "xxnull":
                return ["x", c]
                
            case "xnullx":
                return ["x", b]
                
            case "nullxx":
                return ["x", a]
                
            case "oonull":
                return ["o", c]
                
            case "onullo":
                return ["o", b]
                
            case "nulloo":
                return ["o", a]
        }
    }

    let changeColorAndStop = function(a, b, c, fl) {
        if (fl == 'ooo') {
            setFlag('tic')
        } else {
            setFlag('toe')
        }
        setWin(true)
    }

    let checkWin = function () {
        for (let k = 0; k < 3; k++) {
            let result = concat(k, k+3, k+6)
            if (result === "xxx" || result === "ooo") {
                changeColorAndStop(k, k+3, k+6, result)
            }
        }

        for (let j = 0; j <= 6; j = j + 3) {
            let result = concat(j, j+1, j+2)

            if (result == 'xxx' || result == 'ooo') {
                changeColorAndStop(j, j+1, j+2, result)
            }
        }

        let diagonal = concat(0, 4, 8)
        if (diagonal === "xxx" || diagonal === "ooo") {
            changeColorAndStop(0, 4, 8, diagonal)
        }
        
        let diagonal2 = concat(2, 4, 6)
        if (diagonal2 === "xxx" || diagonal2 === "ooo") {
            changeColorAndStop(2, 4, 6, diagonal)
        }
    }

    let botZero = function () {
        let emptyCell = []
        let arrData = document.querySelectorAll(".cell")
        arrData.forEach(item => {
            if (item.innerHTML == '') {
                emptyCell.push(item.id)
            }
        })
        
        if(emptyCell.length == 0) {
            setClickCount(9)
            return
        }

        for (var i = 0; i < 3; i++){
            var result = concat(i, i + 3, i + 6)
            
            if (typeof(result) === "object" && result[0] === "o"){
                arrData[result[1]].style.color = '#ee231e'
                arrData[result[1]].innerHTML = "o"
                arr[result[1]] = "o"
                return
            }
        }
        
        for (var i = 0; i <= 6; i +=3){
            var result = concat(i, i + 1, i + 2)
            
            if (typeof(result) === "object" && result[0] === "o"){
                arrData[result[1]].style.color = '#ee231e'
                arrData[result[1]].innerHTML = "o"
                arr[result[1]] = "o"
                return
            }
        }
        
        result = concat(0, 4, 8)
        if (typeof(result) === "object" && result[0] === "o"){
            arrData[result[1]].style.color = '#ee231e'
            arrData[result[1]].innerHTML = "o"
            arr[result[1]] = "o"
            return
        }
        
        result = concat(2, 4, 6)
        if (typeof(result) === "object" && result[0] === "o"){
            arrData[result[1]].style.color = '#ee231e'
            arrData[result[1]].innerHTML = "o"
            arr[result[1]] = "o"
            return
        }	
        
        for (var i = 0; i < 3; i++){
            var result = concat(i, i + 3, i + 6)
            
            if (typeof(result) === "object" && result[0] === "x"){
                arrData[result[1]].style.color = '#ee231e'
                arrData[result[1]].innerHTML = "o"
                arr[result[1]] = "o"
                return
            }
        }
        
        for (var i = 0; i <= 6; i +=3){
            let result = concat(i, i + 1, i + 2)
            
            if (typeof(result) === "object" && result[0] === "x"){
                arrData[result[1]].style.color = '#ee231e'
                arrData[result[1]].innerHTML = "o"
                arr[result[1]] = "o"
                return
            }
        }
        
        result = concat(0, 4, 8)
        if (typeof(result) === "object" && result[0] === "x"){
            arrData[result[1]].style.color = '#ee231e'
            arrData[result[1]].innerHTML = "o"
            arr[result[1]] = "o"
            return
        }
        
        result = concat(2, 4, 6)
        if (typeof(result) === "object" && result[0] === "x"){
            arrData[result[1]].style.color = '#ee231e'
            arrData[result[1]].innerHTML = "o"
            arr[result[1]] = "o"
            return
        }
        
        var tempArr = []
        
        for(var i = 0; i < 9; i++){
            if (arr[i] === null){
                tempArr.push(i)
            }
        }
        
        var randIndexTempArr = Math.floor(Math.random() * tempArr.length)
        
        var randNull = tempArr[randIndexTempArr]
        
        arrData[randNull].style.color = '#ee231e'
        arrData[randNull].innerHTML = "o"
        arr[randNull] = "o"
    }

    function start(event) {
        if (event.target.className === "cell" && event.target.textContent === ""){
            event.target.style.color = "#1ac547"
            event.target.innerHTML = "x"
            arr[event.target.id-1] = "x"
        } else {
            return
        }
        checkWin()
        cells.forEach(cell => {
            // cell.re
        })
        setTimeout(() => {
            botZero()
            checkWin()
        }, 400);  
    }

    function clearField() {
        document.querySelectorAll('.cell').forEach(item => {
            item.innerHTML = ''
            item.style.color = 'unset'
        })
    }
    
    return (
        <div className='playWithComputer'>
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
                    <div className="cell" id="1" ></div>
                    <div className="cell" id="2" ></div>
                    <div className="cell" id="3" ></div>
                    <div className="cell" id="4" ></div>
                    <div className="cell" id="5" ></div>
                    <div className="cell" id="6" ></div>
                    <div className="cell" id="7" ></div>
                    <div className="cell" id="8" ></div>
                    <div className="cell" id="9" ></div>
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
                        ` ${player2 ? player2 : 'Компьютер'}` :
                        ` ${player1 ? player1 : 'Игрок 1'}`
                        }
                    </WinModalWindow>
                }
                {
                    clickCount === 9 && <DrawModalWindow setClickCount={setClickCount} setScorePlayer1={setScorePlayer1} setScorePlayer2={setScorePlayer2} clearField={clearField} setWin={setWin}>
                        Ничья
                    </DrawModalWindow>
                }
            </div>
        </div>
    );
};

export default WithComputer;