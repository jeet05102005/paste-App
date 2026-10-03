import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefrompaste, updateyourpaste } from "../redux/pasteslice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

  async function handleshare(pasteId) {
    const shareUrl = `${window.location.origin}/Viewpaste/${pasteId}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "My Paste",
          text: "Check out this paste",
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Paste link copied successfully");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        toast.error("Unable to share paste");
      }
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] w-full px-4 sm:px-6 lg:px-10 py-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Search Box */}
        <div className="relative w-full mb-8">
          <input
            className="w-full h-12 rounded-xl px-5 bg-slate-900 border border-slate-700 text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
              shadow-lg
            "
            type="search"
            placeholder="Search your pastes..."
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </div>

        {/* Paste List */}
        <div className="flex flex-col gap-6">
          {filteredData.length > 0 &&
            filteredData.map((paste) => {
              function formatDate(dateString) {
                return new Date(dateString).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }
              return (
                <div
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-700
                    bg-slate-900
                    p-5
                    shadow-xl
                    transition-all
                    duration-300
                    hover:border-slate-600
                    hover:shadow-2xl
                  "
                  key={paste?._id}
                >
                  {/* Title */}
                  <div
                    className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                    mb-3
                    break-words
                  "
                  >
                    {paste.title}
                  </div>

                  {/* Content */}
                  <div
                    className="
                    text-slate-300
                    bg-slate-950
                    border
                    border-slate-800
                    rounded-xl
                    p-4
                    min-h-24
                    max-h-48
                    overflow-auto
                    break-words
                    whitespace-pre-wrap
                    font-mono
                    text-sm
                    sm:text-base
                  "
                  >
                    {paste.content}
                  </div>

                  {/* Buttons */}
                  <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    mt-5
                    items-center
                  "
                  >
                    {/* Edit */}
                    <button
                      className="
                        px-5
                        py-2.5
                        rounded-xl
                        border
                        border-blue-500/40
                        bg-blue-500/10
                        text-blue-400
                        font-medium
                        hover:bg-blue-600
                        hover:text-white
                        transition-all
                        duration-200
                        cursor-pointer
                      "
                    >
                      <a href={`/?pasteId=${paste?._id}`}>
                        Edit
                      </a>
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => {
                        handledelete(paste?._id);
                      }}
                      className="
                        px-5
                        py-2.5
                        rounded-xl
                        border
                        border-red-500/40
                        bg-red-500/10
                        text-red-400
                        font-medium
                        hover:bg-red-600
                        hover:text-white
                        transition-all
                        duration-200
                        cursor-pointer
                      "
                    >
                      Delete
                    </button>

                    {/* Share */}
                    <button
                      className="
                        px-5
                        py-2.5
                        rounded-xl
                        border
                        border-purple-500/40
                        bg-purple-500/10
                        text-purple-400
                        font-medium
                        hover:bg-purple-600
                        hover:text-white
                        transition-all
                        duration-200
                        cursor-pointer
                      "
                      onClick={() => {
                        handleshare(paste?._id);
                      }}
                    >
                      Share
                    </button>

                    {/* Copy */}
                    <button
                      className="
                        px-5
                        py-2.5
                        rounded-xl
                        border
                        border-green-500/40
                        bg-green-500/10
                        text-green-400
                        font-medium
                        hover:bg-green-600
                        hover:text-white
                        transition-all
                        duration-200
                        cursor-pointer
                      "
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("content copy successfully");
                      }}
                    >
                      Copy
                    </button>

                    {/* View */}
                    <button
                      className=" px-5
    py-2.5
    rounded-xl
    border
    border-yellow-500/40
    bg-yellow-500/10
    text-yellow-400
    font-medium
    hover:bg-yellow-600
    hover:text-white
    transition-all
    duration-200
    cursor-pointer
  "

                    >
                      <a href={`/Viewpaste/${paste._id}`}>View</a>
                    </button>
                  </div>

                  {/* Date */}
                  <div
                    className="
                    mt-5
                    pt-4
                    border-t
                    border-slate-800
                    text-xs
                    sm:text-sm
                    text-slate-500
                  "
                  >
                    Created: {formatDate(paste.createAt)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Paste;
