import React, { useEffect, useState } from "react";
import * as GreetingConstant from './../constant/GreetingMessage';
import * as CommonConstant from './../constant/CommonConstant';


function Greeting() {
    const [greeting, setGreeting] = useState("Hello");
    const getMessage = (hour: number) => {
        GreetingConstant.TIME_GREETINGS.map((obj, i) => {
            if (hour >= obj.time) {
                setGreeting(obj.message);
                return;
            }
        });
    }

    useEffect(() => {
        getMessage(new Date().getHours());
    }, []);

    return (
        <>
            {greeting}{CommonConstant.COMMA}
        </>
    )
}

export default Greeting;