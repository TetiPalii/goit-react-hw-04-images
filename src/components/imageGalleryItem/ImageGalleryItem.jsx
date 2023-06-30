import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  renderModal,
  toggleModal,
  id,
  webformatURL,
  value,
}) => {
  const onImageClick = () => {
    // console.log(this.props.id);
    renderModal(id);
    toggleModal();
  };

  return (
    <li className={css.ImageGalleryItem} onClick={onImageClick}>
      <img
        className={css.ImageGalleryItem_image}
        src={webformatURL}
        alt={value}
      />
    </li>
  );
};

// export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
//   return (
//     <li className={css.ImageGalleryItem}>
//       <img
//         className={css.ImageGalleryItem_image}
//         src={webformatURL}
//         alt={tags}
//       />
//     </li>
//   );
// };
