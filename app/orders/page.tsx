import type { Metadata } from "next";
import { CONTACT, ExternalLink, List, PolicyPage, Section } from "../_components/policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Asian Le Orders",
  description: "How the Asian Le Orders app collects, uses and protects information.",
};

export default function OrdersPrivacyPolicy() {
  return (
    <PolicyPage appName="Asian Le Orders" effectiveDate="November 10, 2026">
      <p>
        This policy explains how {CONTACT.business} (&quot;we&quot;, &quot;us&quot;) handles
        information in the Asian Le Orders app on iOS, Android or the web (the &quot;App&quot;).
        The App is how our restaurant manages orders placed on our website: managers use it to
        accept, print, complete or cancel online orders, mark menu items as sold out, and set our
        online ordering hours. Only our restaurant managers can sign in. Accounts are created by
        us; the public cannot sign up.
      </p>

      <Section title="Information we collect">
        <p>
          <strong>About managers who use the App:</strong>
        </p>
        <List>
          <li>
            <strong>Account details:</strong> your work email address and role, and a password
            stored by Firebase Authentication (we never see it in readable form).
          </li>
        </List>
        <p>
          <strong>About customers who order on our website:</strong> the App does not collect
          customer information itself. It shows orders customers have already placed on our
          website, which include:
        </p>
        <List>
          <li>
            <strong>Contact details:</strong> the customer&apos;s name, phone number and email
            address, so we can contact them about their order.
          </li>
          <li>
            <strong>Order details:</strong> the items ordered, any special instructions, pickup
            time, totals, discounts, whether the order is paid, and the date.
          </li>
          <li>
            <strong>Rewards members:</strong> if the customer signed in to Asian Le Rewards, their
            member name and the points used or earned on the order. When an order is completed,
            the App adds the points earned to the member&apos;s account (or takes off points used
            for a discount).
          </li>
        </List>
        <p>
          The App does <strong>not</strong> process payments or collect card numbers, and it does
          not collect location, contacts, photos or advertising identifiers. It does not use
          advertising tools or track anyone across other apps or websites.
        </p>
      </Section>

      <Section title="Sound and microphone">
        <p>
          The App plays an alert sound when a new order arrives. It never records audio and does
          not use the microphone. On Android, the system may list a microphone-related permission
          because the sound library includes it; the App does not use it.
        </p>
      </Section>

      <Section title="Crash reports">
        <p>
          When the App crashes or hits an error, it sends a report to Sentry, our error-monitoring
          service, so we can fix the problem. A report includes the error, device model, operating
          system, app version and a short record of recent activity in the App before the error. We
          have set Sentry not to attach personal information such as email or IP addresses. You can
          read Sentry&apos;s privacy policy at{" "}
          <ExternalLink href="https://sentry.io/privacy/">sentry.io/privacy</ExternalLink>.
        </p>
      </Section>

      <Section title="How we use information">
        <List>
          <li>To sign managers in and limit the App to authorised accounts.</li>
          <li>To accept, prepare, print and complete online orders.</li>
          <li>To contact customers about their order.</li>
          <li>To award and redeem rewards points on completed orders.</li>
          <li>To keep sales records and find and fix problems with the App.</li>
        </List>
        <p>
          We do not sell, rent or trade personal information, and we do not use it for advertising.
        </p>
      </Section>

      <Section title="How information is stored and shared">
        <p>
          The App is built on Google Firebase (Firebase Authentication, Cloud Firestore and Cloud
          Functions), which stores and processes information on our behalf. Google may store this
          data on servers outside Canada, including in the United States. You can read Google&apos;s
          privacy information at{" "}
          <ExternalLink href="https://firebase.google.com/support/privacy">
            firebase.google.com/support/privacy
          </ExternalLink>
          .
        </p>
        <p>
          Recent orders are also saved on the device so the App can show them quickly when it
          opens. Order details are sent to our receipt printers. We only share information with
          anyone else if the law requires it.
        </p>
      </Section>

      <Section title="Security">
        <p>
          Information is sent over encrypted connections and protected by access rules so that only
          signed-in managers of our restaurant can see it. No system is perfectly secure, but we
          take reasonable steps to protect information.
        </p>
      </Section>

      <Section title="How long we keep information">
        <p>
          We keep order and sales records for as long as we need them to run the business and meet
          tax and legal requirements. We remove a manager&apos;s account when that person no longer
          works with us.
        </p>
      </Section>

      <Section title="Your choices and rights">
        <p>
          Whether you are a manager or a customer, you can contact us to ask for a copy of the
          personal information we hold about you, to correct it, or to delete it. Managers can ask
          us to delete their account at any time. We may need to keep some order records where the
          law requires it.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this policy from time to time. We will post the new version on this page and
          change the effective date above.
        </p>
      </Section>
    </PolicyPage>
  );
}
