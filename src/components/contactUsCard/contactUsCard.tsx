import Image from "next/image";
import React, { FunctionComponent } from "react";
import "./contactUsCard.scss";

interface ContactUsCardProps {
  icon: string;
  title: string;
  description: string;
}

const ContactUsCard: FunctionComponent<ContactUsCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="contactUsCard">
      <div className="cardRow">
        <div className="icon">
          <Image src={icon} alt="icon" width={0} height={0} />
        </div>
        <div className="column">
          <h5 className="title">{title}</h5>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
