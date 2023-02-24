import React from "react";

export function Search(props) {

  return (
        <main class="container py-3">
          {/* <!-- This is the section for the top half of the webpage --> */}
          <section class="row">
            {/* <!-- This is the box for search bar and button --> */}
            <div class="col-lg-6 mb-3">
              <form class="input-group">
                <input type="text" class="form-control" placeholder="Search"input/>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">Search</button>
                </div>
              </form>
            </div>
            {/* <!-- This is the box for body part checkbox group --> */}
            <div class="col-lg-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Body part</h5>
                  <div class="row">
                    {/* <!-- This is the left column of the body part group --> */}
                    <div class="col-sm-6 mb-2">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="chest"input/>
                        <label class="custom-control-label" for="chest">Chest</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="back"input/>
                        <label class="custom-control-label" for="back">Back</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="shoulder"input/>
                        <label class="custom-control-label" for="shoulder">Shoulder</label>
                      </div>
                    </div>
                    {/* <!-- This is the right column of the body part group --> */}
                    <div class="col-sm-6 mb-2">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="arms"input/>
                        <label class="custom-control-label" for="arms">Arms</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="legs"input/>
                        <label class="custom-control-label" for="legs">Legs</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* <!-- This is the box for equipment checkbox group --> */}
            <div class="row" id="equipment-section">
              <div class="col-md-6">
                <p>Equipment</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="barbell"input/>
                  <label class="form-check-label" for="barbell">Barbell</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="dumbell" input/>
                  <label class="form-check-label" for="dumbell">Dumbell</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="cable-machine"input/>
                  <label class="form-check-label" for="cable-machine">Cable Machine</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="misc"input/>
                  <label class="form-check-label" for="misc">Misc</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}