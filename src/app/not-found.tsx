"use client";

import Lottie from "react-lottie-player";
import LottieAnimation from "../../public/assets/lotties/not-found.json";
import "./not-found.css";

export default function NotFound() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 id="construct" className="mt-24 mb-10">
                <span>공</span>
                <span>사</span>
                <span>중</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </h1>

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
