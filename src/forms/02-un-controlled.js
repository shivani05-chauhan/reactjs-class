import React from "react";

const UncontrolledInput = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.inputField.value); // logs the value entered by the user
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="inputField" defaultValue="Initial value" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledInput