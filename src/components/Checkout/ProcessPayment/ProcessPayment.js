import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('sk_test_51IhBXpFUbUyb7QjKw2GoiWL2uZH4fDOBm0tCyCa382BdlFdWYPuKjo7O6rz3mMfefMN12BNMlfr5bjZXiB2w6qaQ00x098ByZp');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment} ></PaymentForm>
        </Elements>
    );
};

export default ProcessPayment;