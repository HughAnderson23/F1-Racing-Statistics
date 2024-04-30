import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";

const SidebarSchedule = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchRaceSchedule();
    }, []);

    // Function to convert UTC time to EST time
    const convertUTCToEST = (utcTime) => {
        // Split the time string into hours, minutes, and seconds
        const [hours, minutes, seconds] = utcTime.split(':');
    
        // Construct a new Date object with UTC time
        const utcDate = new Date();
        utcDate.setUTCHours(parseInt(hours, 10));
        utcDate.setUTCMinutes(parseInt(minutes, 10));
        utcDate.setUTCSeconds(parseInt(seconds, 10));
    
        // Convert UTC time to EST
        const estDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    
        // Return the time string in EST
        return estDate.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    };
    

    return (
        <div className="sidebar-schedule">
            <h2>Season {store.raceSchedule[0]?.season}</h2>
            {store.raceSchedule.map(race => (
                <div key={race.round} className="race-info">
                    <h5>{race.raceName}</h5>
                    <div>Date: {race.date}</div>
                    <p>Time: {convertUTCToEST(race.time)} EST</p>
                </div>
            ))}
        </div>
    );
};

export default SidebarSchedule;


