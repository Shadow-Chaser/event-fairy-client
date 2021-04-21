import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [serviceData, setServiceData] = useState({})
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newData = { ...serviceData };
        newData[e.target.name] = e.target.value;
        setServiceData(newData);
    }
    // console.log(serviceData);

    const handleSubmit = e => {
        const formData = new FormData();
        // console.log(serviceData);
        formData.append('description', serviceData.description);
        formData.append('price', serviceData.price);
        formData.append('file', file);
        formData.append('title', serviceData.title)

        fetch('https://aqueous-lake-79514.herokuapp.com/addService', {
            method: 'POST',
            body: formData

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Service added successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })



        e.preventDefault()
    }


    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10">
            <div className='d-flex justify-content-center'>
            <Form className='w-75 mt-5' onSubmit={handleSubmit}>
                        <h1 className="mb-4 text-info">Add a new Service</h1>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onBlur={handleBlur} type="text" name='title' placeholder="Enter title" />
                </Form.Group>



                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onBlur={handleBlur} as="textarea" type="text" name='description' placeholder="Enter your message" />
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onBlur={handleBlur} type="number" name='price' placeholder="Enter price in dollar" />
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
            </div>
        </div>
    );
};

export default AddService;