const stripeApi = require('stripe')(process.env.SECRET_KEY);
//SECRET KEY IS WHJAT WE USE IN THE BACKEDN
module.exports = stripeApi;