import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Enter Your First Name" />
        <input type="text" placeholder="Enter Your Last Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="number" placeholder="Enter your age" />
        <input type="date" />
        <textarea placeholder="Enter Your Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
