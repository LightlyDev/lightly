import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
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
              Terms &amp; Policy
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Terms of Use
            </h3>
            <p>
              Welcome to Lightly LLC, a freelance web development company (“Lightly LLC” or “Company”). The following terms and conditions (“Terms of Use”) govern your access to and use of the Company’s website, including any content, functionality and services offered on or through the website (collectively, the “Website”).
            </p>
            <p>
              Please read these Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at [INSERT URL], incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Use of the Website
            </h5>
            <p>
              The Website is intended for your personal and non-commercial use. You may not use the Website for any illegal or unauthorized purpose. Your use of the Website is subject to all applicable laws.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Intellectual Property Rights
            </h5>
            <p>
              The content of the Website, including but not limited to text, photographs, graphics, images and other material, is protected by copyright, trademark and other laws. The content is the property of Lightly LLC or its licensors. You may not sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from the content.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Warranty Disclaimer
            </h5>
            <p>
              The Website is provided “as is” and “as available” without warranty of any kind, either express or implied, including without limitation any warranty for information, services, uninterrupted access, or products provided through or in connection with the Website, including without limitation the software licensed to you and the results obtained through the Website. Specifically, Lightly LLC disclaims any and all warranties, including without limitation: 1) any warranties concerning the availability, accuracy, use, or results of use of the Website or the content made available through the Website, and 2) any warranties of merchantability or fitness for a particular purpose.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Liability Disclaimer
            </h5>
            <p>
              Lightly LLC shall not be liable for any damages or injury resulting from your access to, or inability to access, the Website, or from your reliance on any information provided at the Website.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Changes to Terms of Use
            </h5>
            <p>
              Lightly LLC reserves the right, at its sole discretion, to modify or replace these Terms of Use at any time. If a revision is material, Lightly LLC will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at Lightly LLC’s sole discretion.
            </p>


            <br />
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Privacy Policy
            </h3>
            <p>
              Lightly LLC is committed to protecting the privacy of all personal information provided by our customers. This Privacy Policy explains how we collect, use, disclose and protect the personally identifiable information (“Personal Information”) collected on the Lightly LLC website and mobile applications.
            </p>
            <p>
              We encourage you to read this Privacy Policy carefully when using our website or mobile applications or services or transacting business with us. By using our website, you are accepting the practices described in this Privacy Policy.
            </p>
            <ol className="lh-lg">
              <li>
                Collection of Personal Information
                <br />
                &ensp; Lightly LLC collects personal information from our customers when they register with us, place an order, participate in a promotion or survey, or contact us. We may also collect contact data from third party sources. We may take note of the websites and pages you visit on our website to help us provide more relevant content in the future.
              </li>
              <li>
                Use of Personal Information
                <br />
                &ensp; Lightly LLC uses the collected personal information for many reasons, including fulfilling orders, responding to requests for service and/or assistance, delivering customer service, marketing research, surveys and promotions, enhancing user experience, and other customer service related purposes.
              </li>
              <li>
                Disclosure of Your Personal Information
                <br />
                &ensp; Lightly LLC may share your Personal Information with third parties when we have your permission, when it is necessary to complete a transaction initiated by you, are required by law, or to protect the rights, property, or safety of Lightly LLC, its users, or others. We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data.
              </li>
              <li>
                Access to Your Personal Information
                <br />
                &ensp; If you would like to review, correct, or delete any Personal Information associated with your account, you may do so at any time by logging into your account. You may also contact Lightly LLC directly for assistance.
              </li>
              <li>
                Other Websites
                <br />
                &ensp; Our website may contain links to other sites. Lightly LLC is not responsible for the privacy policies or content of such websites. We encourage you to read the privacy policies of each website that you visit.
              </li>
              <li>
                Changes to This Policy
                <br />
                &ensp; Lightly LLC reserves the right to update this Privacy Policy at any time. We will notify you about significant changes in the way we treat Personal Information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
              </li>
            </ol>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Questions or Concerns
            </h5>
            <p>
              If you have any questions, concerns, or suggestions regarding this Terms of Use or Privacy Policy, please contact us at lightlydev@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
