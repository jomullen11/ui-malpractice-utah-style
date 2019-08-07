import React, { useState, useEffect } from 'react'
import { useInput } from './hooks-input'
import { API_URL } from '../Navigation/config'
import FileUpload from './FileUpload'

    

const WriteComment = () => {
    const { value:title, bind:bindTitleInput, reset:resetTitleInput } = useInput('');
    const { value:userName, bind:bindUserNameInput, reset:resetUserNameInput } = useInput('');
    const { value:review, bind:bindReviewInput, reset: resetReviewInput } = useInput('');
    const { value:doctorName, bind:bindDoctorNameInput, reset: resetDoctorNameInput } = useInput('');
    const { value:hospitalName, bind:bindHospitalNameInput, reset: resetHospitalNameInput } = useInput('');
    const { value:dateOfIncident, bind:bindDateOfIncidentInput, reset: resetDateOfIncidentInput } = useInput('');
    const [timestamp, setTimestamp] = useState('');
    let [formId, setId]=useState(1000009)

    

    let _id = 10000000000000000 + `${formId}`
    let doctorId = _id

    let reviewBody = { title, userName, review, dateOfIncident, doctorName, timestamp, doctorId }
    let doctorBody = { doctorName, hospitalName, dateOfIncident, timestamp, _id }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            header: 'Content-Type: application/json',
            body: JSON.stringify(reviewBody)
        }).catch(err => console.log(err))
        .then( await fetch(`${API_URL}/doctor`, {
            method: 'POST',
            heaer: 'Content-Type: application/json',
            body: JSON.stringify(doctorBody)
        }).then(alert('Thank you for your comment'))
        .then(() => setFormId())
        .catch(err => console.log(err)) )
        resetTitleInput()
        resetUserNameInput()
        resetReviewInput()
        resetDoctorNameInput()
        resetHospitalNameInput()
        resetDateOfIncidentInput()
    }

    // setting the new doctor Id after for submit
    const setFormId = () => {
        let newId = ++formId
        
        console.log(newId)
        return(setId(newId))
    }

    const setDate = () => {
        return( setTimestamp(Date(Date.now())) )
    }

    useEffect(() => {
        setDate()
    })
    return(
        <div>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <label htmlFor="review-title" className="display-4">Title:</label>
                <input type="text" id="review-title" className="form-control" name="title" value={title} placeholder="Ex. Doctor left scissors in me after surgery" aria-describedby="title-desc" {...bindTitleInput} required />
                <p id="title-desc">Use a simple title that gives a brief overview of your review</p>
                
                <label htmlFor="user-first-name">First Name:</label>
                <input type="text" id="user-first-name-input" className="form-control" name="user-name" value={userName} placeholder="Ex. Jane" aria-describedby="name-desc" {...bindUserNameInput}/>
                <p id="name-desc" className="form-aria-describedby">Name is not required</p>

                <label htmlFor="form-comment-input">Review:</label>
                <textarea type="text" id="form-comment-input" className="form-control" name="review" value={review} placeholder="Insert Review" aria-describedby="review-desc" {...bindReviewInput} required />
                <p id="comment-desc" className="form-aria-describedby">Please insert comment</p>

                {/* Dr Name, Hospital/Clinic Name, Date of Incident, */}
                <fieldset id="dr-info-fieldset" className="border p-2 d-flex flex-column">
                <legend htmlFor="dr-info-fieldset" className="dr-info-legend">Doctor's Info</legend>

                <label htmlFor="dr-name-input">Doctors Name:</label>
                <input type="text" id="dr-name-input" className="form-control" name="doctor-name" value={doctorName} placeholder="Dr. John Doe" aria-describedby="doctors-name-desc" {...bindDoctorNameInput} /* required */ />
                <p id="doctors-name-desc">Please insert doctors first and last name</p>

                <label htmlFor="hospital-name-input">Hospital/Clinic Name:</label>
                <input type="text" id="hospital-name-input" className="form-control" name="hospital-name" value={hospitalName} placeholder="Name of Hospital/Clinic" aria-describedby="hospital-name-desc" {...bindHospitalNameInput} />
                <p id="hospital-name-desc">Hospital name is not required</p>

                <label htmlFor="date-of-incident-input">Date of Incident</label>
                <input type="date" id="date-of-incident-input" className="form-control" name="date-of-incident" value={dateOfIncident} aria-describedby="date-of-incident-desc" {...bindDateOfIncidentInput}/>
                <p id="date-of-incident-desc">Please insert date of incident</p>

                </fieldset> <br/>

                
                
                <input type="submit" className="btn btn-primary mt-3 btn-lg" value="Submit"/>
            </form>

            <FileUpload />

        </div>
    )
}

export default WriteComment