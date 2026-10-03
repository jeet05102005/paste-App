
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { addyourpaste, updateyourpaste } from "../redux/pasteSlice";
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
    <div className="min-h-[calc(100vh-80px)] w-full flex justify-center px-4 sm:px-6 lg:px-10 py-8">
      
      <div className="w-full max-w-6xl flex flex-col gap-6">

        {/* Title + Button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">

          <div className="flex-1">
            <input
              className="
                w-full h-12
                px-4
                rounded-xl
                bg-slate-900
                border border-slate-700
                text-white
                placeholder-slate-400
                outline-none
                transition
                duration-200
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
              type="text"
              placeholder="Enter your title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <button
              onClick={createpaste}
              className="
                w-full sm:w-40
                h-12
                px-5
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                active:scale-95
                text-white
                font-semibold
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-200
                cursor-pointer
              "
            >
              {pasteId ? "Update Paste" : "Create Paste"}
            </button>
          </div>

        </div>

        {/* Content Area */}
        <div className="w-full">

          <textarea
            className="
              w-full
              min-h-[500px]
              resize-y
              rounded-2xl
              bg-slate-900
              border border-slate-700
              p-5
              text-white
              placeholder-slate-400
              outline-none
              leading-7
              font-mono
              shadow-xl
              transition
              duration-200
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
            "
            placeholder="Enter your content..."
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          ></textarea>

        </div>

      </div>
    </div>
  );
};

export default Home;

