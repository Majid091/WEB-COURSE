import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import './Home.css'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=> state.paste.pastes);

  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p)=> p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content)
    }
  })
  
  function handleClick(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now.toString(36),
      createdAt:new Date().toISOString(),
    }
    


    if(pasteId){
      dispatch(updateToPastes(paste));
    }
    else{
      dispatch(addToPastes(paste));
    }
    
    setTitle('');
    setValue('');
    setSearchParams({});

  }
  
  
  
  return (
    <div>

      <input
      type="text"
      placeholder='enter title here'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />


      <button onClick={handleClick}>
        {
          pasteId ? "Update My Paste": "Create a Paste"
        }
      </button>
      <div className='textArea'>
        <textarea
        placeholder='enter your content here'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        ></textarea>
      </div>
    </div>
  )
}

export default Home
