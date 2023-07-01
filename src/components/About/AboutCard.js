import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Joshua Du Plessis </span>
            from <span className="purple"> Cape Town, South Africa. </span>
            <br /> I am currently a certified Cloud Practitioner.
            <br />
             However, in 2022, I made a serious career change. I switched from a B.Sc graduate in Environmental & Hydrology Sciences, to become a software developer on the most advanced cloud platform today! Please review my website as I add project demos, and much more!
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
