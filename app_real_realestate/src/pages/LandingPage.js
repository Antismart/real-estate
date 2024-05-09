import React from 'react'

const LandingPage =()=>{
    const handleButtonClick = (userType) =>{
        console.log(`User selected: ${userType}`);
    };
    return (
        <div className="landing-page">
            <h1>Donation Platform</h1>
            <p>Welcome! Let us know how you can contribute.</p>
        <div className="button-container">
            <button onClick={() => handleButtonClick('Donor')}>Donor</button> <br/>
            <button onClick={() => handleButtonClick('Victim')}>Victim</button><br/>
            <button onClick={() => handleButtonClick('Property Owner')}>Property Owner</button>
        </div>
       </div>
    );
};

export default LandingPage;