import react from "react";
import {useState} from "react";
import InstagramInput from "../components/InstagramInput";
import PreviewResult from "../components/PreviewResult";

const Home = () => {

    const [result, setResult] = useState(null)

    const handleURLSubmit = async (url) => {
        console.log("Instagram URL :" , url);
        //Fake data to pretend as responce from backend
        const mockData =  {
            type: "video",
            title: "sample video",
            mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        };
        setResult(mockData);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Instagram Video Downloader</h1>
            <InstagramInput onSubmit={handleURLSubmit} />
            <PreviewResult result={result}/>
        </div>
    );
}

export default Home;