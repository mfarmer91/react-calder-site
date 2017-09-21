import React, { Component } from 'react';


const Contact = () => (
    <div>
        <form className="ui form">
          <div id='first_contact_field' className="field contact_field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field contact_field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
        <div className="field contact_field">
            <label>Email</label>
            <input type="text" name="first-name" placeholder="Email" />
          </div>
        <div className='field contact_field'>
            <label>Tell us about your Calder masterpiece.</label>
            <textarea></textarea>
        </div>
          <button id='submit_button' className="ui button" type="submit">Submit</button>
        </form>
    </div>
)

export default Contact;