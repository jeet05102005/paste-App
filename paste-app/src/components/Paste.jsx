import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefrompaste, updateyourpaste } from "../redux/pasteslice";
import { useNavigate } from "react-router-dom";

const Paste = () => {
  const navigate = useNavigate();
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setsearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handledelete(pasteId) {
    dispatch(removefrompaste(pasteId));
  }
  function handleedit(pasteId) {
    navigate(`/edit/${pasteId}`);
  }
  function handleshare() {}
  function handlecopy() {}
  function handleview() {}

  return (
    <div className="flex flex-center flex-col shadow-2xl p-2">
      <input
        className="mt-5 rounded-[2px] p-2 w-full border-[2px]"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5 rounded-2xl">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border-1 rounded-xl p-2" key={paste.title}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button className = "border-1 border-slate-300 px-5 py-2 cursor-pointer rounded-2xl"
                    onClick={() => {
                      handleedit(paste?._id);
                     
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      handledelete(paste?._id);
                      
                    }}
                    className = "border-1 border-slate-300 px-5 py-2 cursor-pointer shadow-2xs rounded-2xl "
                  >
                    delete
                  </button>
                  <button
                    className="border-1 border-slate-300 px-5 py-2 cursor-pointer rounded-2xl"
                    onClick={handleshare}
                  >
                    share
                  </button>
                  <button
                    className="border-1 border-slate-300 px-5 py-2 cursor-pointer rounded-2xl"
                    onClick={handlecopy}
                  >
                    copy
                  </button>
                  <button
                    className="border-1 border-slate-300 px-5 py-2 cursor-pointer rounded-2xl"
                    onChange={handleview}
                  >
                    view
                  </button>
                  <div>{paste.createAt}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
