import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ toggleModal, largeImageURL, value }) => {
  useEffect(() => {
    const onEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscape);

    return () => window.removeEventListener('keydown', onEscape);
  }, [toggleModal]);

  return (
    <div
      className={css.Overlay}
      onClick={() => {
        toggleModal();
      }}
    >
      <div className={css.Modal}>
        <img src={largeImageURL} alt={value} />
      </div>
    </div>
  );
};
