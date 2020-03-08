import React from 'react';
import { Fragment } from 'react';
import './componentitem.css';

const UserItem = () => {
  return (
    <Fragment>
        <div className="col-12 col-sm-6 col-md-3 px-0">
            <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid"></img>
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
            <label className="name lead">Mike Anamendolla</label>
            <br></br>
            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
            <span className="text-muted">5842 Hillcrest Rd</span>
            <br></br>
            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
            <span className="text-muted small">(870) 288-4149</span>
            <br></br>
            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
            <span className="text-muted small text-truncate">mike.ana@example.com</span>
        </div>
    </Fragment>
  )
}

export default UserItem;