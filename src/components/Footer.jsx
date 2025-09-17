import react from "react";

import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-5 text-gray-300 mt-10">
            
            <div className="container mx-auto px-4 flex flex-col">
                <p className="text-sm mb-4 md:mb-0">
                   © {new Date().getFullYear()} Insta Downloader. All rights reserved.
                </p>
                <div>
                    <Link to="privacy-policy" className="px-2 text-blue">Privacy Policy</Link>
                    <Link to="terms-of-service" className="px-2">Terms of Serive</Link>
                    <Link to="dmca" className="px-2">DMCA</Link>
                    <Link to="contact" className="px-2">Contact</Link>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;