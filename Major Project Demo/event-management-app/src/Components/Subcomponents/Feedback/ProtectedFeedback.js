import React from 'react'
import GuardFeedback from './GuardFeedback'
import FeedbackPage from './FeedbackPage'

const ProtectedFeedback = () => {
    return(
        <>
        <GuardFeedback />
        <FeedbackPage />
        </>
    )
}
export default ProtectedFeedback;