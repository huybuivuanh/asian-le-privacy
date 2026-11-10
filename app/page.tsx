import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Asian Le",
  description: "Privacy information for Asian Le Restaurant's apps.",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-12 text-[16px] leading-7 text-zinc-700">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">Asian Le Restaurant</p>
      <h1 className="mt-2 text-3xl font-bold text-zinc-900">Privacy</h1>
      <p className="mt-4">
        This site hosts the privacy policies for Asian Le Restaurant&apos;s apps. Each app links
        to its own policy from its app store listing.
      </p>
      <p className="mt-4">
        Questions about your privacy? Email{" "}
        <a className="font-medium text-zinc-900 underline" href="mailto:asianlepa@gmail.com">
          asianlepa@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
