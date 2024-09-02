import { useState, useEffect } from 'react';
import Loader from './Loader';

/**
 * Terms component displays the terms and conditions of the website.
 * Initially shows a loading spinner, then displays the terms and conditions content.
 *
 * @returns {JSX.Element} The rendered Terms component.
 */
const Terms = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulates data loading by setting loading state to false after component mounts
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <h1>Terms and Conditions</h1>
            <p>
              These Terms of Use and Purchase define your rights and obligations when ordering products from the Bookme website. Please read them carefully, as they constitute a binding agreement between you and Sefer Lechol Ltd. (Company No. 511067720) ("Bookme"). The terms are written in the masculine form for convenience only and refer to both men and women.

              Bookme will provide you with the products you ordered, provided that the product is in stock with Bookme and that you possess a valid credit card that can be charged and processed in Israel, and that the credit card company that issued it has approved the purchase transaction you made.

              If the products are out of stock due to circumstances unknown to the business at the time of the order, the sale will be canceled, and the consumer will be notified within one business day. If the credit card company does not approve the charge, we will not be obligated to provide the products you ordered. In this case, we will send you a suitable notification by email and refrain from charging your credit card. If you are mistakenly charged, please notify us, and we will ensure a proper refund.

              To order products via Bookme's secure server, you must enter the following details in the designated forms during the ordering process: identification number, first name, last name, phone number, delivery address, and email address.

              If this is your first time ordering products from Bookme or if you have not yet registered for our customer club, you will be asked to choose a password and username and enter them in the designated place on the website. In the future, when you wish to purchase additional products from us, you will be identified by the details you chose. This will save you the need to repeatedly fill in your personal details. You will only need to ensure that your details, as they appear on the computer screen, are still up to date. If they are not updated, please correct them so that we can fulfill your order.

              After you place the order through Bookme's secure server, you will receive an initial confirmation by email indicating that your order details have been received. Please note: this confirmation does not obligate Bookme to supply the products you ordered and only indicates that the order details have been received by the system.

              <br />
              <h4>Incorrect Orders</h4>
              In order for us to provide you with the products you ordered, your order must be received and processed correctly, including all the necessary details for delivering the products and charging you. Bookme will not supply the products you ordered if the order was not recorded correctly in our computers or if it was recorded incorrectly, even if the issue originates from Bookme's computers. If you do not receive confirmation of the order's receipt within a few days of placing it, assume that there was an issue with the order. In this case, it is recommended that you contact us via email at info@bookme.co.il or by phone at 03-5583069. We will strive to investigate the source of the issue and assist in completing the order.

              <br />
              Personal Details
              If you provide incorrect details during the order process, we cannot guarantee that the products will reach you. If the products are returned to us due to incorrect details you provided or because the package was not required, you will be charged for shipping and handling fees. Please ensure you provide accurate and current details.

              The personal details you provide and will provide during the order will be stored in Bookme's database. Although you are not legally required to provide us with these details, we cannot process your order without them. Bookme will not transfer your personal details to other parties, but it may send you, with your active consent, emails containing information about its services, promotions at Bookme, updates to the site, and the like. Additionally, Bookme may occasionally send you advertisements from selected commercial entities. If you do not wish to receive such emails, please send us an email notification.

              Bookme will use the details you provide for statistical analysis and to share information with third parties. In this case, the data will not personally identify you.

              <br />
              <h4>Delivery Time</h4>
              Bookme will deliver the products you ordered according to the type of shipping you selected. The delivery time for the products will be calculated based on business days from Sunday to Thursday and does not include Fridays, Saturdays, holiday eves, and holidays. Bookme will not be responsible for delays in the delivery of the products due to events beyond its control, such as malfunctions, delays, strikes, or suspensions in postal services, issues with computing systems or telephone systems that affect the completion of the purchase process, or email service disruptions.

              <br />
              <h4>Prices</h4>
              The prices displayed on the website include VAT.

              Bookme may update product prices on the website from time to time. The price applicable to the order you placed is the price published at the time you completed the ordering process.

              Please note: although we at Bookme make an effort to check the prices on the website, occasionally an exceptional error may occur, resulting in an incorrect price being displayed on the website. In such rare cases, the error will not obligate the website. In this case, we will contact you immediately after you place your order, inform you of the correct price of the product, and allow you to confirm whether you wish to purchase it at the correct price. If you do not confirm this within three days, or if you refuse to purchase the product at its correct price, we will not be obligated to provide it to you.

              <br />
              <h4>Promotions</h4>
              In promotions, the base price is the catalog price of the books or games, not the price after the discount, meaning that promotions cannot be combined.

              <br />
              <h4>Payment Terms</h4>
              Bookme will charge for the products you ordered and for shipping fees (if applicable) using the credit card details you provided. The credit card will be charged in a single payment unless otherwise specified.

              <br />
              <h4>Handling and Shipping Fees</h4>
              According to the order price and the type of shipping as detailed on the shipping page. Bookme may change handling and shipping fees from time to time. The applicable fee for the order you placed is the price published at the time you completed the ordering process.

              <br />
              <h4>Order Cancellation and Returns</h4>
              Returns of products must be made within 14 days of receiving the product or the disclosure document, whichever is later. For tapes, CDs, and computer software, you may return them only if you have not opened their original packaging. To return products, you must send them along with the invoice you received and a written notice of the return within these 14 days to the address: Bookme, 32 Habanai Street, Holon 58856. Cancellation of a transaction due to a defect will not incur cancellation fees. The return of the product will be at the company's expense. In the case of cancellation not due to a defect, cancellation fees of 5% or 100 NIS, whichever is lower, will apply. These cancellation fees also include the shipping cost of the product from the business to the consumer (returning the product from the consumer to the business will be at the consumer's expense).

              You are not allowed to return or exchange tapes, CDs, and computer software if their original packaging has been opened, unless they are defective. In this case, you may send Bookme the products along with a letter detailing the defect.

              <br />
              <h4>Responsibility</h4>
              There may be issues during the delivery of products, and in such cases, the website will take all necessary measures to resolve these issues. Bookme will not be responsible for delivery issues or disruptions, provided it has indicated the name and address on the package as appeared in your order.

              Bookme does not assume responsibility for the quality of the products, as it does not manufacture them. In case you purchase defective products, your only rights are to replace them or receive a refund, as detailed in these Terms of Use.

              In case of delays, Bookme will take all necessary measures to resolve the reasons for the delay and will also allow for transaction cancellation and a full refund to the consumer.

              The service on the Bookme website is provided "as is". You will have no claims, demands, or requests against Bookme regarding the service's features, capabilities, limitations, or suitability for your needs and requirements. Bookme does not guarantee that the service on the site will be uninterrupted, provided as usual or without interruptions, that it will be secure and error-free, and that it will be immune to unauthorized access to Bookme's computers, damages, malfunctions, errors - including hardware, software, or communication line issues - at Bookme or any of its suppliers.

              <br />
              <h4>Group Sales</h4>
              Group sales are dependent on the number of buyers. As long as the required number of orders to receive the group price is not met, the order is not confirmed. If, at the end of the sale, the required number of orders is not met, Bookme management may extend the sale time or cancel it entirely. The buyer's credit card will be charged only at the time of item shipment. Products purchased in a group sale cannot be returned.

              <br />
              <h4>Governing Law and Jurisdiction</h4>
              The law governing your order and this agreement is Israeli law only. Exclusive jurisdiction is granted to the competent courts in any of the district cities: Tel Aviv, Jerusalem, Haifa, Be'er Sheva, and Nazareth.

              <br />
              <h4>Privacy Statement</h4>
              Our commitment to privacy protection:
              Your privacy is important to us. To enhance the protection of your privacy, we provide this information about our privacy protection policy and about the options available to you while visiting the site and regarding our handling of information collection on the site. To ensure visitor awareness, this information appears both on the website's home page and at any point where personal information is required.

              <br />
              <h4>The Information We Collect</h4>
              On pages of the site where you can order a product or service, request information, etc., information such as: name, ID number, address, email, phone number, credit card number, etc. is required. Sometimes, you may enter information relevant to another person, for example, when ordering a gift for someone else, entering their name, ID number, email, address, phone number, etc.

              <br />
              What Do We Do With the Information?
              Information provided for the purpose of ordering a product, service, or information is used solely for the purpose of fulfilling that task and related tasks (e.g., billing the consumer, issuing a receipt, etc.). The information is not transferred to any other party, except as required to complete the task (such as to the credit card company). Information provided about another person for sending a gift is used solely for this purpose. If you send us an email, we will use the email address from which you sent it to reply to you but not for any other purpose, and we will not disclose the address to any other entity. If you wish to receive additional information, you are welcome to notify us of your request, and we will act accordingly. In any case, we will not use your details for this purpose unless you expressly request it. An information request form is attached to your email address regarding promotions. In non-identifiable information, meaning information that cannot be attributed to a specific person, we use it to improve our site and update our commercial operations and services, with such non-personally identifiable information also being transferred to other parties, including our advertisers. For example: the number of visitors to the site, the number of women registering for a specific survey on the site, etc., but not any information that personally identifies the site visitor. Of course, we do not use your payment details, whether credit card or bank account number, except for processing the payment, and we do not transfer it to any additional party except for this purpose.

              <br />
              <h4>Our Commitment to Information Security</h4>
              We prevent unauthorized access to our databases. We keep information updated and ensure proper use of data. We have implemented physical, technological, and electronic procedures to secure the information we collect on the site.

              <br />
              Contact Us
              For questions regarding privacy protection on the site, or complaints about the handling of information on the site, please contact the site's privacy officer, Mr. Udi Zaluf, at udi@bookme.co.il

              <br />
              Special Protection for Children Under 13:
              We do not collect information about anyone we know to be under the age of 13, except with parental consent.

              <br />
              <h4>Questions and Inquiries</h4>
              For inquiries and questions, please contact Bookme's service representatives via email at info@bookme.co.il
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Terms;
