import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Copyright &amp; Disclaimer
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Copyright © Lightly LLC. All Rights Reserved.
            </p>
            <p>
              The contents of this website, including all text, graphics, images and other material (collectively referred to as the "Content"), are protected by copyright under international laws. No part of the Content may be edited, reproduced, copied, distributed or commercially exploited in any manner without prior written permission from Lightly LLC.
            </p>
            <p>
              The Content of this website is provided for general information purposes only and does not constitute professional advice. Lightly LLC assumes no responsibility for errors or omissions in the content of this website.
            </p>
            <p>
              External links may be provided for your convenience, but they are beyond the control of Lightly LLC and no representation is made as to their content. Use or reliance on any external links provided is at your own risk.
            </p>
            <p>
              Lightly LLC reserves the right to make changes or updates to the Content of this website at any time without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
