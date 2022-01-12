import style from "./Modal.module.css";

export const Modal = (props) => {
  const { title, content, actions } = props;

  const modalPositionStyle = {
    position: "fixed",
    top: "100px",
    right: "3rem",
  };

  return (
    <div className={style.modal_wrapper} style={modalPositionStyle}>
      <div className={style.title_wrapper}>{title}</div>
      <div className={style.content_wrapper}>{content}</div>
      <div className={style.actions_wrapper}>{actions}</div>
    </div>
  );
};
