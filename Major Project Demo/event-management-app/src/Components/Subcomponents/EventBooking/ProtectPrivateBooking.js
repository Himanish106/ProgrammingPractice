import React from 'react'
import GuardPrivateEventBooking from './GuardPrivateEventBooking'
import PrivateEventBooking from './PrivateEventBooking'

const ProtectedPrivateBooking = () => {
    return(
        <>
        <GuardPrivateEventBooking />
        <PrivateEventBooking />
        </>
    )
}
export default ProtectedPrivateBooking;