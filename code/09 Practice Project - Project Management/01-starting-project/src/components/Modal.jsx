import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  // 이 컴포넌트 함수에서 외부에서 호출할 수 있는 함수를 노출하려면 useImperativeHandle 사용
  useImperativeHandle(ref, () => {
    // 이 함수는 외부 컴포넌트에 노출하고자 하는 프로퍼티나 함수가 포함된 객체를 반환함
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
