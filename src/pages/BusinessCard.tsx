import React, { useEffect, useState } from 'react';
import ProfilePicture from "../component/ProfilePicture";
import ContactInformation from "../component/ContactInformation";
import SocialMedia from "../component/SocialMedia";
import '../style/BusinessCard.css';
import '../style/Notices.css';

const constant = require('./../constant/CommonConstant');
const _ = require("lodash");

const pageName = "Home Page";
function BusinessCard() {
    const [contact, setContact] = useState<Contact>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        let data = require('./../model/MockData.json');
        data = _.mapKeys(data, (v:any, k:any) => _.camelCase(k))
        setContact(data)
    }

    useEffect(() => {
        document.title = pageName.concat(constant.PIPE_SYMBOL).concat(constant.TITLE);
        if (!isLoading) {
            setIsLoading(true);
            fetchData();
        }
    }, [contact, isLoading]);

    return (
        <section className="profile">
            <div id="scroll-container">
                <div id="scroll-text">Notices!!: Under development.</div>
            </div>
            <div className="main-content">
                <div className="details">
                    {/*Profile picture*/}
                    <ProfilePicture profileImage={contact?.profileImage!}/>

                    {/*Information*/}
                    <ContactInformation name={contact?.name!} location={contact?.location!}/>

                    {/*Social media*/}
                    <SocialMedia socialMedia={contact?.socialMedia!}/>
                </div>
            </div>
        </section>
    );
}

export default BusinessCard;
