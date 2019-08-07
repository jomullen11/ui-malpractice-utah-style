import React, { useState, useEffect } from 'react'
import Case0 from '../Components/case0'
import { API_URL } from '../Navigation/config'
import Present from '../Components/Comment-Presenter'
import DoctorPresent from '../Components/Doctor-Presenter'

const HomePage = () => {
    const [review, setReview] = useState([])
    const [doctors, setDoctors] = useState([])
    // const doctorName = 'Dr. Yes'

    const getDoctorRead = async (props) => {
        await fetch(`${API_URL}/doctor`)
        .then(response => response.json())
        .then(data =>
            data.map(element => (
            <DoctorPresent
                doctors={element}
                key = {element._id}
                 /* refresh={this.getRead} */
            />
            ))
        )
        .then(components => setDoctors(components))
        .catch(err => console.log(err));
    };

    const getRead = async (props) => {
        await fetch(`${API_URL}/reviews`)
        .then(response => response.json())
        .then(data =>
            data.map(element => (
            <Present
                review={element}
                key = {element._id}
                 /* refresh={this.getRead} */
            />
            ))
        )
        .then(components => setReview(components))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        getRead()
        getDoctorRead()
    })

    return (
        <div className="container d-flex flex-column">
            <h1>Home</h1>
            {<Case0 />}
            <p className="home-review-intro d-flex flex-column align-items-center mt-4">Below are reviews from actual patients, these are their stories</p>
            {review}
            {doctors}
        </div>
    )
}

export default HomePage