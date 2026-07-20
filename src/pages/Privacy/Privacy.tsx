import React from 'react';
import { ShieldCheck, Lock, Eye, Mail } from 'lucide-react';


import '../Terms/Terms.css';
import './Privacy.css';

const PrivacyPage: React.FC = () => {

  return (
    <div className="doc-page">
      {/* Header */}
      <div className="doc-page__header">
        <div className="container">
          <span className="doc-page__badge">Legal Document Section</span>
          <div className="doc-page__meta">Last Updated: October 14, 2026</div>
          <h1 className="doc-page__title">Privacy Policy</h1>
          <p className="doc-page__intro">
            This Privacy Policy explains how MedsSeva collects, uses, stores, and
            protects your personal and medical information when you use our platform.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content - Centered without TOC */}
        <article className="doc-content doc-content--centered">
          <section id="introduction" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">01</span> Introduction
            </h2>
            <p>MedsSeva ("Company," "We," "Us," "Our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, store, share, and protect your personal data when you use our Platform, including the mobile application, website, and related services (collectively, the "Platform").</p>
            <p>This Privacy Policy is designed to comply with applicable Indian privacy and data protection laws, including but not limited to the Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
            <p>By using the Platform, you consent to the collection, use, storage, and processing of your personal data as described in this Privacy Policy.</p>
            <p>If you do not agree to this Privacy Policy, you must not access or use the Platform.</p>
            <p>We may update this Privacy Policy from time to time. The "Effective Date" at the top of this Privacy Policy indicates when the latest version was posted. Your continued use of the Platform following any changes constitutes acceptance of the updated Privacy Policy.</p>
          </section>

          <section id="definitions" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">02</span> Definitions
            </h2>
            <p><strong>Data Principal:</strong> The individual to whom personal data relates and who has rights under the DPDP Act.</p>
            <p><strong>Data Fiduciary:</strong> Any person who determines the purpose and means of processing personal data.</p>
            <p><strong>Data Processor:</strong> Any person who processes personal data on behalf of a Data Fiduciary.</p>
            <p><strong>Personal Data:</strong> Any data about an individual who is identifiable by or in relation to such data.</p>
            <p><strong>Processing:</strong> Any operation performed on personal data, including collection, storage, use, sharing, transfer, modification, disclosure, or deletion.</p>
            <p><strong>Health Data:</strong> Includes medical history, diagnoses, prescriptions, diagnostic reports, test results, and other health-related information.</p>
          </section>

          <section id="data-collection" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">03</span> Data We Collect
            </h2>
            <h3 className="privacy-subsection">Personal Identification Information</h3>
            <ul className="doc-list">
              <li>Name;</li>
              <li>Email address;</li>
              <li>Mobile phone number;</li>
              <li>Date of birth;</li>
              <li>Gender (optional); and</li>
              <li>Profile photograph (optional).</li>
            </ul>
            <p><strong>Why we collect it:</strong> To create and manage your account, verify your identity, communicate with you, and provide the Services.</p>
            
            <h3 className="privacy-subsection">Address and Location Information</h3>
            <ul className="doc-list">
              <li>Home and/or office address (for home sample collection);</li>
              <li>Location data (with your consent, for service mapping and navigation);</li>
              <li>City, state, and pin code.</li>
            </ul>
            <p><strong>Why we collect it:</strong> To facilitate home sample collection appointments, enable location-based services (such as finding nearby labs), and ensure accurate delivery of services.</p>
            
            <h3 className="privacy-subsection">Booking and Transaction Information</h3>
            <ul className="doc-list">
              <li>Diagnostic test bookings and appointments;</li>
              <li>Health package selections;</li>
              <li>Booking history and status;</li>
              <li>Payment transaction details (amount, date, mode of payment, transaction reference number); and</li>
              <li>Preferred date and time for appointments.</li>
            </ul>
            <p><strong>Why we collect it:</strong> To process your bookings, manage appointments, facilitate payments, track bookings, provide booking history, and improve our services.</p>
            
            <h3 className="privacy-subsection">Prescriptions and Health Documents</h3>
            <ul className="doc-list">
              <li>Uploaded prescriptions;</li>
              <li>Medical reports;</li>
              <li>Diagnostic reports received from partner laboratories; and</li>
              <li>Other health-related documents you choose to upload.</li>
            </ul>
            <p><strong>Why we collect it:</strong> To enable the booking of diagnostic tests that require prescriptions, to deliver diagnostic reports to you, and to maintain a record of your health information for continuity of care. This information is considered Health Data and is treated with heightened confidentiality and security.</p>
            
            <h3 className="privacy-subsection">Device and Technical Information</h3>
            <ul className="doc-list">
              <li>Device type, model, and operating system;</li>
              <li>IP address;</li>
              <li>Device identifiers and advertising IDs;</li>
              <li>App usage information and analytics;</li>
              <li>Browser type and version (for website use);</li>
              <li>Unique device token for push notifications; and</li>
              <li>Notification preferences.</li>
            </ul>
            <p><strong>Why we collect it:</strong> To enable the Platform to function properly, to send notifications, to improve user experience, to analyze usage patterns, to troubleshoot issues, and to enhance security.</p>
            
            <h3 className="privacy-subsection">Permissions</h3>
            <p>The Platform may request the following permissions:</p>
            <ul className="doc-list">
              <li>Camera (to upload prescriptions and documents);</li>
              <li>Gallery/Storage (to upload files);</li>
              <li>Location (to facilitate services);</li>
              <li>Notifications (to send service updates and reminders); and</li>
              <li>Internet access (for Platform functionality).</li>
            </ul>
            <p><strong>Why we request permissions:</strong> To enable specific functionalities of the Platform. You may manage or revoke these permissions at any time through your device settings, but doing so may affect certain features.</p>
          </section>

          <section id="how-used" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">04</span> How We Use Your Data
            </h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="doc-list">
              <li><strong>Service Delivery:</strong> To create and manage your account, process bookings, facilitate payments, schedule appointments, assign collection partners, and deliver diagnostic reports.</li>
              <li><strong>Communication:</strong> To send you service confirmations, booking reminders, status updates, notifications, payment receipts, and responses to your inquiries.</li>
              <li><strong>Customer Support:</strong> To address your complaints, inquiries, and grievances.</li>
              <li><strong>Improvement of Services:</strong> To analyze usage patterns, improve user experience, enhance Platform functionality, and develop new features.</li>
              <li><strong>Security and Fraud Prevention:</strong> To detect, prevent, and investigate security incidents, fraud, and misuse of the Platform.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              <li><strong>Analytics:</strong> To analyze how you interact with the Platform to improve our services and content.</li>
            </ul>
            <p>We will not use your personal data for any purpose other than those for which it was collected without obtaining your consent, except as permitted or required by law.</p>
          </section>

          <section id="legal-basis" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">05</span> Data Processing Based on Consent and Legitimate Uses
            </h2>
            <p><strong>Consent-Based Processing:</strong> We collect and process your personal data based on your informed, specific, and unambiguous consent. You provide consent by:</p>
            <ul className="doc-list">
              <li>Registering on the Platform;</li>
              <li>Checking consent boxes or clicking "I Agree" buttons;</li>
              <li>Using the Platform and its services; or</li>
              <li>Providing consent through other affirmative actions.</li>
            </ul>
            <p>Consent will be:</p>
            <ul className="doc-list">
              <li>Free and voluntary;</li>
              <li>Specific and purpose-bound;</li>
              <li>Informed (with prior notice);</li>
              <li>Unambiguous (through a clear affirmative action); and</li>
              <li>Revocable at any time.</li>
            </ul>
            <p><strong>Legitimate Uses (Processing without Consent):</strong> We may process your personal data without your explicit consent in certain circumstances permitted by the DPDP Act, including but not limited to:</p>
            <ul className="doc-list">
              <li>For the performance of a contract or to take steps at your request prior to entering into a contract;</li>
              <li>For compliance with a legal obligation;</li>
              <li>To respond to a medical emergency involving a threat to your life or health;</li>
              <li>To provide medical treatment or health services during a public health crisis or epidemic;</li>
              <li>For the purposes of the administration of justice; or</li>
              <li>For other legitimate uses as defined under the DPDP Act.</li>
            </ul>
          </section>

          <section id="data-storage" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">06</span> Data Storage and Security
            </h2>
            <p><strong>Data Storage:</strong></p>
            <ul className="doc-list">
              <li>Your personal data is stored on secure cloud servers hosted on reputable cloud infrastructure providers.</li>
              <li>Uploaded prescriptions and diagnostic reports are stored on Cloudinary, a secure cloud storage and management service.</li>
              <li>Backend servers process and store personal data in accordance with applicable security standards.</li>
              <li>Data may be stored within and outside India, subject to the provisions of the DPDP Act regarding cross-border data transfer.</li>
            </ul>
            <p><strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction, including:</p>
            <ul className="doc-list">
              <li><strong>Encryption:</strong> Data is encrypted in transit (using TLS 1.3 or higher) and at rest (using AES-256 or equivalent).</li>
              <li><strong>Access Control:</strong> Role-based access control ensures that only authorized personnel have access to personal data on a need-to-know basis.</li>
              <li><strong>Multi-Factor Authentication:</strong> MFA is implemented for administrative access to systems containing personal data.</li>
              <li><strong>Audit Logs:</strong> Comprehensive audit logs are maintained to track all access to and processing of personal data.</li>
              <li><strong>Regular Security Audits:</strong> Periodic Vulnerability Assessment and Penetration Testing (VAPT) is conducted to identify and address security vulnerabilities.</li>
              <li><strong>Network Segmentation:</strong> Our systems are segmented to separate different data processing activities and minimize risk.</li>
              <li><strong>Incident Response:</strong> We have documented incident response procedures to address any suspected data breaches.</li>
            </ul>
            <p><strong>Reasonable Security Safeguards:</strong> We are committed to maintaining "reasonable security safeguards" as required under the DPDP Act and the Information Technology Act, 2000. While no security system is impenetrable, we continuously update our security measures to address emerging threats.</p>
            <p><strong>Data Breach Notification:</strong> In the event of a data breach that is likely to cause significant harm to you, we will notify you and the Data Protection Board of India in accordance with the requirements of the DPDP Act.</p>
          </section>

          <section id="data-retention" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">07</span> Data Retention
            </h2>
            <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting, or reporting requirements.</p>
            <p><strong>Retention Periods:</strong></p>
            <ul className="doc-list">
              <li><strong>Account Information:</strong> Retained for the duration of your account and for a reasonable period thereafter, as required for legal and compliance purposes.</li>
              <li><strong>Booking and Transaction Records:</strong> Retained for a minimum of seven (7) years to comply with financial and tax record-keeping requirements.</li>
              <li><strong>Health Data (including prescriptions and reports):</strong> Retained for as long as necessary for medical continuity, legal compliance, and as required by applicable healthcare regulations.</li>
              <li><strong>Consent Records:</strong> Retained for a minimum period as required under the DPDP Act to demonstrate compliance.</li>
            </ul>
            <p><strong>Data Deletion:</strong> Upon expiry of the retention period, your personal data shall be securely deleted or anonymized to prevent identification.</p>
          </section>

          <section id="user-rights" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">08</span> User Rights
            </h2>
            <p>Under the DPDP Act, you (as a Data Principal) have the following rights regarding your personal data:</p>
            <p><strong>Right to Access:</strong> You have the right to obtain confirmation from us regarding the processing of your personal data and to access such data, including information about:</p>
            <ul className="doc-list">
              <li>The categories of personal data processed;</li>
              <li>The purposes of processing;</li>
              <li>The third parties with whom we share data; and</li>
              <li>How long we store your data.</li>
            </ul>
            <p><strong>Right to Correction:</strong> You have the right to request correction, updating, or completion of inaccurate or incomplete personal data.</p>
            <p><strong>Right to Erasure:</strong> You have the right to request the deletion of your personal data where:</p>
            <ul className="doc-list">
              <li>The data is no longer necessary for the purposes for which it was collected;</li>
              <li>You withdraw your consent (where consent is the basis of processing);</li>
              <li>The data is being processed unlawfully; or</li>
              <li>Retention is not required for legal or regulatory compliance.</li>
            </ul>
            <p>Please note that your right to erasure is subject to legal retention requirements, particularly for health and medical records, as mandated by healthcare regulations.</p>
            <p><strong>Right to Withdraw Consent:</strong> You have the right to withdraw your consent for processing your personal data at any time. Withdrawal of consent shall be as easy as giving consent. Upon withdrawal, we shall cease processing your data for the purposes for which consent was given, unless processing is permitted under legitimate use provisions.</p>
            <p><strong>Right to Grievance Redressal:</strong> You have the right to file a complaint with us regarding any violation of your data protection rights. If you are not satisfied with our response, you may escalate the matter to the Data Protection Board of India.</p>
            <p><strong>Right to Nominate:</strong> You have the right to nominate an individual to exercise your rights in the event of your death or incapacity.</p>
            <p><strong>How to Exercise Your Rights:</strong> To exercise any of the above rights, please contact us through the contact details provided in Section 17. We shall respond to your request within a reasonable timeframe, as prescribed by law, and provide the requested information or action.</p>
          </section>

          <section id="consent-management" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">09</span> Consent Management
            </h2>
            <p><strong>Consent Collection:</strong> We collect consent through clear, specific, and user-friendly mechanisms at the point of data collection. Consent requests are:</p>
            <ul className="doc-list">
              <li><strong>Purpose-specific:</strong> Separate consent is obtained for each distinct purpose.</li>
              <li><strong>Granular:</strong> You have the option to consent to specific purposes independently.</li>
              <li><strong>Informed:</strong> You are provided with a clear notice containing all relevant information before giving consent.</li>
            </ul>
            <p><strong>Consent Dashboard:</strong> We may provide a user dashboard (currently under development) to enable you to:</p>
            <ul className="doc-list">
              <li>View all active consents you have given;</li>
              <li>Modify your consent preferences;</li>
              <li>Withdraw consent for specific purposes; and</li>
              <li>View your consent history.</li>
            </ul>
            <p><strong>Consent Revocation:</strong></p>
            <ul className="doc-list">
              <li>You may withdraw your consent at any time through the Platform (where available) or by contacting us.</li>
              <li>Upon withdrawal, we shall cease processing your data for the purposes for which consent was given.</li>
              <li>Withdrawal of consent may limit your ability to use certain features of the Platform.</li>
            </ul>
          </section>

          <section id="data-sharing" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">10</span> Data Sharing and Disclosure
            </h2>
            <p>We may share your personal data with the following categories of third parties:</p>
            <p><strong>Partner Laboratories:</strong> To facilitate the booking of diagnostic tests, we share relevant information such as your name, contact details, address (for home collection), and prescriptions with partner laboratories. These laboratories are bound by confidentiality and data protection obligations.</p>
            <p><strong>Collection Partners (Phlebotomists):</strong> To enable home sample collection, we share your name, contact details, and address with assigned collection partners. They are bound by confidentiality and data protection obligations.</p>
            <p><strong>Service Providers:</strong> We engage third-party service providers to operate and maintain the Platform, including:</p>
            <ul className="doc-list">
              <li><strong>Cloud Infrastructure:</strong> Cloud service providers (e.g., Cloudinary) for storage and data processing;</li>
              <li><strong>Analytics:</strong> Analytics providers to improve our services;</li>
              <li><strong>Notifications:</strong> Push notification providers to send you alerts and updates;</li>
              <li><strong>Communication:</strong> Email and SMS service providers for communication;</li>
              <li><strong>Location Services:</strong> Mapping services (e.g., Google Maps) for location-based features.</li>
            </ul>
            <p><strong>Payment Processors:</strong> We share transaction details with payment gateways (e.g., Razorpay, Cashfree) to process payments. We do not store or have access to your complete card or banking credentials.</p>
            <p><strong>Legal and Regulatory Authorities:</strong> We may disclose your personal data to government authorities or law enforcement agencies if required by law, regulation, legal process, or in response to a court order.</p>
            <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred to the successor entity, subject to the terms of this Privacy Policy.</p>
            <p><strong>No Sale of Data:</strong> We do not sell, rent, or trade your personal data to third parties for marketing or advertising purposes.</p>
          </section>

          <section id="cross-border" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">11</span> Cross-Border Data Transfer
            </h2>
            <p>We may transfer your personal data to servers located outside India for storage or processing. Such transfers shall be conducted in compliance with the DPDP Act and applicable regulations, which may require consent or other conditions.</p>
            <p>When we transfer your data internationally, we take steps to ensure adequate protection, including contractual safeguards requiring the recipient to maintain comparable data protection standards.</p>
          </section>

          <section id="cookies" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">12</span> Cookies and Tracking Technologies
            </h2>
            <p>Our future website may use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and deliver relevant content.</p>
            <p><strong>Types of Cookies We May Use:</strong></p>
            <ul className="doc-list">
              <li><strong>Essential Cookies:</strong> Necessary for the Platform to function.</li>
              <li><strong>Performance Cookies:</strong> To analyze usage and improve our Platform.</li>
              <li><strong>Functional Cookies:</strong> To remember your preferences.</li>
              <li><strong>Analytics Cookies:</strong> To collect information about how you use the Platform.</li>
            </ul>
            <p><strong>Your Cookie Choices:</strong> You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of the Platform.</p>
          </section>

          <section id="children-data" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">13</span> Children's Data
            </h2>
            <p>Our Platform is not intended for children under the age of 18.</p>
            <p>We do not knowingly collect personal data from children under 18 without verifiable parental or guardian consent.</p>
            <p>If you are a parent or guardian and believe that your child has provided personal data to us without your consent, please contact us, and we will take steps to delete such data.</p>
            <p>In accordance with the DPDP Act, we shall obtain verifiable consent from parents or guardians before processing personal data of children.</p>
          </section>

          <section id="grievance" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">14</span> Grievance Redressal
            </h2>
            <p>We are committed to timely resolution of your grievances. If you have any questions, concerns, or complaints regarding this Privacy Policy or our data processing practices, please contact our Grievance Officer:</p>
            <p><strong>Name:</strong> [Insert Grievance Officer Name]</p>
            <p><strong>Designation:</strong> [Insert Grievance Officer Designation]</p>
            <p><strong>Email:</strong> [Insert Grievance Officer Email Address]</p>
            <p><strong>Phone:</strong> [Insert Grievance Officer Phone Number]</p>
            <p>We shall acknowledge your complaint within 24 hours and endeavor to resolve it within 30 days.</p>
            <p>If you are not satisfied with our resolution, you may escalate your complaint to the Data Protection Board of India under the DPDP Act.</p>
          </section>

          <section id="third-party" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">15</span> Third-Party Services and Links
            </h2>
            <p>The Platform may contain links to third-party websites or integrate with third-party services (including but not limited to Firebase, Cloudinary, Razorpay, Google Maps, and other service providers).</p>
            <p>This Privacy Policy does not apply to the practices of third-party services. We are not responsible for the privacy policies, terms, or practices of third-party service providers.</p>
            <p>We encourage you to review the privacy policies of any third-party services you access through our Platform.</p>
          </section>

          <section id="updates" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">16</span> Updates to This Privacy Policy
            </h2>
            <p>We may revise this Privacy Policy periodically to reflect changes in our practices, technology, or applicable laws.</p>
            <p>We shall notify you of material changes through the Platform or via email. The "Effective Date" at the top of this Privacy Policy indicates when the latest version became effective.</p>
            <p>Your continued use of the Platform following any changes constitutes your acceptance of the updated Privacy Policy.</p>
          </section>

          <section id="contact-info" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">17</span> Contact Information
            </h2>
            <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
            <div className="privacy-contact-card">
              <div className="privacy-contact-header">
                <ShieldCheck size={20} className="privacy-contact-icon" />
                <span>MedsSeva Privacy Team</span>
              </div>
              <div className="privacy-contact-row">
                <Mail size={14} />
                <span>Company Name: MedsSeva</span>
              </div>
              <div className="privacy-contact-row">
                <Mail size={14} />
                <span>Company Address: [Insert Full Registered Office Address]</span>
              </div>
              <div className="privacy-contact-row">
                <Mail size={14} />
                <span>Support Email: [Insert Support Email Address]</span>
              </div>
              <div className="privacy-contact-row">
                <Mail size={14} />
                <span>Support Phone: [Insert Support Phone Number]</span>
              </div>
            </div>
          </section>

          <section id="acknowledgement" className="doc-section">
            <h2 className="doc-section__title">
              <span className="doc-section__num">18</span> Acknowledgement and Consent
            </h2>
            <p>By using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and the collection, use, and processing of your personal data as described herein.</p>
          </section>

          {/* Support Box */}
          <div className="doc-support">
            <div className="doc-support__text">
              <h3 className="doc-support__title">Privacy Compliance Team</h3>
              <p className="doc-support__desc">Pioneering diagnostic excellence with a partner of trust. Precision. Trust. Care.</p>
            </div>
            <div className="doc-support__actions">
              <a href="/contact" className="doc-support__btn doc-support__btn--primary">
                <Eye size={16} />
                Contact Privacy Team
              </a>
              <a href="/terms" className="doc-support__btn doc-support__btn--outline">
                <Lock size={16} />
                View Terms
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPage;