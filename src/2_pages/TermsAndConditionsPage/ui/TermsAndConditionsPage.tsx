import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Container} from "react-bootstrap";

export const TermsAndConditionsPage: React.FC = () => {
    return (
        <Layout className={"TermsAndConditionsPage"}>
            <Container className={"terms-container"}>
                <h1>
                    Terms and Conditions
                </h1>
                <p>
                    <b>Standard business terms</b>
                    <br/>
                    <br/>
                    <i>§ 1 Basic provisions</i>
                    <br/>
                    (1) The following business terms are applicable to all the contracts, which you conclude with us as a supplier (Schubert Music Europe GmbH) via the https://thehoffshop.myshopify.com/ website. Unless otherwise agreed upon, the inclusion, if necessary, of your own conditions is ruled out.
                    <br/>
                    (2)  A ‘consumer’ in the sense of the following regulations is every natural person who concludes a legal transaction which, to an overwhelming extent, cannot be attributed to either his commercial or independent professional activities. The term ‘businessman’ refers to every natural person, legal person or legally responsible partnership that concludes a legal transaction in pursuance of his/its independent professional or commercial activity.
                    <br/>
                    <br/>
                    <i>§ 2 Conclusion of the contract</i>
                    <br/>
                    (1) The subject-matter of the contract is the selling of products  .
                    <br/>
                    (2) As soon as you place the respective product on our website, we shall submit to you a binding offer to conclude a contract via the online shopping cart system under the conditions specified in the item description.
                    <br/>
                    (3) The purchase agreement takes place via the online shopping cart system as follows:
                    The products intended for purchase are moved to the "shopping cart". You can select the shopping cart using the appropriate buttons on the navigation bar and make changes there at any time.
                    After accessing the "Checkout" page and entering your personal data as well as the payment and shipping conditions, you are finally shown the order data again as an order overview.
                    If you use an instant payment system (e.g. PayPal/PayPal Express, Amazon Payments, instant transfer) as your payment method, you will either be taken to the order overview page in our online shop or forwarded to the website of the provider of the instant payment system.
                    If you are forwarded to the relevant instant payment system, choose and/or enter your data as appropriate. Finally, on the website of the provider of the instant payment system or, after you have been directed back to our online shop, the order data will be displayed as an order overview.
                    Before submitting the order, you have the option once more to review or change (you may also use the "Back" button on your web browser) any information on the order summary page, or to cancel the purchase.
                    By clicking the "Place order in conjunction with a liability to pay” button to submit the order, you declare acceptance of the order in a legally binding way by which the purchase agreement takes place.
                    <br/>
                    (4) The execution of the order and the sending of all the details necessitated by the conclusion of the contract take place via e-mail, in a partially-automated manner. Consequently, you have to ensure that the e-mail address that you have deposited with us is the correct one, and that the receipt of the respective e-mails is guaranteed. In particular, you have to ensure that the respective e-mails are not blocked by a SPAM filter.
                    <br/>
                    <br/>
                    <i>§ 3 Right of retention, reservation of proprietary rights</i>
                    <br/>
                    (1) You can only exercise a right of retention if the situation in question involves claims arising from the same contractual relationship.
                    <br/>
                    (2) The goods remain our property until the purchase price is paid in full.
                    <br/>
                    <br/>
                    <i>§ 4 Warranty</i>
                    <br/>
                    (1) The statutory warranty rights are applicable.
                    <br/>
                    (2) As a consumer, you are requested to promptly check the product for completeness, visible defects and transport damage as soon as it is delivered, and promptly disclose your complaints to us and the shipping company in writing. Even if you do not comply with this request, it shall have no effect on your legal warranty claims.
                    <br/>
                    (3) If a characteristic of the goods deviates from the objective requirements, the deviation shall only be deemed to be agreed if you were informed of the same by us before submitting the contractual declaration and the deviation was expressly and separately agreed between the contracting parties.
                    <br/>
                    <br/>
                    <i>§ 5 Choice of law, place of fulfilment, jurisdiction</i>
                    <br/>
                    (1) German law shall apply. This choice of law only applies to customers if it does not result in the revocation of the protection guaranteed by the mandatory provisions of the law of the country in which the respective customer’s usual place of residence is located (benefit-of-the-doubt principle).
                    <br/>
                    (2) If you are not a consumer, but a businessman, a legal entity under public law or an institutional fund governed by public law, our place of business is the place of jurisdiction as well as the place of fulfilment for all services that follow from the business relationships that exist with us. The same condition applies to situations in which you are not associated with a general place of jurisdiction in Germany or the EU, as well as situations in which the place of residence or the usual place of residence is not known at the time of commencement of proceedings. This has no bearing on the capacity to call upon the court associated with another place of jurisdiction.
                    <br/>
                    (3) The provisions of the UN Convention on Contracts for the International Sale of Goods are explicitly inapplicable.
                </p>
            </Container>
        </Layout>
    )
}