// src/components/Contact.js
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="p-4" onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" className="w-full p-2 mb-2 border rounded" />
      <input type="email" name="user_email" placeholder="Your Email" className="w-full p-2 mb-2 border rounded" />
      <textarea name="message" placeholder="Your Message" className="w-full p-2 mb-2 border rounded"></textarea>
      <input type="submit" value="Send" className="p-2 bg-blue-500 text-white rounded" />
    </form>
  );
}
export default Contact;
