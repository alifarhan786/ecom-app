const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
    key_id: 'rzp_test_8MpDTe0nL3tKft',
    key_secret: 'gxP9YxR9fIfd52QZc7oUgJJE',
});

app.post('/create-order', async (req, res) => {
    const { amount, currency, receipt, notes } = req.body;
    try {
        const order = await razorpay.orders.create({ amount, currency, receipt, notes });
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});
console.log("heyyy")

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
