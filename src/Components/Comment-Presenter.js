import React, { Component } from 'react'
import { API_URL } from '../Navigation/config'
import Present from './Doctor-Presenter'

export default class CommentPresenter extends Component {
    state = {
        doctor: []
    }
    
    getDoctorRead = async (props) => {
        await fetch(`${API_URL}/doctor`)
        .then(response => response.json())
        .then(data =>
            data.map(element => (
            <Present
                doctors={element._id}
                key = {element._id}
                 /* refresh={this.getRead} */
            />
            ))
        )
        .then(components => this.setState({doctor: components}))
        console.log(this.state.doctor._id)
        .catch(err => console.log(err));
    };

    componentDidMount() {
        this.getDoctorRead()
    }

    render() {
        // const doctorName = 'Dr. Yes'
        // console.log(this.state.doctor)
        const review = this.props.review
        return(
            <div>
                <section className="review-display mt-3 d-flex flex-column" >
                    <h2 className="presenter-legend">{review.title}</h2>
                    <ul>
                        <h3 className="review-body">{review.review}</h3>
                        { review.dateOfIncident.length > 1 ? <h3 className="review-body">Date of Incident: {review.dateOfIncident} </h3> : null }
                        { review.userName > 1 ? <h4 className="review-userName"> - {review.userName}</h4> : null }
                        {/* {this.state.doctor.doctorName} */}
                        <a className="doctor-link d-flex justify-content-end mr-2" href={ `doctor/${review.doctorId}` }>See Doctor</a>
                    </ul>
                </section>
            </div>
        )
    }
}