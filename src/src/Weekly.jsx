
import './css/Weekly.css';

import React, { useState } from 'react';

const WeeklyPlanner = () => {
  const [mondayTasks, setMondayTasks] = useState(['Örnek Önemli Görev 1', 'Örnek Önemli Görev 2']);
  const [tuesdayTasks, setTuesdayTasks] = useState(['Örnek Önemli Görev 1', 'Örnek Önemli Görev 2']);
  const [wednesdayTasks, setWednesdayTasks] = useState(['Örnek Önemli Görev 1', 'Örnek Önemli Görev 2']);
  const [thursdayTasks, setThursdayTasks] = useState(['Örnek Önemli Görev 1', 'Örnek Önemli Görev 2']);
  const [fridayTasks, setFridayTasks] = useState(['Örnek Önemli Görev 1', 'Örnek Önemli Görev 2']);
  const [weekendTasks, setWeekendTasks] = useState(['Örnek Önemli Görev 1', 'Örnek Önemli Görev 2']);

  const [dailyTasks, setDailyTasks] = useState(['Örnek Günlük Görev 1', 'Örnek Günlük Görev 2']);
  const [shoppingList, setShoppingList] = useState(['Örnek Alışveriş Listesi Öğesi 1', 'Örnek Alışveriş Listesi Öğesi 2']);
  const [expenses, setExpenses] = useState([]);

  const addMondayTask = (task) => {
    setMondayTasks([...mondayTasks, task]);
  };
  const addTuesdayTask = (task) => {
    setTuesdayTasks([...tuesdayTasks, task]);
  };
  const addWednesdayTask = (task) => {
    setWednesdayTasks([...wednesdayTasks, task]);
  };
  const addThursdayTask = (task) => {
    setThursdayTasks([...thursdayTasks, task]);
  };
  const addFridayTask = (task) => {
    setFridayTasks([...fridayTasks, task]);
  };
  const addWeekendTask = (task) => {
    setWeekendTasks([...weekendTasks, task]);
  };

  const removeMondayTask = (index) => {
    const newTasks = [...mondayTasks];
    newTasks.splice(index, 1);
    setMondayTasks(newTasks);
  };
  const removeTuesdayTask = (index) => {
    const newTasks = [...tuesdayTasks];
    newTasks.splice(index, 1);
    setTuesdayTasks(newTasks);
  };

  const removeWednesdayTask = (index) => {
    const newTasks = [...wednesdayTasks];
    newTasks.splice(index, 1);
    setWednesdayTasks(newTasks);
  };

  const removeThursdayTask = (index) => {
    const newTasks = [...thursdayTasks];
    newTasks.splice(index, 1);
    setThursdayTasks(newTasks);
  };

  const removeFridayTask = (index) => {
    const newTasks = [...fridayTasks];
    newTasks.splice(index, 1);
    setFridayTasks(newTasks);
  };

  const removeWeekendTask = (index) => {
    const newTasks = [...weekendTasks];
    newTasks.splice(index, 1);
    setWeekendTasks(newTasks);
  };

  const addDailyTask = (task) => {
    setDailyTasks([...dailyTasks, task]);
  };

  const removeDailyTask = (index) => {
    const newTasks = [...dailyTasks];
    newTasks.splice(index, 1);
    setDailyTasks(newTasks);
  };

  const addShoppingListItem = (item) => {
    setShoppingList([...shoppingList, item]);
  };

  const removeShoppingListItem = (index) => {
    const newItems = [...shoppingList];
    newItems.splice(index, 1);
    setShoppingList(newItems);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
    <div className="weekly-planner">


      <div className='pzts'> <h2>Pazartesi</h2>
      <hr></hr>
      <ul>
        {mondayTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeMondayTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Günlük Görev Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          addMondayTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>



      <div className='sali'> <h2>Salı</h2>
      <hr></hr>
      <ul>
        {tuesdayTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTuesdayTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Günlük Görev Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
            addTuesdayTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>

<div className='crsba'> <h2>Çarşamba</h2>
<hr></hr>
      <ul>
        {wednesdayTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeWednesdayTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Günlük Görev Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
            addWednesdayTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>

<div className='prsmbe'> <h2>Perşembe</h2>
<hr></hr>
      <ul>
        {thursdayTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeThursdayTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Günlük Görev Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
            addThursdayTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>

<div className='cuma'> <h2>Cuma</h2>
<hr></hr>
      <ul>
        {fridayTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeFridayTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Günlük Görev Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
            addFridayTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>


      <div className='weekend'> <h2>Cumartesi-Pazar</h2>
      <hr></hr>
      <ul>
        {weekendTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeWeekendTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Günlük Görev Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
            addWeekendTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>


      <div className='alisveris'>
      <h2>Alışveriş Listesi</h2>
      <hr></hr>
      <ul>
        {dailyTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeDailyTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Alınacak Ürün Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          addDailyTask(e.target.value);
          e.target.value = '';
        }
      }} /> </div>

      
      <div className='harcama'>
      <h2 >Harcamalarım </h2>
      <hr></hr>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense}
            <button onClick={() => removeExpense(index)}>X</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Harcama Ekle" onKeyPress={(e) => {
        if (e.key === 'Enter') {
          addExpense(e.target.value);
          e.target.value = '';
        }
      }} />
      </div>


    </div>
  );
};

export default WeeklyPlanner;
