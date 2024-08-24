"use client";

import Lottie from "react-lottie-player";
import LottieAnimation from "/public/assets/lotties/not-found";

export default function NotFound() {
    return (
        <div className="w-full flex justify-center items-center">
            <Lottie
                loop
                animationData={LottieAnimation}
                play
                style={{
                    width: "35vw",
                }}
            />
        </div>
    );
}
