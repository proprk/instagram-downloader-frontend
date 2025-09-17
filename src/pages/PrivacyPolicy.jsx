import react from "react";

const PrivacyPolicy = () => {
     return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-2">
                We respect your privacy. This tool does not store or collect any
                Instagram media. All downloads are processed directly from public
                Instagram URLs provided by you.
            </p>
            <p className="mb-2">
                We do not log personal information. We may use third-party services
                (e.g., Google AdSense, analytics) which may collect anonymized data.
            </p>
            <p className="mb-2">
                By using this site, you consent to our Privacy Policy.
            </p>
            <p className="mt-6">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
     );
};

export default PrivacyPolicy;