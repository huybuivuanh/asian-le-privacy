import type { Metadata } from "next";
import { CONTACT, ExternalLink, List, PolicyPage, Section } from "../_components/policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Asian Le POS",
  description: "How the Asian Le POS app collects, uses and protects information.",
};

export default function PosPrivacyPolicy() {
  return (
    <PolicyPage appName="Asian Le POS" effectiveDate="November 9, 2026">
      <p>
        This policy explains how {CONTACT.business} (&quot;we&quot;, &quot;us&quot;) handles
        information in the Asian Le POS app on iOS, Android or the web (the &quot;App&quot;). The
        App is our point-of-sale system. Only our staff use it, to take dine-in and takeout orders,
        track payments, send orders to the kitchen and apply customer rewards. Staff accounts are
        created by us; the public cannot sign up.
      </p>

      <Section title="Information we collect">
        <p>
          <strong>About staff who use the App:</strong>
        </p>
        <List>
          <li>
            <strong>Account details:</strong> your name, work email address and role (staff or
            admin), and a password stored by Firebase Authentication (we never see it in readable
            form).
          </li>
          <li>
            <strong>Work activity:</strong> which staff member took or changed an order.
          </li>
        </List>
        <p>
          <strong>About customers, entered by staff:</strong>
        </p>
        <List>
          <li>
            <strong>Order details:</strong> the items ordered, table number, pickup time, totals,
            discounts, how the order was paid, and the date.
          </li>
          <li>
            <strong>Takeout contact details:</strong> the customer&apos;s name and phone number, so
            we can contact them about their order and recognise returning customers. We also keep a
            count of their orders and how much they have spent.
          </li>
          <li>
            <strong>Rewards members:</strong> when a customer uses Asian Le Rewards, staff can look
            up their name, phone number and points balance, and add or redeem points on the order.
          </li>
        </List>
        <p>
          The App does <strong>not</strong> process card payments or collect card numbers, and it
          does not collect location, contacts or advertising identifiers. It does not use
          advertising tools or track anyone across other apps or websites.
        </p>
      </Section>

      <Section title="Camera">
        <p>
          The App asks for camera access only to scan a customer&apos;s rewards QR code. Scanning
          happens on the device. The App does not take, save or upload photos or video.
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
          <li>To sign staff in and limit the App to authorised staff.</li>
          <li>To take, prepare, print and complete orders.</li>
          <li>To contact takeout customers about their order and remember returning customers.</li>
          <li>To award and redeem rewards points.</li>
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
          Some data, such as the menu, staff list and customer list, is also saved on the device so
          the App keeps working without an internet connection. Order details are shared with our
          kitchen displays and receipt printers. We only share information with anyone else if the
          law requires it.
        </p>
      </Section>

      <Section title="Security">
        <p>
          Information is sent over encrypted connections and protected by access rules so that only
          signed-in staff of our restaurant can see it. The App also returns to a fresh screen after
          a period of inactivity. No system is perfectly secure, but we take reasonable steps to
          protect information.
        </p>
      </Section>

      <Section title="How long we keep information">
        <p>
          We keep order and sales records for as long as we need them to run the business and meet
          tax and legal requirements. We keep customer contact details until the customer asks us to
          remove them, and we remove a staff account when that person no longer works with us.
        </p>
      </Section>

      <Section title="Your choices and rights">
        <p>
          Whether you are a staff member or a customer, you can contact us to ask for a copy of the
          personal information we hold about you, to correct it, or to delete it. Staff can ask us
          to delete their account at any time. We may need to keep some order records where the law
          requires it.
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
