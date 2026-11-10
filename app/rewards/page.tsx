import type { Metadata } from "next";
import { CONTACT, ExternalLink, List, PolicyPage, Section } from "../_components/policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Asian Le Rewards",
  description: "How the Asian Le Rewards app collects, uses and protects your information.",
};

export default function RewardsPrivacyPolicy() {
  return (
    <PolicyPage appName="Asian Le Rewards" effectiveDate="November 9, 2026">
      <p>
        This policy explains how {CONTACT.business} (&quot;we&quot;, &quot;us&quot;) handles your
        information when you use the Asian Le Rewards app on iOS, Android or the web (the
        &quot;App&quot;). The App lets you join our loyalty program, earn and redeem points on your
        orders, and view your points history.
      </p>

      <Section title="Information we collect">
        <p>When you create an account and use the App, we collect:</p>
        <List>
          <li>
            <strong>Account details:</strong> your name, email address and phone number. Your phone
            number identifies you as a member when you visit the restaurant.
          </li>
          <li>
            <strong>Sign-in information:</strong> your password if you sign up with email (we never
            see or store it in readable form), or your Google account&apos;s name and email if you
            choose Sign in with Google.
          </li>
          <li>
            <strong>Rewards activity:</strong> your points balance and a history of points earned
            and redeemed, including the order number, the order subtotal points were earned on, the
            discount applied, and the date.
          </li>
        </List>
        <p>
          We do <strong>not</strong> collect your location, contacts, photos, payment card details
          or advertising identifiers. The App does not use analytics or advertising tools, and it
          does not track you across other apps or websites.
        </p>
      </Section>

      <Section title="How we use your information">
        <List>
          <li>To create and manage your rewards account and sign you in.</li>
          <li>To show your membership QR code so staff can find your account at checkout.</li>
          <li>To add points for your purchases, apply rewards you redeem, and show your history.</li>
          <li>To send account emails you request, such as a password reset link.</li>
          <li>To prevent fraud and misuse of the rewards program.</li>
        </List>
        <p>
          We do not sell, rent or trade your personal information, and we do not use it for
          advertising.
        </p>
      </Section>

      <Section title="How your information is stored and shared">
        <p>
          The App is built on Google Firebase (Firebase Authentication, Cloud Firestore and Cloud
          Functions), which stores and processes your information on our behalf. Google may store
          this data on servers outside Canada, including in the United States. You can read
          Google&apos;s privacy information at{" "}
          <ExternalLink href="https://firebase.google.com/support/privacy">
            firebase.google.com/support/privacy
          </ExternalLink>
          .
        </p>
        <p>
          Our restaurant staff can see your name, phone number and points balance in our
          point-of-sale system so they can award and redeem points. We only share your information
          with anyone else if the law requires it.
        </p>
      </Section>

      <Section title="Security">
        <p>
          Your information is sent over encrypted connections and protected by access rules so that
          only you, and the systems and staff that run the rewards program, can see your account. No
          system is perfectly secure, but we take reasonable steps to protect your information.
        </p>
      </Section>

      <Section title="How long we keep your information">
        <p>
          We keep your information while your account is open. When you delete your account, your
          account details, points balance and points history are permanently deleted.
        </p>
      </Section>

      <Section title="Your choices and rights">
        <List>
          <li>
            <strong>Delete your account:</strong> open the App, go to <strong>Profile</strong>, tap{" "}
            <strong>Delete account</strong> and confirm. This permanently removes your account and
            all of its data. You can also ask us to delete it by email.
          </li>
          <li>
            <strong>Access or correct your information:</strong> you can see your details and
            history in the App, or contact us for a copy or a correction.
          </li>
          <li>
            <strong>Withdraw consent:</strong> you can stop using the App and delete your account at
            any time.
          </li>
        </List>
      </Section>

      <Section title="Children">
        <p>
          The App is not intended for children under 13, and we do not knowingly collect information
          from them. If you believe a child has given us information, contact us and we will delete
          it.
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
