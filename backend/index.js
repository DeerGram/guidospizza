const express = require('express');
const cors = require('cors');
const orders = require('./orders');
const analytics = require('./analytics');
const toppings = require('./toppings');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/orders', orders);
app.use('/api/analytics', analytics);
app.use('/api/toppings', toppings);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
