import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../ProcessPayment/PaymentForm';

const stripePromise = loadStripe('sk_test_51IhBXpFUbUyb7QjKw2GoiWL2uZH4fDOBm0tCyCa382BdlFdWYPuKjo7O6rz3mMfefMN12BNMlfr5bjZXiB2w6qaQ00x098ByZp');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm></PaymentForm>
        </Elements>
    );
};
export default ProcessPayment;