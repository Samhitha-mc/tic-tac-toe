import React,{useState} from 'react'
import Board from './Board';

function Tictac() {
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [nextPlayer,setNextPlayer]=useState(true);

  let status=''


  function handleClick(idx) {
    const newSquares=squares.slice();
    if(declareWinner(newSquares)|| newSquares[idx]){
      return;
    }
    newSquares[idx]= nextPlayer ? 'X':'O';

    setSquares(newSquares)
    setNextPlayer(!nextPlayer)
  }
  
const winner = declareWinner(squares)
if(winner){
  status ='winner is:'+winner;

}else{
  status = 'Next player: ' + (nextPlayer?'X':'O')
}
function resetGame(){
  setSquares(Array(9).fill(null))
  setNextPlayer(true);
}
  return (
    <div>
      <h1>tictactoe</h1>
      <div>{status}</div>
      <Board squares={squares} onClick={handleClick}/>
      <button className=" btn btn-light border square " onClick={onClick}>{value}</button>
    </div>
  )
}

const declareWinner=(squares)=>{
const combinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [1,4,7],
  [0,3,6],
  [2,5,8]
]

for(let i=0;i< combinations.length;i++){
  const [a,b,c] = combinations[i];
  if(squares[a] && squares[a] == squares[b] && squares[a]==squares[c]){
    return squares[a];
}
}
return null;

}





export default Tictac