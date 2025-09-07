import react from "react";

const PreviewResult = ({result})=> {

    if(!result) return;

    return (
        <div className="">
            <h1 className="text-lg font-semibold mb-2">{result.title}</h1>

            {
                result.type == "video" ? (
                    <video src={result.mediaUrl} className="w-full rounded-lg mb-2"/>
                ) : (
                    <img src={result.media} alt={result.title} className="w-full rounded-lg mb-2" />
                )
            }

            <a href={result.mediaUrl} className="ineline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg-2">
                Download
            </a>

        </div>
    );
};

export default PreviewResult;