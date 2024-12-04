import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="bg-transparent text-white p-8 rounded-lg w-full max-w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          &times;
        </button>
        <div className="text-white">{content}</div>
      </div>
    </div>
  );
};

export default Popup;
