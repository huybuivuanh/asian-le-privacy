import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Asian Le Rewards",
  description: "How the Asian Le Rewards app collects, uses and protects your information.",
};

const CONTACT = {
  business: "Asian Le Restaurant",
  address: "635 Branion Drive, Prince Albert, SK S6V 2R9, Canada",
  email: "asianlepa@gmail.com",
  phone: "(306) 764-7799",
};

const EFFECTIVE_DATE = "November 9, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      {children}
    </section>
  );
}

export default function RewardsPrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 text-[16px] leading-7 text-zinc-700 sm:py-16">
      <header className="mb-10 space-y-2">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">Asian Le Rewards</p>
        <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
        <p className="text-sm text-zinc-500">Effective {EFFECTIVE_DATE}</p>
      </header>

      <div className="space-y-10">
        <p>
          This policy explains how {CONTACT.business} (&quot;we&quot;, &quot;us&quot;) handles
          your information when you use the Asian Le Rewards app on iOS, Android or the web
          (the &quot;App&quot;). The App lets you join our loyalty program, earn and redeem points
          on your orders, and view your points history.
        </p>

        <Section title="Information we collect">
          <p>When you create an account and use the App, we collect:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Account details:</strong> your name, email address and phone number. Your
              phone number identifies you as a member when you visit the restaurant.
            </li>
            <li>
              <strong>Sign-in information:</strong> your password if you sign up with email (we
              never see or store it in readable form), or your Google account&apos;s name and
              email if you choose Sign in with Google.
            </li>
            <li>
              <strong>Rewards activity:</strong> your points balance and a history of points
              earned and redeemed, including the order number, the order subtotal points were
              earned on, the discount applied, and the date.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> collect your location, contacts, photos, payment card
            details or advertising identifiers. The App does not use analytics or advertising
            tools, and it does not track you across other apps or websites.
          </p>
        </Section>

        <Section title="How we use your information">
          <ul className="list-disc space-y-2 pl-6">
            <li>To create and manage your rewards account and sign you in.</li>
            <li>To show your membership QR code so staff can find your account at checkout.</li>
            <li>To add points for your purchases, apply rewards you redeem, and show your history.</li>
            <li>To send account emails you request, such as a password reset link.</li>
            <li>To prevent fraud and misuse of the rewards program.</li>
          </ul>
          <p>We do not sell, rent or trade your personal information, and we do not use it for advertising.</p>
        </Section>

        <Section title="How your information is stored and shared">
          <p>
            The App is built on Google Firebase (Firebase Authentication, Cloud Firestore and Cloud
            Functions), which stores and processes your information on our behalf. Google may store
            this data on servers outside Canada, including in the United States. You can read
            Google&apos;s privacy information at{" "}
            <a
              className="font-medium text-zinc-900 underline"
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              firebase.google.com/support/privacy
            </a>
            .
          </p>
          <p>
            Our restaurant staff can see your name, phone number and points balance in our
            point-of-sale system so they can award and redeem points. We only share your
            information with anyone else if the law requires it.
          </p>
        </Section>

        <Section title="Security">
          <p>
            Your information is sent over encrypted connections and protected by access rules so
            that only you, and the systems and staff that run the rewards program, can see your
            account. No system is perfectly secure, but we take reasonable steps to protect your
            information.
          </p>
        </Section>

        <Section title="How long we keep your information">
          <p>
            We keep your information while your account is open. When you delete your account, your
            account details, points balance and points history are permanently deleted.
          </p>
        </Section>

        <Section title="Your choices and rights">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Delete your account:</strong> open the App, go to <strong>Profile</strong>,
              tap <strong>Delete account</strong> and confirm. This permanently removes your account
              and all of its data. You can also ask us to delete it by email.
            </li>
            <li>
              <strong>Access or correct your information:</strong> you can see your details and
              history in the App, or contact us for a copy or a correction.
            </li>
            <li>
              <strong>Withdraw consent:</strong> you can stop using the App and delete your account
              at any time.
            </li>
          </ul>
        </Section>

        <Section title="Children">
          <p>
            The App is not intended for children under 13, and we do not knowingly collect
            information from them. If you believe a child has given us information, contact us and
            we will delete it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. We will post the new version on this page
            and change the effective date above.
          </p>
        </Section>

        <Section title="Contact us">
          <p>Questions or requests about your privacy can be sent to:</p>
          <address className="not-italic">
            {CONTACT.business}
            <br />
            {CONTACT.address}
            <br />
            Email:{" "}
            <a className="font-medium text-zinc-900 underline" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <br />
            Phone: {CONTACT.phone}
          </address>
        </Section>
      </div>
    </main>
  );
}
