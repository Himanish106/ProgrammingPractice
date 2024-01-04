import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:"62px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* This syntax means, If we initially look to our app.js we will see that initially the state of setAlert usestate is null. So if we do not handle this case we will definitely face an error. Now this syntax means that if props.alert evaluates to be null then the and condition will not work. If it is not null then the and condition will work. */}
            <strong>{capitalize(props.alert.type)}:&nbsp;
            </strong>{props.alert.msg}
        </div>}
        </div>

    )
}

export default Alert
