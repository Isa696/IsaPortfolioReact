import { useState } from "react";
import "./TechsAccordion.css";

function TechsAccordion({ title, logo, logo2, accordionText }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordionClass = accordionOpen
    ? "transition-accordion open"
    : "transition-accordion";

  return (
    <>
      <div className="col-md-6">
        <div
          className="service-item"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <div className="row justify-content-center align-items-center">
            <div className={logo}></div>
            <div className={logo2}></div>
          </div>
          <h4 className="text-center">{title}</h4>

          <div className="icon-container">
            {!accordionOpen ? (
              <i className={`icon fa fa-plus rotate-left`}></i>
            ) : (
              <i className={`icon fa fa-minus rotate-right`}></i>
            )}
          </div>

          <div className={accordionClass}>
            {accordionOpen && <p>{accordionText}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechsAccordion;
