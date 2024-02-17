import { useEffect } from 'react';
import Close from '../Close/Close';

const Modal = ({ children, setVisible }) => {
  // document.body.style.overflow = 'hidden';
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setVisible]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setVisible(false);
    }
  };
  return (
    <div
      onClick={handleBackdropClick}
      className="fixed w-full h-full z-30 bg-[#00000080] top-0 left-0"
    >
      <div className="absolute max-w-[541px] min-w-[330px] p-[30px] pt-[36px] max-h-[90%] h-auto overflow-auto  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-[10px] right-[10px] ml-auto"
        >
          <Close />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
