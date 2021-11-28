import React from 'react'
import Rock from './images/rock.png'
import Paper from './images/paper.png'
import Scissors from './images/scissors.png'

const ButtonsGame = () => {

    const PAPER=0
    const ROCK=1
    const SCISSORS=2

    const TIE=0
    const WIN=1
    const LOST=2

        

    const play=(userOption)=>{
        const machineOption= Math.floor(Math.random()*3)
        const machineData=()=>{
            if (machineOption===1) {
                return "Piedra"
            }else if(machineOption===0){
                return "Papel"
            }else if(machineOption===2){
                return "Tijera"
            }
        }
        const result = calcResult(userOption, machineOption)
        switch (result) {
            case TIE:
                alert(`Empataste porque la maquina saco ${machineData()}`);
                break;
            case LOST:
                alert(`Perdiste porque la maquina saco ${machineData()}`);
            break;
            case WIN:
                alert(`Ganaste porque la maquina saco ${machineData()}`);
            break;
        
            default:
            break;
        }
    }


    const calcResult=( userOption ,machineOption)=>{
        if (userOption === machineOption) {
            return TIE
        } else if(userOption=== ROCK){
            if(machineOption ===PAPER)return LOST
            if(machineOption ===SCISSORS)return  WIN 
            
        }else if(userOption=== PAPER){
            if(machineOption ===SCISSORS)return LOST
            if(machineOption ===ROCK )return WIN
            
        }else if(userOption=== SCISSORS){
            if(machineOption ===ROCK )return LOST
            if(machineOption ===PAPER)return WIN 
            
        }
    }

    const rockbtn= () =>{
        play(ROCK)
    }

    const paperbtn= () =>{
        play(PAPER)
    }

    const scissorsbtn= () =>{
        play(SCISSORS)
    }


    return (
        <div id= "group-btn">
            <div>
                {play()}
            </div>
            <button onClick={rockbtn}>
                <img src={Rock} alt="piedra" style={{width:100}} />
            </button>
            <button onClick={paperbtn}>
                <img src={Paper} alt="papel" style={{width:100}} />
            </button>
            <button onClick={scissorsbtn}>
                <img src={Scissors} alt="tijeras" style={{width:100}}/> 
            </button>
        </div>
    )
}

export default ButtonsGame
