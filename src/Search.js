import React from "react";

export function Search(props) {

  return (
    <main className="container py-3">
          {/* <!-- This is the section for the top half of the webpage --> */}
      <section className="row">
          {/* This is the box for search bar and button */}
          <div className="col-lg-6 mb-3">
            <form className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* This is the box for body part checkbox group */}
          <div className="col-lg-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Body part</h5>
                <div className="row">
                  {/* This is the left column of the body part group */}
                  <div className="col-sm-6 mb-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chest"
                      />
                      <label className="custom-control-label" htmlFor="chest">
                        Chest
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="back"
                      />
                      <label className="custom-control-label" htmlFor="back">
                        Back
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shoulder"
                      />
                      <label className="custom-control-label" htmlFor="shoulder">
                        Shoulder
                      </label>
                    </div>
                  </div>
                  {/* This is the right column of the body part group */}
                  <div className="col-sm-6 mb-2">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="arms"
                      />
                      <label className="custom-control-label" htmlFor="arms">
                        Arms
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="legs"
                      />
                      <label className="custom-control-label" htmlFor="legs">
                        Legs
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>
</main>
  )
}