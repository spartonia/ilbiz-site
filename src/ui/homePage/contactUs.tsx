import React from "react";
import FollowUs from "../../components/followUs/followUs";

const ContactUs = () => {
  return (
    <div className="section contactUs">
      <h1 className="title">Contact Us</h1>
      <p className="description">
        Stay in touch with us.Send us an email or start a conversation by
        filling the form below.
      </p>
      <div className="row">
        <FollowUs />
        <button
          className="button"
          data-tf-popup="afzVWFJh"
          data-tf-opacity="100"
          data-tf-size="100"
          data-tf-iframe-props="title=Contact Form"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
