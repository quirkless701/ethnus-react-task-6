import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
