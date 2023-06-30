import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ toggleModal, largeImageURL, value }) => {
  const onEscape = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [onEscape]);
  // componentDidMount() {
  //   window.addEventListener('keydown', onEscape);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', onEscape);
  // }

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
