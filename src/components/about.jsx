import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div> */}
            <div className="col-xs-12 col-md-12 text-center">
              <div className="about-text">
                <h2>Our Top Courses</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
