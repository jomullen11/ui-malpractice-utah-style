import React, { Component } from 'react'
// import { API_URL } from '../Navigation/config'

export default class DoctorPresenter extends Component {
    render() {
        // const doctorName = 'Dr. Yes'
        const doctor = this.props.doctors
        return(
            <>
                <section className="review-display mt-3 d-flex flex-column" id={doctor.doctorName}>
                    <h2 className="presenter-legend">{doctor.doctorName}</h2>
                    <ul>
                        <h3 className="review-body">{doctor.hospitalName}</h3>
                        {/* <h4 className="review-userName"> - {review.userName}</h4> */}
                        {/* <a className="doctor-link d-flex justify-content-end mr-2" href={ `/doctors/#${doctorName}` }>See Doctor</a> */}
                    </ul>
                </section>
            </>
        )
    }
}