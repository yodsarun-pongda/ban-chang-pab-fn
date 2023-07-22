import React, {useEffect, useState} from "react";

function ContactInformation({name, location} : Contact) {
    const [actualName, setActualName] = useState("ไม่ทราบชื่อ");

    useEffect(() => {
        if (name !== undefined) {
            setActualName(name);
        }
    }, [name])

    return (
        <React.StrictMode>
            <h1 className="contact-name">{actualName}</h1>

            <div className="location">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
                </svg>
                <p>{location?.district},&nbsp;{location?.country}</p>
            </div>
        </React.StrictMode>
    )
}

export default ContactInformation;