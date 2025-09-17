import react from "react";

const TermsOfService =()=>{
    return (
        <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-2">
        This tool is provided for personal use only. By using this site, you
        agree not to use it for copyright infringement or unlawful purposes.
      </p>
      <p className="mb-2">
        We are not affiliated with Instagram. All trademarks and copyrights
        belong to their respective owners.
      </p>
      <p className="mb-2">
        We reserve the right to update or discontinue the service at any time.
      </p>
      <p className="mt-6">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
    )
}

export default TermsOfService;