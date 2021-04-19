import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../ProcessPayment/PaymentForm';
import PaymentSplitCard from './PaymentSplitForm';

const stripePromise = loadStripe('pk_test_51IhBXpFUbUyb7QjKZ5VdrQboOvyINjKAblIMIbIzpNKcWjDztaOpuYGHUiawzQpebuNlEtDVzKF1BOCw9pecMIzi00vTGboIyl');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            {/* <PaymentForm></PaymentForm> */}
            <PaymentSplitCard></PaymentSplitCard>
        </Elements>
    );
};
export default ProcessPayment;