import React from 'react'

export const OptionsForumQuestions = () => {
    return (
        <div className="accordion w-50 m-0-auto mt-5 pt-5" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <div className="mb-0 d-flex justify-content-between line__Bottom">
            <p>What is bookmark? </p>
            <i className="fas fa-chevron-down collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></i>
            </div>
          </div>
      
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
          <div className="mb-0 d-flex justify-content-between line__Bottom">
            <p>How can I request a new browser? </p>
            <i className="fas fa-chevron-down collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></i>
            </div>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              Some placeholder content for the second accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
          <div className="mb-0 d-flex justify-content-between line__Bottom">
            <p>Is there a mobile app? </p>
            <i className="fas fa-chevron-down collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"></i>
            </div>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFour">
          <div className="mb-0 d-flex justify-content-between line__Bottom">
            <p>What about other Chromium browsers? </p>
            <i className="fas fa-chevron-down collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"></i>
            </div>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div className="card-body">
              And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
      </div>
    )
}
