import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Privacy Policy - UltraV Music</title>
      </Head>
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to UltraV Music. We are committed to protecting your personal information and your right to privacy.
          If you have any questions or concerns about our policy, or our practices with regards to your personal information,
          please contact us at ultrav0229@gmail.com.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you voluntarily provide to us when registering at the website, expressing an interest in obtaining information about us or our products and services, when participating in activities on the website (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.
        </p>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We only share and disclose your information in the following situations:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Compliance with Laws.</li>
          <li>Vital Interests and Legal Rights.</li>
          <li>Business Transfers.</li>
          <li>With your Consent.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
        <p className="mb-4">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have questions or comments about this policy, you may contact us at ultrav0229@gmail.com.
        </p>
      </div>
    </div>
  );
}
