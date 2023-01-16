import React,{useState} from 'react';


const Second = () => {
    const [name,setName] = useState('')
    const handleChange = (e)=>setName(e.target.value)
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert('Formulaire envoyé')
    }
    return (
        <form onSubmit ={handleSubmit}>
            <label>
                Entrez votre nom
            </label>
            <input 
                type ='text'
                value ={name}
                onChange ={handleChange}
            />
            <input type="submit" value="Envoyer"/>
        </form>
    );
};

export default Second;