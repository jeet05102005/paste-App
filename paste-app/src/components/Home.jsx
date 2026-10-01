import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { addyourpaste, updateyourpaste } from "../redux/pasteslice";
import "../App.css";
const Home = () => {
  const [Title, setTitle] = useState("");
  const [value, setvalue] = useState("");
  const [SearchParams, setSearchParams] = useSearchParams();
  const pasteId = SearchParams.get("pasteId");
  const dispatch = useDispatch();

  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allpastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setvalue(paste.content);
    }
  }, [pasteId]);

  function createpaste() {
    const paste = {
      title: Title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };
    if (pasteId) {
      //for update
      dispatch(updateyourpaste(paste));
    } else {
      //for create
      dispatch(addyourpaste(paste));
    }
    setTitle("");
    setvalue("");
    setSearchParams({});
  }

  return (
    <div className="flex flex-col  gap-6 mt-5" >
      <div className="gap-6 flex flex-row w-[100%]">
        <div className="w-[100%] ">
          <input
            className="rounded-[2px]  mt-5px h-8 pl-1.5  w-[100%] border border-black"
            type="text"
            placeholder="enter your title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <button
            onClick={createpaste}
            className="bg-blue-500 text-white rounded cursor-pointer h-8 w-30 text-center"
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>
      </div>

      <div className="gap-2px">
        <textarea
          className="w-120 h-100 rounded border-[1.3px] pl-1.5 ml-50"
          placeholder="enter your content"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
