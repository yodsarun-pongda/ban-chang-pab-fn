import React from "react";

const COMMA = ",";
function Greeting() {
    const getMessage = (hour: number, minute: number) => {
        if ( hour >= 0 && hour < 4)
            return 'Good Night';
        else if ( hour >= 6 && hour < 12 )
            return 'Good Morning';
        else if ( hour === 12 && minute === 0 )
            return 'Good Morning';
        else if ( hour === 12 && minute > 0 )
            return 'Good Afternoon';
        else if ( hour === 18 && minute === 0 )
            return 'Good Afternoon';
        else if ( hour === 18 && minute > 0 )
            return 'Good Evening';
        else if ( hour > 18 && hour < 0 )
            return 'Good Evening';
    }

    let hr = new Date().getHours();
    let mi = new Date().getMinutes();
    let greeting = getMessage(hr, mi);

    return (
        <>
            {greeting}{COMMA}
        </>
    )
}

export default Greeting;