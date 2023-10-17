import { addUser, getAllUsers } from '../../databaseConnection/api/users';
import { getAllActivitys, addActivity } from '../../databaseConnection/api/activitys';
import React, { useState } from 'react';

function RequestButton() {
    const [sentence, setSentence] = useState("");
    const [taskName, setTaskName] = useState("");
    const [difficulty , setDifficulty] = useState(0);
    
    const handleClick = async () => {
       await addActivity(taskName, difficulty)
    }

    const handleGetClick = async () => {
     const allActivitys = (await getAllActivitys()).data;
     setSentence(allActivitys.map(activity => {return activity.name+ " : " + activity.difficulty }));
    }

  return (
    <div className="RequestButton">
     <button onClick={handleClick}> Add Task </button>
     <button onClick={handleGetClick}> click me to fetch data</button>
     <input onChange= { (e) => setTaskName(e.target.value) } placeholder="task name"/>
     <input onChange = { (e) => setDifficulty(Number(e.target.value)) } placeholder="difficulty" type='range' min={0} max={5} />
     <p>{sentence}</p>
    </div>
  );
}

export default RequestButton;
