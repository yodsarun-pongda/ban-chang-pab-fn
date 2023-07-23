import * as React from 'react';

function ProfilePicture ({profileImage}: Contact) {
    return (
        <React.StrictMode>
            <img src={profileImage?.img} alt={profileImage?.titleName} className="contact-pic"/>
        </React.StrictMode>
    )
}

export default ProfilePicture;