const stripeApi = require('../stripe');

async function createCheckoutSession(req, res) {
    const domainUrl = process.env.WEB_APP_URL; //NOW IT WOULD BE THE LOCALHOST 3000 AND LUEGO WHEN WE DEPLOY WE CHANGE IT 
    //what will come from the body of the request 
    const { line_items, customer_email } = req.body;
    //we make sure the req body contains the tiems , we will check if it has line items and customer email 
    if (!line_items || !customer_email) {
        return res.statuta(400).json({ error: "missing required session parameters" })

    }
    let session;
    try { //THIS IS IN STRIPE DOCUMENTATION
        session = await stripeApi.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            customer_email,
            sucess_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainUrl}/cancel`,
            shipping_address_collection: { allowed_countries: ['GB', 'US'] }
        });
        //ONCE ALL THE ABOVE IS RESOLVED, WE WILL SEND A RESPONSE
        res.status(200).json({ sessionId: session.id })

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'an error occured, unable to create session' })

    }
}

module.exports = createCheckoutSession;