import react from "react";
import {useState} from "react";

const InstagramInput = ({onSubmit}) => {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = async (e)=>{
        setUrl(e.target.value);
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!url.trim()) return;

        setLoading(true);
        try {
            if(onSubmit) {
                await onSubmit(url);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input type="text" placeholder="Paste your URL here" id="urlInput" value={url} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full max-w-md"/>
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">{loading ? "Fetching.." : "Fetch Media"}</button>

            {loading && (
                <div className="mt-2 flex items-center space-x-2">
                    <div className="w-5 h-5 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    <span className="text-gray-600">Fetching Media..</span>
                </div>
            )}
        </form>
    );

};

export default InstagramInput;