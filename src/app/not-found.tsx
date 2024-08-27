"use client";

import Lottie from "react-lottie-player";
import LottieAnimation from "../../public/assets/lotties/not-found.json";
import "./not-found.css";

export default function NotFound() {
    return (
        <div className="w-full flex m-auto justify-center items-center">
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
