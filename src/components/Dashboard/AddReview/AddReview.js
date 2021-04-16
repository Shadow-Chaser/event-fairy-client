import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const AddReview = () => {
    const [reviewData, setReviewData] = useState({})
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newData = { ...reviewData };
        newData[e.target.name] = e.target.value;
        setReviewData(newData);
    }
    // console.log(reviewData);

    const handleSubmit = e => {
        const formData = new FormData();
        // console.log(reviewData);
        formData.append('review', reviewData.review);
        formData.append('address', reviewData.address);
        formData.append('file', file);
        formData.append('name', reviewData.name)

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Review added successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })



        e.preventDefault()
    }

    return (
        <div className='d-flex justify-content-center'>
            <Form className='w-75 mt-5' onSubmit={handleSubmit}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={handleBlur} type="text" name='address' placeholder="Enter address" />
                </Form.Group>

                <Form.Group controlId="review">
                    <Form.Label>Review</Form.Label>
                    <Form.Control onBlur={handleBlur} as="textarea" type="text" name='review' placeholder="Enter your message" />
                </Form.Group>


                <Form.Group controlId="file">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onBlur={handleFileChange} type="file" name='' placeholder="Upload image" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button className='' variant="primary" type="submit">Submit</Button>
                </div>

            </Form>
        </div>
    );
};

export default AddReview;