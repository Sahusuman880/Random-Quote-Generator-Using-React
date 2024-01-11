function Quote(props) {
  return (
    <>
      <div className="quote-container">
        <div class="card">
          <div class="card-header">Random Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{props.quote.quote}</p>
              <footer class="blockquote-footer">
                by <cite title="Source Title">{props.quote.author}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            class="btn btn-primary "
            type="button"
            onClick={props.onButtonClick}
            style={{ margin: "15px 0px" }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </>
  );
}
export default Quote;
