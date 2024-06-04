import React from "react";
import "./FaqSection.css";
import { faqSectionLabels } from "../../../utils/constant";

const Faq: React.FC = () => {
  return (
    <div className="faq">
      <div className="faq-header">
        <span className="faq-subtitle">FAQ</span>
        <h2 className="faq-title">
          <span>Frequently Asked</span>
          <span>Questions</span>
        </h2>
      </div>
      <div className="faq-items">
        <div className="faq-item faq-item-highlighted">
          <h3>{faqSectionLabels.headline}</h3>
          <p>{faqSectionLabels.description}</p>
        </div>
        <div className="faq-item">
          <h3>{faqSectionLabels.headline}</h3>
          <p>{faqSectionLabels.description}</p>
        </div>
        <div className="faq-item ">
          <h3>{faqSectionLabels.headline}</h3>
          <p>{faqSectionLabels.description}</p>
        </div>
        <div className="faq-item faq-item-highlighted">
          <h3>{faqSectionLabels.headline}</h3>
          <p>{faqSectionLabels.description}</p>
        </div>
        <div className="faq-item faq-item-highlighted">
          <h3>{faqSectionLabels.headline}</h3>
          <p>{faqSectionLabels.description}</p>
        </div>
        <div className="faq-item">
          <h3>{faqSectionLabels.headline}</h3>
          <p>{faqSectionLabels.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
