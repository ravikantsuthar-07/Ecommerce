import React from 'react'

function Adminfooter() {
    return (
        
        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <p className="font-size-sm mb-0">
                <span className="d-none d-sm-inline-block">copyright by binjal farm</span>
              </p>
            </div>
            <div className="col-auto">
              <div className="d-flex justify-content-end">
                <ul className="list-inline list-separator">
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="https://admin.binjalfarm.com/admin/business-settings/store/ecom-setup">Shop Settings</a>
                  </li>

                  <li className="list-inline-item">
                    <a className="list-separator-link" href="https://admin.binjalfarm.com/admin/settings">Profile</a>
                  </li>

                  <li className="list-inline-item">
                    <div className="hs-unfold">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="https://admin.binjalfarm.com/admin" data-hs-unfold-invoker="">
                        <i className="tio-home-outlined"></i>
                      </a>
                    </div>
                  </li>

                  <li className="list-inline-item">
                    <label className="badge badge-success text-capitalize">
                      Software Version 7.4
                    </label>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Adminfooter
