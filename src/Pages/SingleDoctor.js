import React, { useState, useEffect } from 'react'
import { API_URL } from '../Navigation/config'
import Present from '../Components/Doctor-Presenter'


// render doctors name to the top of the page
const DoctorPage = (props) => {
    const [doctors, setDoctors] = useState([])

    const API_ENDPOINT = props.history.location.pathname

    const getSingleDoctor = async (props) => {
        await fetch(`${API_URL + API_ENDPOINT}`)
        .then(response => response.json())
        .then(data =>
            data.map(element => (
            <Present
                doctors={element}
                key = {element._id}
                 /* refresh={this.getRead} */
            />
            ))
        )
        .then(components => setDoctors(components))
        .catch(err => console.log(err));
    };

    useEffect(() => {
        getSingleDoctor()
    })
console.log(doctors.hospitalName)
    return (
        <div className="container d-flex flex-column">
            <h1>Doctor Info</h1>
            <h2 className="home-review-intro d-flex flex-column align-items-center mt-4">{doctors.doctorName}</h2>
            {doctors}
            <p id="Dr. Hiyawatha">{doctors.doctorName}</p>
        </div>
    )
}

export default DoctorPage