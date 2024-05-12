import React from 'react'
import GuardPublicEventBooking from './GuardPublicEventBooking';
import PublicEventBooking from './PublicEventBooking';


const ProtectedPublicBooking = () => {
    return(
        <>
        <GuardPublicEventBooking />
        <PublicEventBooking />
        </>
    )
}
export default ProtectedPublicBooking;