import React, { useRef } from 'react';
import { Download, MessageCircle, AlertTriangle } from 'lucide-react';

import { scrollToElement } from '@utils/helpers';
import './Terms.css';

const TermsPage: React.FC = () => {
const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="doc-page">
      {/* Page Header */}
      <div className="doc-page__header">
        <div className="container">
          <span className="doc-page__badge">Legal Document</span>
          <div className="doc-page__meta">Last Updated: July 27, 2026</div>
          <h1 className="doc-page__title">Terms &amp; Conditions</h1>
          <p className="doc-page__intro">
            Please read these Terms and Conditions carefully before using the MedsSeva platform.
            These terms govern your use of our diagnostic booking services.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Content - Centered without TOC */}
        <article className="doc-content doc-content--centered" ref={contentRef}>
          <section id="introduction" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">01</span> Introduction and Acceptance</h2>
            <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "You", "Your") and MedsSeva ("Company", "We", "Us", "Our"), the owner and operator of the MedsSeva platform, including the mobile application, website, and related services (collectively, the "Platform").</p>
            <p>By registering, accessing, or using the Platform in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our Privacy Policy, which is incorporated herein by reference.</p>
            <div className="doc-callout doc-callout--warning">
              <div className="doc-callout__icon"><AlertTriangle size={16} /></div>
              <div>
                <strong>Important Notice</strong>
                <p>If you do not agree to these Terms, you must not access or use the Platform. Please read these terms carefully before proceeding.</p>
              </div>
            </div>
            <p>We reserve the right to update, modify, or amend these Terms at any time. Continued use of the Platform following the posting of changes constitutes acceptance of such changes. The "Last Updated" date at the top of these Terms indicates when the latest modifications were made.</p>
            <p>These Terms are governed by and shall be interpreted in accordance with the laws of India, including but not limited to the Indian Contract Act, 1872; the Information Technology Act, 2000; and the Consumer Protection Act, 2019.</p>
          </section>

          <section id="platform-overview" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">02</span> Platform Overview and Services</h2>
            <p>MedsSeva is a healthcare technology platform that acts as an intermediary connecting Users with diagnostic laboratories and home sample collection service providers. The Platform facilitates the booking, management, and tracking of diagnostic tests and health packages.</p>
            <div className="doc-callout doc-callout--warning">
              <div className="doc-callout__icon"><AlertTriangle size={16} /></div>
              <div>
                <strong>IMPORTANT DISCLAIMER</strong>
                <p>MedsSeva is NOT a hospital, medical facility, or healthcare provider. MedsSeva is NOT an emergency service. In case of a medical emergency, please contact your nearest emergency medical service or hospital immediately. MedsSeva DOES NOT provide medical consultation, diagnosis, or treatment advice. The Platform is a technology solution for booking diagnostic services, and all diagnostic services are provided by third-party partner laboratories.</p>
              </div>
            </div>
            <p>The Services provided through the Platform include:</p>
            <ul className="doc-list">
              <li>User registration and profile management;</li>
              <li>Browsing and booking diagnostic tests and health packages;</li>
              <li>Booking appointments for lab visits;</li>
              <li>Booking home sample collection services;</li>
              <li>Uploading and managing prescriptions;</li>
              <li>Making online payments through third-party payment gateways;</li>
              <li>Tracking booking status and viewing booking history;</li>
              <li>Receiving, viewing, and downloading diagnostic reports;</li>
              <li>Receiving notifications regarding bookings and services; and</li>
              <li>Communication with support personnel.</li>
            </ul>
          </section>

          <section id="eligibility" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">03</span> Eligibility and User Account</h2>
            <p>The Platform is available only to individuals who are 18 years of age or older and capable of entering into a legally binding contract under the Indian Contract Act, 1872.</p>
            <p>By using the Platform, you represent and warrant that:</p>
            <ul className="doc-list">
              <li>You are 18 years of age or older;</li>
              <li>All registration information you provide is accurate, complete, and current;</li>
              <li>You will maintain the confidentiality of your account credentials and are solely responsible for all activities conducted through your account;</li>
              <li>You will immediately notify us of any unauthorized use of your account; and</li>
              <li>You have the authority to upload any prescriptions or documents you provide to the Platform.</li>
            </ul>
            <p>You are responsible for all activities that occur under your account. We shall not be liable for any loss or damage arising from your failure to maintain the security of your account or password.</p>
            <p>We reserve the right to refuse service, terminate accounts, or remove or edit content in our sole discretion.</p>
          </section>

          <section id="prescription-upload" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">04</span> Prescription Upload</h2>
            <p>Users may upload prescriptions using the following methods:</p>
            <ul className="doc-list">
              <li>Camera;</li>
              <li>Gallery; or</li>
              <li>File Picker.</li>
            </ul>
            <p>Supported file formats include PDF, JPG, JPEG, PNG, WEBP, DOC, and DOCX.</p>
            <p>You represent and warrant that:</p>
            <ul className="doc-list">
              <li>Any prescription you upload belongs to you or you have been duly authorized by the patient to upload it;</li>
              <li>The prescription is genuine and has been issued by a qualified medical practitioner;</li>
              <li>You will not upload any forged, altered, or fraudulent prescriptions; and</li>
              <li>You shall indemnify and hold MedsSeva harmless against any claims arising from the upload or use of such prescriptions.</li>
            </ul>
            <p>We reserve the right to reject or request clarification regarding any uploaded prescription that appears to be invalid, expired, or not in compliance with applicable laws.</p>
          </section>

          <section id="booking" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">05</span> Booking and Scheduling</h2>
            <p><strong>Home Sample Collection:</strong></p>
            <ul className="doc-list">
              <li>Users may book home sample collection services through the Platform.</li>
              <li>Upon booking, a trained phlebotomist or sample collection partner will be assigned to visit the User's designated address for sample collection.</li>
              <li>The User must provide accurate address and contact information to enable successful sample collection.</li>
              <li>The User acknowledges that collection timing may vary due to traffic, weather, emergencies, operational constraints, or other unforeseen circumstances.</li>
              <li>The User must be present at the designated location during the scheduled collection window to enable sample collection.</li>
            </ul>
            <p><strong>Lab Visit Appointments:</strong></p>
            <ul className="doc-list">
              <li>Users may book appointments at partnered diagnostic laboratories through the Platform.</li>
              <li>The User is responsible for arriving at the designated laboratory on time for the scheduled appointment.</li>
              <li>Missed appointments may require rescheduling. We do not guarantee immediate availability for rescheduled appointments.</li>
            </ul>
            <p><strong>General Booking Provisions:</strong></p>
            <ul className="doc-list">
              <li>All bookings are subject to availability and confirmation by the partner laboratory or collection partner.</li>
              <li>We reserve the right to cancel or reschedule bookings due to operational constraints or other factors beyond our reasonable control.</li>
            </ul>
          </section>

          <section id="payments" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">06</span> Payments and Fees</h2>
            <p>The Platform supports various payment methods, including but not limited to:</p>
            <ul className="doc-list">
              <li>UPI;</li>
              <li>Debit Card;</li>
              <li>Credit Card;</li>
              <li>Net Banking;</li>
              <li>Wallets; and</li>
              <li>Cash (where applicable).</li>
            </ul>
            <p>Payments are processed through third-party payment gateways that are secure and PCI-DSS compliant. By making a payment through the Platform, you agree to be bound by the terms and conditions of the applicable payment gateway.</p>
            <p>We do not store or have access to your complete card information or banking credentials. All such information is handled exclusively by the payment gateway in accordance with their privacy and security policies.</p>
            <p>All fees and charges are displayed on the Platform at the time of booking. The prices displayed are inclusive of applicable taxes unless stated otherwise.</p>
            <p>In the event of a failed payment or technical error, we will not be liable for any loss or inconvenience suffered. The payment gateway shall be responsible for processing refunds in cases of failed transactions.</p>
          </section>

          <section id="refund-policy" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">07</span> Cancellation and Refund Policy</h2>
            <p><strong>User Cancellation:</strong></p>
            <ul className="doc-list">
              <li>Users may cancel a booking through the Platform or by contacting customer support.</li>
              <li>Cancellation timelines and eligibility for refunds vary based on the type of service booked.</li>
              <li>Cancellations made within the specified cancellation window (as displayed on the Platform at the time of booking) may be eligible for a full or partial refund.</li>
            </ul>
            <p><strong>Lab Cancellation:</strong></p>
            <ul className="doc-list">
              <li>If a partner laboratory cancels a booking for any reason, we will make reasonable efforts to reschedule the booking or offer a refund.</li>
              <li>We shall not be liable for any consequential losses arising from a lab cancellation.</li>
            </ul>
            <p><strong>Home Collection Cancellation:</strong></p>
            <ul className="doc-list">
              <li>If a phlebotomist has already been dispatched or if the sample has been collected, cancellation may not be permitted, and no refund shall be provided.</li>
              <li>If the collection partner is unable to reach the location due to inaccurate address details or the User's unavailability, no refund shall be provided.</li>
            </ul>
            <p><strong>Refund Eligibility and Timelines:</strong></p>
            <ul className="doc-list">
              <li>Refunds, if applicable, shall be processed to the original payment method used at the time of booking.</li>
              <li>Refunds shall be processed within 7-14 business days from the date of approval, subject to banking and payment partner processing times.</li>
              <li>We reserve the right to deduct applicable cancellation charges, processing fees, or other costs from the refund amount.</li>
            </ul>
            <p><strong>Non-Refundable Situations:</strong></p>
            <ul className="doc-list">
              <li>Charges for services that have already been rendered (including sample collection completed or reports generated);</li>
              <li>Cancellation fees as displayed on the Platform;</li>
              <li>Bookings made under promotional offers or discounts where non-refundable terms were clearly communicated; and</li>
              <li>Cases of misuse, fraud, or violation of these Terms.</li>
            </ul>
            <p><strong>Failed and Duplicate Payments:</strong></p>
            <ul className="doc-list">
              <li>In case of a failed payment transaction, any amount debited from your account shall be refunded by the payment gateway. We shall not be liable for any delay in such refunds.</li>
              <li>If you have been charged multiple times for the same booking due to a technical error, we will assist in resolving the issue with the payment gateway. Refund decisions shall be subject to the payment gateway's policies.</li>
            </ul>
            <p><strong>Disputes:</strong> Any disputes regarding cancellations or refunds shall be raised with our customer support team. Our decision in matters of cancellation and refund shall be final and binding.</p>
          </section>

          <section id="reports" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">08</span> Diagnostic Reports</h2>
            <p>Diagnostic reports are generated by partner laboratories. The Platform serves as a medium to deliver these reports digitally to Users.</p>
            <p>Reports are uploaded to secure cloud storage (Cloudinary) and are accessible to both the User and the Admin to ensure consistency and transparency.</p>
            <p>Users may view, download, and share their diagnostic reports through the Platform.</p>
            <div className="doc-callout doc-callout--info">
              <div className="doc-callout__icon"><AlertTriangle size={16} /></div>
              <div>
                <strong>IMPORTANT DISCLAIMER</strong>
                <p>Diagnostic reports are prepared by partnered diagnostic laboratories and are provided to Users "as is" without any modification by MedsSeva. We do not interpret, verify, or validate the accuracy, completeness, or timeliness of any diagnostic report. Diagnostic reports are for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. You should always consult a qualified healthcare professional for the interpretation of diagnostic reports and for any medical decisions.</p>
              </div>
            </div>
            <p>We are not liable for any errors, omissions, or inaccuracies in diagnostic reports. Any concerns regarding the accuracy of a report should be directed to the concerned laboratory.</p>
          </section>

          <section id="responsibilities" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">09</span> User Responsibilities and Conduct</h2>
            <p>You agree to:</p>
            <ul className="doc-list">
              <li>Provide true, accurate, current, and complete information during registration and while using the Platform;</li>
              <li>Maintain and promptly update your account information to keep it accurate and current;</li>
              <li>Upload only genuine prescriptions and documents to which you have lawful rights or authorization;</li>
              <li>Cooperate with collection partners during sample collection and provide necessary assistance;</li>
              <li>Be present at the designated location during scheduled collection windows;</li>
              <li>Comply with all applicable laws and regulations while using the Platform; and</li>
              <li>Use the Platform only for lawful purposes.</li>
            </ul>
            <p>You shall not:</p>
            <ul className="doc-list">
              <li>Misuse the Platform or its services in any manner;</li>
              <li>Upload false, forged, or unauthorized prescriptions or documents;</li>
              <li>Abuse, harass, threaten, or act inappropriately towards our staff, partners, or other Users;</li>
              <li>Attempt to defraud the Platform, partner laboratories, or other Users;</li>
              <li>Interfere with or disrupt the functioning of the Platform or its infrastructure;</li>
              <li>Attempt to gain unauthorized access to any part of the Platform, other User accounts, or our systems;</li>
              <li>Use the Platform for any illegal, fraudulent, or harmful purpose;</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity;</li>
              <li>Copy, modify, distribute, or create derivative works from any content available on the Platform without prior written consent; or</li>
              <li>Introduce any viruses, trojans, worms, logic bombs, or other malicious material into the Platform.</li>
            </ul>
          </section>

          <section id="disclaimer" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">10</span> Medical Disclaimer</h2>
            <div className="doc-callout doc-callout--info">
              <div className="doc-callout__icon"><AlertTriangle size={16} /></div>
              <div>
                <strong>Clinical Disclaimer</strong>
                <p>All diagnostic reports and information available on the Platform are for informational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions. Never disregard professional medical advice or delay in seeking it based on information obtained through the Platform.</p>
              </div>
            </div>
            <p>MedsSeva is a technology platform that connects Users with diagnostic laboratories and collection partners. We are not a healthcare provider, laboratory, or diagnostic service provider.</p>
          </section>

          <section id="liability" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">11</span> Limitation of Liability</h2>
            <p><strong>No Liability for Diagnostic Services:</strong> We do not perform, supervise, or control diagnostic services, laboratory testing, sample collection, or report generation. We shall not be liable for:</p>
            <ul className="doc-list">
              <li>The quality, accuracy, timeliness, or completeness of any diagnostic report;</li>
              <li>The conduct, negligence, or performance of any partner laboratory or collection partner;</li>
              <li>Any medical interpretation, diagnosis, or treatment decisions made based on information obtained through the Platform; or</li>
              <li>Any health outcomes, injuries, or damages arising from the use of diagnostic services.</li>
            </ul>
            <p><strong>No Warranty:</strong> The Platform and its services are provided on an "as is" and "as available" basis. We do not warrant that:</p>
            <ul className="doc-list">
              <li>The Platform will meet your requirements;</li>
              <li>The Platform will be uninterrupted, timely, secure, or error-free;</li>
              <li>The results obtained from using the Platform will be accurate or reliable; or</li>
              <li>The quality of any products, services, information, or other material obtained through the Platform will meet your expectations.</li>
            </ul>
            <p><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, MedsSeva, its directors, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
            <ul className="doc-list">
              <li>Loss of profits, revenue, data, or goodwill;</li>
              <li>Loss or damage to property;</li>
              <li>Personal injury or death;</li>
              <li>Medical malpractice or negligence;</li>
              <li>Business interruption; or</li>
              <li>Any damages arising out of or in connection with your use of the Platform, regardless of the legal theory.</li>
            </ul>
            <p><strong>Maximum Liability:</strong> In the event that any liability is imposed on MedsSeva, our total liability to you for all claims arising out of or relating to these Terms or your use of the Platform shall not exceed the total fees paid by you to us in the twelve (12) months preceding the claim.</p>
            <p><strong>Consumer Rights:</strong> Nothing in these Terms shall limit your rights as a consumer under the Consumer Protection Act, 2019, including the right to file a complaint before appropriate consumer forums.</p>
          </section>

          <section id="indemnification" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">12</span> Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless MedsSeva, its directors, officers, employees, affiliates, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:</p>
            <ul className="doc-list">
              <li>Your use or misuse of the Platform;</li>
              <li>Your violation of these Terms;</li>
              <li>Your violation of any applicable laws or regulations;</li>
              <li>Any content you upload, submit, or transmit through the Platform;</li>
              <li>Your interaction with any partner laboratory or collection partner; or</li>
              <li>Any claim that your content infringes the rights of any third party.</li>
            </ul>
          </section>

          <section id="intellectual-property" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">13</span> Intellectual Property</h2>
            <p>All intellectual property rights in the Platform, including but not limited to the mobile application, website, source code, graphics, logos, trademarks, brand name "MedsSeva," content, and design, are owned by or licensed to MedsSeva.</p>
            <p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for your personal, non-commercial use in accordance with these Terms.</p>
            <p>You shall not:</p>
            <ul className="doc-list">
              <li>Copy, modify, reproduce, distribute, or create derivative works from the Platform or its content;</li>
              <li>Reverse engineer, decompile, or disassemble the Platform or its source code;</li>
              <li>Remove or alter any proprietary notices or marks on the Platform;</li>
              <li>Use the Platform or its content for any commercial purpose without our prior written consent;</li>
              <li>Use the MedsSeva name, logo, or trademarks without our prior written consent.</li>
            </ul>
            <p>The content provided by Users (such as uploaded prescriptions) remains the property of the User, and the User grants us a limited license to use such content solely for the purpose of providing the Services.</p>
          </section>

          <section id="account-termination" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">14</span> Account Suspension and Termination</h2>
            <p>We reserve the right, in our sole discretion, to suspend, terminate, or restrict your access to the Platform or your account at any time, with or without notice, for any reason, including but not limited to:</p>
            <ul className="doc-list">
              <li>Violation of any provision of these Terms;</li>
              <li>Engagement in fraudulent, abusive, or illegal activities;</li>
              <li>Misuse of the Platform or its services;</li>
              <li>Providing false, inaccurate, or misleading information;</li>
              <li>Non-payment of fees or dues;</li>
              <li>Actions that may cause harm to the Platform, its Users, partners, or our reputation; or</li>
              <li>As required by law or regulatory authorities.</li>
            </ul>
            <p>Upon termination:</p>
            <ul className="doc-list">
              <li>Your right to access and use the Platform shall immediately cease;</li>
              <li>We may delete or deactivate your account and all related information;</li>
              <li>You shall remain liable for all outstanding payments and obligations incurred prior to termination;</li>
              <li>We shall have no liability for any loss or damage arising from termination of your account.</li>
            </ul>
            <p>You may terminate your account at any time by contacting us or through the Platform's account management features.</p>
            <p>Provisions of these Terms that by their nature should survive termination shall survive, including but not limited to Limitation of Liability, Indemnification, Intellectual Property, Governing Law, and Dispute Resolution.</p>
          </section>

          <section id="third-party-services" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">15</span> Third-Party Services</h2>
            <p>The Platform integrates with various third-party service providers, including but not limited to:</p>
            <ul className="doc-list">
              <li>Firebase (for authentication, notifications, and analytics);</li>
              <li>Cloudinary (for image and file storage);</li>
              <li>Google Maps (for location services);</li>
              <li>Razorpay/Cashfree (payment gateways);</li>
              <li>Push Notification providers; and</li>
              <li>Analytics providers.</li>
            </ul>
            <p>We do not control and are not responsible for the practices, policies, or performance of these third-party services. Each third-party service has its own terms and conditions and privacy policies, which you should review before using such services.</p>
            <p>We do not endorse or warrant the quality, reliability, or accuracy of any third-party services. Your use of third-party services is at your own risk.</p>
            <p>We may, in our discretion, change or replace any third-party service provider without prior notice.</p>
          </section>

          <section id="privacy-data-protection" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">16</span> Privacy and Data Protection</h2>
            <p>The collection, use, storage, and protection of your personal data are governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
            <p>By using the Platform, you consent to the collection and processing of your personal data in accordance with our Privacy Policy and applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023.</p>
          </section>

          <section id="dispute-resolution" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">17</span> Governing Law and Dispute Resolution</h2>
            <p><strong>Governing Law:</strong> These Terms and all matters arising out of or relating to these Terms and your use of the Platform shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles.</p>
          <p><strong>Jurisdiction:</strong> The courts at Noida, Uttar Pradesh shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms or your use of the Platform.</p>
            <p><strong>Arbitration:</strong></p>
            <ul className="doc-list">
              <li>Any dispute, controversy, or claim arising out of or relating to these Terms, including the existence, validity, interpretation, performance, breach, or termination thereof, shall be resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996.</li>
              <li>The arbitration shall be conducted by a sole arbitrator mutually appointed by the parties. If the parties fail to agree on the appointment of the arbitrator, the arbitrator shall be appointed in accordance with the provisions of the Arbitration and Conciliation Act, 1996.</li>
            <li>The seat and venue of arbitration shall be Noida, Uttar Pradesh.</li>
              <li>The language of the arbitration proceedings shall be English.</li>
              <li>The award rendered by the arbitrator shall be final and binding on the parties.</li>
            </ul>
            <p><strong>Consumer Rights:</strong> Notwithstanding the arbitration clause, you retain the right to approach consumer forums or other appropriate authorities under the Consumer Protection Act, 2019 for the resolution of disputes, if applicable.</p>
          </section>

          <section id="contact" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">18</span> Contact Information</h2>
            <p>For any questions, concerns, or grievances regarding these Terms or your use of the Platform, please contact us at:</p>
            <p><strong>Company Name:</strong> MedsSeva</p>
           <p><strong>Company Address:</strong> Noida</p>
            <p><strong>Support Email:</strong> info@medsseva.com</p>
            <p><strong>Support Phone:</strong> +91-9205109007</p>
            <p><strong>Grievance Officer:</strong> In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, we have designated a Grievance Officer to address your complaints and concerns regarding data protection and platform usage.</p>
           <p><strong>Name:</strong> Tanisha Bhatt</p>
            <p><strong>Designation:</strong> Data Protection Officer</p>
            <p><strong>Email:</strong> tanishabhatt2318@gmail.com</p>
            <p><strong>Phone:</strong> 8377011303</p>
          </section>

          <section id="general" className="doc-section">
            <h2 className="doc-section__title"><span className="doc-section__num">19</span> General Provisions</h2>
            <p><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and MedsSeva regarding your use of the Platform and supersede all prior agreements and understandings.</p>
            <p><strong>Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision shall be enforced to the maximum extent permissible, and the remaining provisions shall continue in full force and effect.</p>
            <p><strong>Waiver:</strong> The failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
            <p><strong>Assignment:</strong> You shall not assign, transfer, or sublicense your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.</p>
            <p><strong>Notices:</strong> We may provide notices to you via email, through the Platform, or by other means. You agree that such notices shall be deemed effective upon transmission.</p>
            <p><strong>Force Majeure:</strong> We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, pandemics, government actions, internet disruptions, or technical failures.</p>
            <p><strong>Relationship:</strong> Nothing in these Terms shall create an agency, partnership, joint venture, employer-employee, or fiduciary relationship between you and MedsSeva.</p>
          </section>

          {/* Support Box */}
          <div className="doc-support">
            <div className="doc-support__text">
              <h3 className="doc-support__title">Have further questions?</h3>
              <p className="doc-support__desc">Our compliance and legal team is available for clarifications.</p>
            </div>
            <div className="doc-support__actions">
              <a href="/contact" className="doc-support__btn doc-support__btn--outline">
                <MessageCircle size={16} />
                Contact Support
              </a>
              <button
                className="doc-support__btn doc-support__btn--primary"
                onClick={() => window.print()}
                aria-label="Download Terms as PDF"
              >
                <Download size={16} />
                Download PDF
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TermsPage;