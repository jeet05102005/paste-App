import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Viewpaste = () => {

  const { id } = useParams();

  const allpastes = useSelector(
    (state) => state.paste.pastes
  );

  const paste = allpastes.filter(
    (p) => p._id === id
  )[0];

  if (!paste) {
    return (
      <div className="
        min-h-[calc(100vh-80px)]
        flex
        items-center
        justify-center
        text-white
        text-xl
      ">
        Paste not found
      </div>
    );
  }

  return (
    <div className=" min-h-[calc(100vh-80px)] w-full flex justify-center px-4 sm:px-6 lg:px-10 py-8">

      <div className="
        w-full
        max-w-6xl
        flex
        flex-col
        gap-6
      ">

        {/* Title */}
        <input
          className="
            w-full
            h-12
            px-4
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            text-white
            outline-none
            cursor-not-allowed
          "
          type="text"
          value={paste.title}
          disabled
          readOnly
        />

        {/* Content */}
        <textarea
          className="
            w-full
            min-h-[500px]
            resize-y
            rounded-2xl
            bg-slate-900
            border
            border-slate-700
            p-5
            text-white
            outline-none
            leading-7
            font-mono
            shadow-xl
            cursor-not-allowed
          "
          value={paste.content}
          disabled
          readOnly
        />

      </div>

    </div>
  )
}

export default Viewpaste