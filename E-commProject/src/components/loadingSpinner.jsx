const LoadingSpinner = () => {
  return (
    <dvi className="d-flex justify-content-center spinner ">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem", color: "#212529" }}
      >
        <span className="visually-hidden">Loading....</span>
      </div>
    </dvi>
  );
};
export default LoadingSpinner;
