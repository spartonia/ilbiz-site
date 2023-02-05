import React from "react";
import ContactUsCard from "../../components/contactUsCard/contactUsCard";
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
          // style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#fff;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
