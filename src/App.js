import './App.css';
import ButtonComp from './Components/Button_comp';
import Add_new_todo from './Components/Add_Todo_comp';
import first_todos from './assets/first_todos.js'
import { useEffect, useState } from 'react';
import ToDoList from './Components/todoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState();
  const [mounted, setMounted] = useState(true);
  const [Wind, setWind] = useState();
  const [text, setText] = useState();
  
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('arr')) || first_todos);
    setFilteredTodos(JSON.parse(localStorage.getItem('filtered_arr')) || first_todos);
    setStatus(JSON.parse(localStorage.getItem('stat')) || 'active');
    setWind(JSON.parse(localStorage.getItem('wind')) || 'To Do');
    setText(JSON.parse(localStorage.getItem('txt')) || '');
  }, [mounted])

  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(todos));
    localStorage.setItem('filtered_arr', JSON.stringify(filteredTodos));
    localStorage.setItem('stat', JSON.stringify(status));
    localStorage.setItem('wind', JSON.stringify(Wind));
    localStorage.setItem('txt', JSON.stringify(text));
  }, [todos, filteredTodos, status, Wind, text])


  function Back(id){
    const todo = todos.find((item) => item.id === id);
    todo.active = (todo.done) ? 'done' : 'active';

    setFilteredTodos(todos.filter((item) => item.active === status))
  }

  function active_list(){
    setFilteredTodos(todos.filter(todo => todo.active === 'active'));
    setStatus('active')
    setWind('To Do')
  }

  function Done_list(){
    setFilteredTodos(todos.filter(todo => todo.active === 'done'));
    setStatus('done')
    setWind('Done')
  }
  function Delete(id){
    const todo = todos.find((item) => item.id === id);
    let new_todos = todos.filter((item) => item !== todo)
    setTodos(new_todos);
    setFilteredTodos(new_todos.filter((item) => item.active === status))
  }

  function Trash_content(){
    setFilteredTodos(todos.filter(todo => todo.active === 'trash'));
    setStatus('trash')
    setWind('Trash')
  }

  function Move_trash(id){
    const todo = todos.find((item) => item.id === id);
    todo.active = 'trash';

    setFilteredTodos(todos.filter((item) => item.active === status))
  }





  function check(id){
    const todo = todos.find((item) => item.id === id);
    todo.done = !todo.done;
    if(todo.active === 'active') todo.active = 'done';
    else if(todo.active === 'done') todo.active = 'active';
    setFilteredTodos(todos.filter((item) => item.active === status))
  }

  function enter(e){
    if(e.key === 'Enter') AddToDo();
  }

  function AddToDo(){
    if(text === '') return;

    const todo = {
        id: todos.length,
        active: 'active',
        text: text,
        done: false
    }
    setText('')
    let new_todos = [todo, ...todos];
    setTodos(new_todos);
    setFilteredTodos(new_todos.filter((item) => item.active === status))
  }

  function onChangeText(e){
    setText(e.target.value);
  }

  return (
    <div className="App">
      <div className='Main'>
        <div className='head'>
          <div>
            <div className='Header-1'>
              <h1>Simple To Do List</h1>
              <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
            </div>

            <div className='Option-Buttons pd13'>
              <ButtonComp title = "To Do" color = {(status === 'active') ? true : false} filterUpdate = {active_list}></ButtonComp>
              <ButtonComp title = "Done" color = {(status === 'done') ? true : false}  filterUpdate = {Done_list}></ButtonComp>
              <ButtonComp title = "Trash" color = {(status === 'trash') ? true : false}  filterUpdate = {Trash_content}></ButtonComp>
            </div>
          </div>
          
          <Add_new_todo onChangeText={onChangeText} text={text} AddToDo={AddToDo} handleEnter={enter}></Add_new_todo>

        </div>

        <h2 className='Header-1' style={{paddingTop: '12px'}}>{Wind}</h2>
        <div className='Header-1' style={{width: '94%', height: '3px', backgroundColor: '#151517', opacity: '0.2', marginBottom: '24px', marginTop: '12px'}}></div>

        <ToDoList filteredToDos = {filteredTodos} Move_trash={Move_trash} Delete={Delete} Back={Back} check={check}></ToDoList>
      </div>
      
      <p className='Header-1' style={{marginBottom: '50px'}}>Made with 🖤 at nFactorial in 2023.</p>

    </div>
  );
}

export default App;
