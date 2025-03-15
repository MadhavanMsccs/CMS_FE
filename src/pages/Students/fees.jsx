import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q5S1sDGulvCS4dB47DOdrlE7DDMEG1I4QFP2amgIkPm3Feh2y3aTnxOSBJrXCqTCgojeDsdMXOodXNs4oyMnwDk00kNwaKljR');

const Fees = () => {
  const [fees, setFees] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = () => {
    axios.get('http://localhost:4000/api/fees')
      .then(response => setFees(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        alert("Stripe is not loaded. Please try again.");
        return;
    }

    if (!studentId.trim() || !name.trim() || !amount) {
        alert('Please fill in all fields before proceeding.');
        return;
    }

    const amountInCents = Math.round(parseFloat(amount) * 1);
    if (amountInCents <= 0) {
        alert('Please enter a valid amount greater than zero.');
        return;
    }

    if (amountInCents > 99999999) {
        alert('Amount exceeds the maximum limit of $999,999.99');
        return;
    }

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    try {
        // Step 1: Create Payment Method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.error("❌ Error creating payment method:", error);
            alert("Payment succesful: " + error.message);
            return;
        }

        const paymentMethodId = paymentMethod.id;

        const paymentData = {
          studentId,
          name,
          amount: Number(amountInCents),  // ✅ Ensure amount is sent as a number
          paymentMethodId,
      };

        console.log("🔹 Sending Payment Data:", paymentData); // ✅ Debugging Log

        const response = await fetch("http://localhost:4000/api/pay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
        });

        const data = await response.json();
        console.log("🔹 Payment Response:", data); // ✅ Debugging Log

        if (!data.success) {
            throw new Error(data.message || "Payment failed");
        }

        alert(`${name}  your's Fee's successfully paided! ✅`);
        fetchFees(); // Refresh fee records after successful payment
    } catch (error) {
        console.error("❌ Payment Error:", error);
        alert("Payment successful: " + (error.message || "An error occurred"));
    } finally {
        setLoading(false);
    }
};


  return (
    <div>
      <form id="fees" onSubmit={handlePayment}>
        <h2 id="title">College Fee Payment</h2>
        <input
          type="text"
          placeholder="Student ID"
          id="std_id"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          id="std_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          id="fees_amt"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />
        <CardElement />
        <button id="fees_pay" type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay Fees'}
        </button>
      </form>
    </div>
  );
};

const AppWrapper = () => (
  <Elements stripe={stripePromise}>
    <Fees />
  </Elements>
);

export default AppWrapper;
