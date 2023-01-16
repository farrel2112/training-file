import React,{useState} from 'react';

function First(){
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const handleClick = e =>{
        e.preventDefault()
        setIsLoggedIn(true)
    }
    let [time,setTime] = useState(0)
    setTime(setInterval(function(){
         time++
    },1000))
    return(
        <div>
            <h4>Je suis un composant enfant</h4>
            {isLoggedIn ? 'Je suis connecté': <button onClick={handleClick}>Connectez-vous!!!</button>}
            <h4>Compte à rebours : {time}</h4>
        
        </div>
    )
}
export default First;