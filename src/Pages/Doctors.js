import React, { useState, useEffect } from 'react'
import { API_URL } from '../Navigation/config'
import Present from '../Components/Doctor-Presenter'

const DoctorPage = (props) => {
    const [doctors, setDoctors] = useState([])
    // const doctorName = 'Dr. Yes'

    const getDoctor = async (props) => {
        await fetch(`${API_URL}/doctor`)
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
        getDoctor()
        // getSingleDoctor()
    })

    return (
        <div className="container d-flex flex-column">
            <h1>Home</h1>
            <p className="home-review-intro d-flex flex-column align-items-center mt-4">Below are Doctors submitted by patients</p>
            {doctors}
        </div>
    )
}

export default DoctorPage