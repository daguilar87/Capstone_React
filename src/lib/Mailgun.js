const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || '01e2df1a3777b3282f7740580baa318b-6b161b0a-1d157532'});

mg.messages.create('sandboxcca1db4fd5d8404ba8c35ff20ab755b0.mailgun.org', {
	from: "Excited User <daguilar8749@gmail.com>",
	to: ["test@example.com"],
	subject: "Hello",
	text: "Testing some Mailgun awesomeness!",
	html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error




