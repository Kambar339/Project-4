import React, { useState } from 'react'
import './styles.css'
import TRASH_IMG from './assets/trash.png'
import MOVEBACK_IMG from './assets/back.png'
import MORE_IMG from './assets/more.png'




export default function ToDo({id, active, text, done, Move_trash, Delete, Back, check}) {

    const [options_display, setSpecsDisplay] = useState('none');
    const [bg, setBg] = useState();
    const [chosenBg, setChosenBg] = useState('none');
    

    let first_option = (active === 'active' || active === 'done') ? 'flex' : 'none';
    let second_option = (active === 'trash') ? 'flex' : 'none';

    function handleOnClick(){
        (options_display === 'none') ? setSpecsDisplay('flex') : setSpecsDisplay('none');
        (options_display === 'none') ? setChosenBg('#E4E6E7') : setChosenBg('transparent')
    }

  return (
    <div className='Main'>
        <div className='input'>
            <button onClick={handleOnClick} className='ToDoButton'>
                <img alt='more' src={MORE_IMG}></img>
            </button>

            <div className='check' 
                style = 
                {{  backgroundColor: chosenBg, 
                    textDecorationLine: (done) ? 'line-through' : 'none'
                }}>
                <input onClick={() => check(id)} type='checkbox' checked={(done) ? true : false} id='inp'></input>
                {text}
            </div>
        </div>

        <div className='Options' style={{display: options_display}}>
            <div className='Options-First' style={{display: first_option}}>
                <button onMouseEnter={() => setBg(0)} onMouseLeave={() => setBg(-1)} style={{backgroundColor: (bg === 0) ? 'rgba(8, 30, 52, 0.2)' : 'transparent'}} onClick={() => {Move_trash(id); setSpecsDisplay('none')}} className='Trash Options-Button'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Move to Trash
                </button>
            </div>
            <div className='Options-Second' style={{display: second_option}}>
                <button onMouseEnter={() => setBg(1)} onMouseLeave={() => setBg(-1)} style={{backgroundColor: (bg === 1) ? 'rgba(8, 30, 52, 0.2)' : 'transparent'}} onClick={() => {Delete(id); setSpecsDisplay('none')}} className='Delete Options-Button'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Delete Forever
                </button>
                <button onMouseEnter={() => setBg(2)} onMouseLeave={() => setBg(-1)} style={{backgroundColor: (bg === 2) ? 'rgba(8, 30, 52, 0.2)' : 'transparent'}} onClick={() => {Back(id); setSpecsDisplay('none')}} className='Back Options-Button'>
                    <img alt = 'moveback' src={MOVEBACK_IMG}></img>
                    Move Back
                </button>
            </div>
        </div>
    </div>
  )
}
