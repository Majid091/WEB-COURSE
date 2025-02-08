import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import './Home.css'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0];
  console.log("final paste :", paste)
  

  return (
    <div>

      <input
      type="text"
      placeholder='enter title here'
      value={paste.title}
      disabled
      onChange={(e)=> setTitle(e.target.value)}
      />


      {/* <button onClick={handleClick}>
        {
          pasteId ? "Update My Paste": "Create a Paste"
        }
      </button> */}
      <div className='textArea'>
        <textarea
        placeholder='enter your content here'
        value={paste.content}
        disabled
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste
