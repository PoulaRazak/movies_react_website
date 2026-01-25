function Toast({text,state}) {
  return (
    <>
      <div className="toast toast-top toast-end z-50">
        <div className={`alert alert-${state}`}>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}
export default Toast;
