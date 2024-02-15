import { useEffect } from 'react';

const Modal = ({ children, setVisible }) => {
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
      <div className="absolute max-w-[541px] min-w-[320px] h-[752px] p-[30px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white">
        <button onClick={() => setVisible(false)}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
