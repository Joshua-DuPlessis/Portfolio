import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "AWS re/start graduate",
                    "Cloud Practitioner",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
            }}
        />
    );
}

export default Type;
