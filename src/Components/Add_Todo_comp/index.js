import React, { useState } from 'react'
import './styles.css'
import ADD_IMG from './assets/add.png'

export default function Add_new_todo({onChangeText, text, AddToDo, handleEnter}) {

    const [vis, setVis] = useState('hidden');

    function handlePlus(){
        setVis((vis ==='hidden' ? 'visible' : 'hidden'));
    }

  return (
    <div className='main'>
        <div className='window' style={{visibility: vis}}>
            <div>
                <p style={{fontWeight: '600', padding: 0, margin: 0, marginTop: '25px', marginLeft: '15px'}}>Add New To Do</p>
            </div>
            <div>
                <input onKeyDown={handleEnter} onChange={onChangeText} value={text} className='text_input' placeholder='Your Text'></input>
            </div>
            <div>
                <button onClick={AddToDo} className='add'>Add</button>
            </div>
        </div>
        <button onClick={handlePlus} className='finish_add'>
            <img alt='add' src={ADD_IMG}></img>
        </button>
    </div>
  )
}
