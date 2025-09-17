import react from "react";
import {useState} from "react";
import InstagramInput from "../components/InstagramInput";
import PreviewResult from "../components/PreviewResult";

const Home = () => {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleURLSubmit = async (url) => {
        setResult(null);
        setError(null);
        
        try {
            if (!url.includes("instagram.com")){
                throw new Error ("URL is invalid: only instagram links are supported")
            }

            if(url.includes("private")){
                throw new Error ("This is a private post, only public posts are supported")
            }

        const mockData =  {
            type: "video",
            title: "sample video",
            mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        };

        setResult(mockData);

        } catch (err){
            setError(err.message || "Something is wrong, try again later");
        }
    
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Instagram Video Downloader</h1>
            <InstagramInput onSubmit={handleURLSubmit} />
            { error && 
                (
                    <div className="mt-4 p-4 bg-red-100 border border-red-600 rounded text-red-700">{error}</div>
                )
            }
            <PreviewResult result={result}/>
            
        </div>
    );
}

export default Home;