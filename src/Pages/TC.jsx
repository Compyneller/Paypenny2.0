import React from "react";
import { Link } from "react-router-dom";
import "./TC.scss";

const TC = () => {
  return (
    <div className="w-100 bg-light tcMainContainer">
      <div className="container py-5 d-flex ">
        <Link to="/">
          <img
            className="w-50 my-auto"
            src="https://img.icons8.com/ios-glyphs/2x/home-page--v2.gif"
            alt=""
            style={{ filter: "invert(1)", mixBlendMode: "screen" }}
          />
        </Link>
        <h1 className="my-auto">Terms & Conditions</h1>
      </div>

      <div className=" tcContainer">
        <div className="container p-5">
          <h5 style={{ fontWeight: "bold" }}>Paypenny User Agreement</h5>
          <p>
            This User Agreement (“Agreement”) is effective as of Jan 1, 2021,
            and was most recently updated on May 27, 2022. It describes the
            terms by which you will be bound when you use the services
            accessible on our mobile applications through Google Play store and
            Apple Store“Service”. Paypenny requests you to not use the Service
            if you do not agree to abide by these terms. By using the Service
            you agree to all of the terms contained in this User Agreement. As
            used throughout this Agreement, the terms “Paypenny”, “we”, “us”,
            and “our” refer to Paypenny, Inc., a Trackon Canada Private Limited
            venture, together with its employees, directors, successors, and
            assignees. The terms “you” and “your” refer to users of the Service,
            whether as Senders or Recipients.
          </p>
          <h5 style={{ fontWeight: "bold" }}>1- THE SERVICE</h5>
          <p>
            The Service allows users to send crypto served by Trackon Canada
            Private Limited T/A Paypenny. A “Sender” uses the Service to send
            crypto and a “Recipient” receives crypto through the Service. A
            “Transaction” refers to a command to send crypto through the Service
            via Paypenny Wallet. The “Transaction Amount” is the amount in
            foreign currency that the sender provides to Paypenny for transfer
            to the recipient. The “Payout Amount” is the amount paid out to the
            Recipient.
          </p>
          <h5 style={{ fontWeight: "bold" }}>2- ELIGIBILITY FOR THE SERVICE</h5>
          <p>
            <b>2.1. Age and Capacity</b>
          </p>
          <p>
            Your age must be at least eighteen (18) years old and have the
            ability to enter into a legal agreement under applicable law in
            order to make use of the Service as a Sender. You should use the
            Service for individual use and not on behalf of any company.
          </p>
          <p>
            <b>2.2.Others</b>
          </p>
          <p>
            You are not allowed to submit or receive a transaction on behalf of
            any other person or entity.
          </p>
          <p>
            <b>2.3.Offer and Acceptance</b>
          </p>
          <p>
            Whenever you submit any Transaction, that way you are requesting us
            to process your Transaction, it’s an offer that we may accept or
            reject at our sole discretion.
          </p>
          <h5 style={{ fontWeight: "bold" }}>3- PAYING FOR THE SERVICE</h5>
          <p>
            <b>3.1.Sending crypto</b>
          </p>
          <p>
            Disclaimer: Paypenny Services and Paypenny Token (INR D) are not
            available in the United States or any other prohibited
            jurisdictions. You acknowledge that you are solely and fully
            responsible for compliance with Indian laws, and hereby represent
            and warrant that your use of Paypenny and any transaction you carry
            out on Paypenny complies with Indian Laws. Paypenny does not solicit
            any payment or transaction from Indian users and you acknowledge
            that you are approaching Paypenny of your own will and at your own
            risk. You hereby indemnify Paypenny to the full extent of any loss
            or damage it may suffer due to any non-compliance by you with
            applicable laws.
          </p>
          <p>
            <b>3.2.Charges</b>
          </p>
          <p>
            Paypenny does not apply any charges for the Transactions done by its
            users. It lets you send crypto to the desired account from foreign
            countries depending upon the current rates applicable at that time.
          </p>
          <p>
            <b>3.3.Payment</b>
          </p>
          <p>
            In order for us to process your Transaction you authorize us to
            charge your wallet for the amount requested. If your payment fails
            you authorize us to re-try one or more times in the similar way.
          </p>
          <p>
            <b>3.4.Other Charges</b>
          </p>
          <p>
            We are not responsible for fees that may be imposed by financial
            institutions associated with your Payment Instruments. For example,
            some mastercard issuers may treat the utilization of your mastercard
            to use the Service as a “cash advance” and should impose additional
            fees and interest cost for the Transaction. Paypenny is not
            responsible for any fees, chargeback fees, or other, similar charges
            that might be imposed on you by your bank, credit card issuer, or
            other provider.
          </p>
          <h5>4- PRE-AUTHORIZED DEBIT AUTHORIZATION</h5>
          <p>
            <b>4.1. Authorization</b>
          </p>
          <p>
            Authorization:By entering your Payment mode details in our system to
            feature money in wallet, you authorize us automatically to debit
            that quantity an reflect it within the wallet for further
            transaction. This authorization shall apply to any Payment Mode
            entered into your payment profile.
          </p>
          <p>
            <b>4.3. Cancellation</b>
          </p>
          <p>
            Cancellation:You can cancel this authorization at any time by
            closing your Paypenny account. For more information on cancellation,
            you can contact our customer service.
          </p>
          <h5>5- RECEIVING A REMITTANCE</h5>
          <p>
            <b>5.1.Service Providers</b>
          </p>
          <p>
            As a Sender, you’re appointing your Recipient as your agent for the
            aim of receiving crypto transmitted through the Service.
          </p>
          <p>
            <b>5.2.Verification</b>
          </p>
          <p>
            We may perform verification of Recipients details entered by you
            while transferring the crypto. Failing which we may stop the
            transaction or Recipients could also be required to supply a
            reference number or another similar identifier related to their
            Transactions.
          </p>
          <h5>6- SERVICE RESTRICTIONS</h5>
          <p>
            <b>6.1. General</b>
          </p>
          <p>
            We may refuse any Transaction or limit the quantity to be
            transferred, either on a single transaction or aggregated basis.
            These limits could also be imposed on individual accounts or linked
            accounts. We reserve the proper at any time to switch or discontinue
            all or any part of the Service
          </p>
          <p>
            <b>6.2. Delays</b>
          </p>
          <p>
            Your Transaction could also be delayed by our effort to verify your
            identity and validate your Payment modes or thanks to failure of
            receivable at the Recipients end and otherwise suits laws or manage
            our financial risk. You will be entitled to a refund in certain
            circumstances and you’ll cancel your Transaction at any time while
            it’s pending.
          </p>
          <p>
            <b>6.3. Unauthorized Transactions</b>
          </p>
          <p>
            You may not use the Service in violation of this User Agreement or
            applicable laws, rules or regulations. It’s a violation of the User
            Agreement to use the Service for any of the following:
            sexually-oriented materials or services, gambling activities, fraud,
            money-laundering, the funding of terrorist organizations, or the
            acquisition or sale of tobacco, prescribed drugs , or other
            controlled substances; or to send crypto to a Recipient that has
            violated the User Agreement. If you employ the Service in reference
            to illegal conduct, Paypenny will report you to enforcement. We
            recommend you employ the Service to send crypto to friends and
            family and, therefore, you ought to not use the Service to send
            money to strangers.
          </p>
          <p>
            <b>6.4. No Changes</b>
          </p>
          <p>
            We generally do not let you change the details of your Transaction
            once it has been submitted to us for processing. It is your
            responsibility to make sure your Transaction details are accurate.
          </p>
          <h5>7- PERSONAL INFORMATION COLLECTION</h5>
          <p>
            Foreign law requires that we obtain, verify, and record information
            about you. We may require that you provide us with nonpublic,
            personal, identifying information. You authorize us to verify the
            information that you provide to us, including by making reference to
            credit report information obtained from foreign credit reporting
            agencies. <br /> <br />
            We may provide information about you and your Transactions to
            government authorities and law enforcement agencies If required
            during special circumstances. Your consent and authorize us to make
            any inquiries, to you or to others, which are necessary to validate
            the information that you provide to us.
          </p>
          <h5>8- ERROR RESOLUTION AND REFUNDS</h5>
          <p>
            <b>8.1. Error Resolution</b>
          </p>
          <p>
            Let us know at any time if you have any problems with the Service.
            You can contact us using the contact information at the bottom of
            our website anytime.
          </p>
          <p>
            <b>8.2. Refunds</b>
          </p>
          <p>
            You can cancel your Transaction at any time prior to its completion.
            Completion means the amount has been transferred to the receiver’s
            bank account.
          </p>
          <h5>9- INTELLECTUAL PROPERTY ACKNOWLEDGEMENT</h5>
          <p>
            You acknowledge that the Service, including the content of this
            website, text, graphics, logos, and images, as well as all other
            Paypenny copyrights, trademarks, trade names, logos, and product and
            service names are owned exclusively by Trackon Canada Private
            Limited and its trading name Paypenny. You agree not to display,
            use, copy, or modify Paypenny Intellectual Property in any manner.
          </p>
          <h5>10- DISCLAIMER OF WARRANTIES</h5>
          <p>
            We make reasonable efforts to ensure that Transactions are processed
            in a timely manner, but we make no representations, warranties or
            conditions, express or implied, regarding the time needed to
            complete processing because the Service is dependent on many factors
            outside our control.
          </p>
          <h5>11- IDEMNITY</h5>
          <p>
            You agree to indemnify and hold Paypenny, Service Providers, and
            their respective subsidiaries, officers, agents, partners, and
            employees harmless from any claim or demand.
          </p>
          <h5>12- LIMITATION OF LIABILITY</h5>
          <p>
            Paypenny shall not be liable for delays, interruptions, service
            failures, or other problems inherent in use of the internet,
            electronic communications, telecommunications networks or other
            systems or networks outside the reasonable control of Paypenny
          </p>
          <h5>13- DISPUTE RESOLUTION AND GOVERNING LAW</h5>
          <p>
            <b>13.1.Disputes with Paypenny</b>
          </p>
          <p>
            If a dispute arises between you and Paypenny, our goal is to learn
            about and address your concerns. If we are unable to address your
            concerns to your satisfaction, we will seek to provide you with a
            neutral and cost-effective means of resolving the dispute quickly.
          </p>
          <p>
            <b>13.2.Arbitration</b>
          </p>
          <p>
            Any dispute regarding this Agreement, including the validity,
            existence, binding effect, interpretation, performance, breach or
            termination, and including tort claims, may be referred to and
            finally determined, to the exclusion of the courts, by a single
            arbitrator.
          </p>
          <h5>14- COMMUNICATIONS</h5>
          <p>
            You acknowledge and consent that this User Agreement shall be
            entered into electronically. Communications may be provided to you
            at the telephone number(s) that you provide us with through (i) the
            use of autodialed or prerecorded message calls or (ii) text
            messages, subject to the requirements. The hardware and software
            requirements for access to and retention of the Communications
            associated with the Service include a personal computer or other
            device which is capable of accessing the Internet; an Internet Web
            Browser.
          </p>
          <h5>15- MISCELLANEOUS</h5>
          <p>
            <b>15.1.Entire Agreement</b>
          </p>
          <p>
            The User Agreement constitutes the entire agreement between you and
            Paypenny and governs your use of the Service, superseding any prior
            agreements between you and Paypenny.
          </p>
          <p>
            <b>15.2.No Waiver</b>
          </p>
          <p>
            The failure of Paypenny to exercise or enforce any right or
            provision of the User Agreement shall not constitute a waiver of
            such right or provision.
          </p>
          <p>
            <b>15.3.Modification</b>
          </p>
          <p>
            We may modify this User Agreement from time to time without notice
            to you, except as may be required by law. You can review the most
            current version of the User Agreement at any time by reviewing this
            website.
          </p>
          <h5>16- SECURITY</h5>
          Your security is very important to Paypenny, and we use a variety of
          security measures to make sure that your information is secure. We
          urge you to think carefully before sending crypto to anyone that you
          do not know well because in this case Paypenny will not take any kind
          of responsibility.
          <h5>17- LANGUAGE</h5>
          <p>
            This User Agreement and all related documents of Paypenny shall be
            drawn up in English only
          </p>
          <p>
            <b>
              YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THESE TERMS AND
              CONDITIONS AND AGREE TO BE BOUND THEREBY. YOU ACKNOWLEDGE AND
              AGREE THAT EACH TIME YOU SUBMIT INFORMATION OR CONDUCT ANY
              TRANSACTION IN CONNECTION WITH THE SERVICE, EACH SUCH TRANSACTION
              CONSTITUTES YOUR AGREEMENT AND INTENT TO BE BOUND BY THESE TERMS
              AND CONDITIONS
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TC;
