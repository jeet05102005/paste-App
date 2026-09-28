import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefrompaste, updateyourpaste } from '../redux/pasteslice';

const Paste = () => {
  const pastes = useSelector((state) =>
    state.paste.pastes);
  const [searchTerm, setsearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handledelete(pasteId){
    dispatch(removefrompaste(pasteId));
  }
  function handleedit(pasteId){
  dispatch(updateyourpaste(pasteId))
  }
  function handleshare(){

  }
  function handlecopy(){

  }
  function handleview(){

  }

  return (
    <div className='flex flex-center flex-col'>
      <input className='mt-5 rounded-[2px] p-2 w-[600px] border-[2px]'
        type='search'
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length > 0 && filteredData.map(
            (paste)=>{
              return(
                <div className='border-[2px]' key={paste.title}>
                <div >
                  {paste.title}
                   </div>
                  <div>
                    {paste.content}
                    </div >
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button onClick={()=>{
                      handleedit(paste?._id)
                    }}>
                      edit
                    </button>
                    <button onClick={()=>{
                      handledelete(paste?._id)
                    }}>
                      delete
                    </button>
                    <button onClick={handleshare}>
                      share
                    </button>
                    <button onClick={handlecopy}>
                      copy
                    </button>
                    <button onChange={handleview}>
                      view
                    </button>
                    <div>
                      {paste.createAt}
                    </div>
                     </div>
                   </div>
              )
            }
          )
        }
        
      </div>
    </div>
  )
}

export default Paste