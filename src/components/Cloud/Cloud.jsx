import React from 'react'

function Cloud() {
  return (
    <div className="row">
      <div className="col-lg-7 col-xl-8 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-baseline mb-2">
              <h6 className="card-title mb-0">Monthly sales</h6>
              <div className="dropdown mb-2">
                <button className="btn p-0" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm mr-2"></i> <span className="">View</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm mr-2"></i> <span className="">Edit</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm mr-2"></i> <span className="">Delete</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm mr-2"></i> <span className="">Print</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm mr-2"></i> <span className="">Download</span></a>
                </div>
              </div>
            </div>
            <p className="text-muted mb-4">Sales are activities related to selling or the number of goods or services sold in a given time period.</p>
            <div className="monthly-sales-chart-wrapper">
              <canvas id="monthly-sales-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-xl-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-baseline mb-2">
              <h6 className="card-title mb-0">Cloud storage</h6>
              <div className="dropdown mb-2">
                <button className="btn p-0" type="button" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" className="icon-sm mr-2"></i> <span className="">View</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" className="icon-sm mr-2"></i> <span className="">Edit</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="trash" className="icon-sm mr-2"></i> <span className="">Delete</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="printer" className="icon-sm mr-2"></i> <span className="">Print</span></a>
                  <a className="dropdown-item d-flex align-items-center" href="#"><i data-feather="download" className="icon-sm mr-2"></i> <span className="">Download</span></a>
                </div>
              </div>
            </div>
            <div id="progressbar1" className="mx-auto"></div>
            <div className="row mt-4 mb-3">
              <div className="col-6 d-flex justify-content-end">
                <div>
                  <label className="d-flex align-items-center justify-content-end tx-10 text-uppercase font-weight-medium">Total storage <span className="p-1 ml-1 rounded-circle bg-primary-muted"></span></label>
                  <h5 className="font-weight-bold mb-0 text-right">8TB</h5>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label className="d-flex align-items-center tx-10 text-uppercase font-weight-medium"><span className="p-1 mr-1 rounded-circle bg-primary"></span> Used storage</label>
                  <h5 className="font-weight-bold mb-0">6TB</h5>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-block">Upgrade storage</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cloud
