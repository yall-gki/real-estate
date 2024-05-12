import client from "twilio"
const twilioClient = client(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const verifyUser =async (req,res)=>{

    const {countryCode,phoneNumber} =req.body


    const fullPhoneNum= "+"+countryCode+phoneNumber

    
    try {
        const verification = await twilioClient.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
          .verifications
          .create({ to: fullPhoneNum, channel: 'sms' });
      
        res.status(200).json({ status: verification.status });
      } catch (error) {
        console.error('Error initiating verification:', error);
        res.status(500).json({ message: 'Failed to initiate verification' });
      }
      


    
  
    





}

export const checkUser = async(req,res)=>{
    const {countryCode,phoneNumber , code} = req.body
    const fullPhoneNum= "+"+countryCode+phoneNumber

    try {
        const verificationCheck = await twilioClient.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
          .verificationChecks
          .create({ to: fullPhoneNum, code });
      
        console.log(verificationCheck.status);
        res.status(200).json({ status: verificationCheck.status });
      } catch (error) {
        console.error('Error verifying code:', error);
        res.status(500).json({ message: 'Failed to verify code' });
      }
      


}