import React, { useState, useEffect } from 'react'
import { API_URL } from '../Navigation/config'
import Present from '../Components/Presenter'

const GetReviews = () => {
const [review, setReview] = useState([])

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
    })

}

const presentReview = () => {
    return()
}

export default GetReviews