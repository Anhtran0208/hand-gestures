import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebCam = () => {
    // const webcamRef = useRef<Webcam>(null)
    const [showWebcam, setShowWebcam] = useState(false)

    const handleClick = () => {
        setShowWebcam(!showWebcam)
    }
    return (
        <>
        <button onClick={handleClick}>
            {showWebcam ? 'Close webcam' : 'Enable webcam'}
        </button>
        {showWebcam && <Webcam />}
        </>
        
    )
}
export default WebCam