import React from "react";

function SocialMedia({socialMedia}: Contact) {
    return(
        <React.StrictMode>
            <div className="contact">
            {socialMedia?.map(function (obj, i) {
                return <div className="col-4" key={"social-" + i}>
                    <img src={obj.img} alt={obj.name}/>
                    <a title={obj.descriptions} href={obj.url} >{obj.descriptions}</a>
                </div>
            })}
            </div>
        </React.StrictMode>
    )
}

export default SocialMedia;