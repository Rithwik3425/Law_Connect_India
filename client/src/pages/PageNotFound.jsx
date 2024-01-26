function PageNotFound() {
  return (
    <div>
      <div className="container-card">
        <div className="err-card d-flex flex-row justify-content-center">
    <div className="error-card d-flex flex-column justify-content-center">
      <h1 className="page-not-found-heading">404.
      <span className="page-not-span"> That's an error.</span></h1>

      <h2 className="page-msg">The requested URL was not found on this server.</h2>
    </div>

    <div className="page-not-found">
    </div>

    </div></div>
    </div>
  );
}

export default PageNotFound;
