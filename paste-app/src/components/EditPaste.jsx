import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateyourpaste } from '../redux/pasteSlice';

const EditPaste = () => {

  const { id } = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((item) => item._id === id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(paste?.title || '');
  const [content, setContent] = useState(paste?.content || '');

  function handleUpdate() {

    const updatedPaste = {
      ...paste,
      title: title,
      content: content
    };

    dispatch(updateyourpaste(updatedPaste));

    navigate('/pastes');
  }

  return (
    <div className="flex flex-col items-center gap-5 mt-10">

      <input
        className="border-2 p-2 w-[600px]"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <textarea
        className="border-2 p-2 w-[600px] h-[300px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content"
      />

      <button
        onClick={handleUpdate}
        className="border-2 px-5 py-2 cursor-pointer"
      >
        Update Paste
      </button>

    </div>
  );
};

export default EditPaste;