import React, { Component, useState }  from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimals(){
    const animals = ["bird","cat","cow","dog","gator","horse"];

    return animals[Math.floor(Math.random()* animals.length)];
}

function App(){
    const [animals,SetAnimals] = useState([])
    const handleClick = () => {
        SetAnimals([...animals,getRandomAnimals()])
    };
const renderedAnimals = animals.map((animals,index)=>{
    return <AnimalShow type = {animals} key = {index}/>
});

    return <div className='app'>
        <button onClick={handleClick}>Add Animal
        </button>
        <div className='animal-list'>{renderedAnimals}</div>

        </div>
}

export default App;