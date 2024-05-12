import twilio from "twilio";

export const initiateTwilio = (accountSid, authToken) => {
    const client = twilio(accountSid, authToken);
    
    client.verify.services
        .create({ friendlyName: 'giovano' })
        .then(service => console.log(service.sid))
        .catch(error => console.error('Error creating Twilio service:', error));
}
