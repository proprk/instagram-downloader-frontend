import react from "react";

const DMCA = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">DMCA / Takedown Policy</h1>
            <p className="mb-2">
                We respect the intellectual property rights of others. If you believe
                that your copyrighted work has been shared or linked to on this site
                without authorization, please submit a takedown request.
            </p>
            <p className="mb-2">
                Send your request to:{" "}
                <a
                href="mailto:your-email@example.com"
                className="text-blue-600 underline"
                >
                your-email@example.com
                </a>
            </p>
            <p className="mb-2">
                Include in your request: your contact info, link(s) to the content, and
                proof of ownership.
            </p>
        </div>
    )
}

export default DMCA;