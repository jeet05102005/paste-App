import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router';
import { addyourpaste, updateyourpaste } from '../redux/pasteslice';

const Viewpaste = () => {
const {id}=useParams();
const allpastes = useSelector((state)=>state.paste.pastes);
const paste = allpastes.filter((p)=>p._id===id)[0];

  return (
    <div className='flex flex-col  gap-6 mt-5'>
      <div className='gap-6 flex flex-row'>
        <div>
          <input className='rounded-[2px]  mt-5px h-8 pl-1.5 '
            type="text"
            placeholder='enter your title'
            value={paste.Title}
            disabled
            onChange={(e) => setTitle(e.target.value)}
          /></div>

        <>
          {/* <button onClick={createpaste}
            className="bg-blue-500 text-white rounded cursor-pointer h-8 w-30 text-center"
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>*/}</>
      </div>



      <div className='gap-2px'>
        <textarea className='w-96 h-100 rounded border-[1.3px] pl-1.5'
          placeholder='enter your content'
          value={paste.content}
          disabled
          onChange={(e) => setvalue(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default Viewpaste