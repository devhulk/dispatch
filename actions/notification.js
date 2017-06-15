require('dotenv').config()

class Notification {

  //type is type of Notification(sms,email,etc)
  //body is message to be sent
  //auth is an array containing authentication keys if neccesary
  static send(type,mess,auth) {

    if (type == 'sms') {
      let sendSMS = () => {
        let twilio = require('twilio')
        let accountSid = process.env.TWILIO_Sid 
        let authToken = process.env.TWILIO_TOKEN
        
        let client = new twilio(accountSid, authToken)

          client.messages.create({
            to: '+',  // Put phonenumber to text here 
            from: '+19804306958', //Twilio number
            body: mess,
          })
          .then((message) => {
            //console.log(message.sid)
            console.log(message)
            let msg = message.body.split(' - ')
            console.log(msg[1])
          })
        }
      sendSMS()

    }
  }
}

module.exports = Notification
