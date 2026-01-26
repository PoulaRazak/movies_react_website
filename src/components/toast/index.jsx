function Toast({text,state}) {
  return (
    <>
      <div className="toast toast-button toast-end z-50">
        <div className={`alert alert-success`}>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}
export default Toast;
