import React, { useState } from 'react'
import noteDict from './assets';

export const GuessBox = () => {

  const [noteBtnDisplay, setNoteBtnDisplay] = useState('play');

  const getRandomNoteKey = (selection) => {
    const key_array = Object.keys(noteDict)
    const selection_filter = (selection) => {
      if(selection === 'white'){return key_array.filter(key => !key.includes('b'))}
      else if(selection === 'black'){return key_array.filter(key => key.includes('b'))}
      else if(selection === 'all'){return key_array}
    }
    return selection_filter(selection)[Math.floor(Math.random()*selection_filter(selection).length)]
  }

  const noteRange = ['all', 'white', 'black'];
  const progressionBtn = ['✔', '➜'];
  const [rangeName, setRange] = useState(noteRange[0]);
  const [progressionBtnName, setProgressionBtn] = useState(progressionBtn[0]);
  const [noteKey, setNoteKey] = useState(()=>getRandomNoteKey('all'));
  
  const playNote = () => {
    new Audio(noteDict[noteKey]).play()
  }

  const array_cycler = (array, arrayItem) => {
   return array.indexOf(arrayItem) === array.length-1 ? array[0] : array[array.indexOf(arrayItem)+1]
  }

  return (
    <div>
      <button className='button' onClick={playNote}>{noteBtnDisplay}</button>
      <button onClick={()=>{if(progressionBtnName === '✔'){
        setNoteBtnDisplay(noteKey);
        setProgressionBtn('➜')
        }
        else{
          setNoteKey(getRandomNoteKey(rangeName));
          setNoteBtnDisplay('play');
          setProgressionBtn('✔')
        }}}>{progressionBtnName}</button>
      <div>
        <button className='button' onClick={()=>{setRange(array_cycler(noteRange,rangeName));
          setNoteKey(getRandomNoteKey(rangeName));
          setNoteBtnDisplay('play');
          setProgressionBtn('✔')}}>{rangeName} keys</button>
      </div>
    </div>
  )
}