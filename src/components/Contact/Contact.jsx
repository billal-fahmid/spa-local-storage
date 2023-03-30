import React from 'react';

const Contact = () => {
    return (
        <div className='d-flex'>
            <div className='w-50 text-start mt-4'>
                <h1 className='text-center'>Contacts With Us</h1>
                <div class="mb-3 w-75">
                    <label for="formGroupExampleInput" className="ps-3 mb-3">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" />
                </div>
                <div class="mb-3 w-75">
                    <label for="formGroupExampleInput2" className="ps-3 mb-3">Email</label>
                    <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Your Email" />
                </div>
                <div class="mb-3 w-75">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="w-75 mt-4 mx-auto">
                    <button class="w-75 btn btn-primary" type="button">Sent Mail</button>
                   
                </div>
            </div>
            <div className='w-50'>
                <img className='w-100' src="https://i.ibb.co/M1YLj7g/login.png" alt="no image found" />
            </div>
        </div>
    );
};

export default Contact;