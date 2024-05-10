import React from "react";
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";

const Users = () => {

    useConfirmLoggedIn();

    return (
        <div>
            <h1>
                This is the Users page.
            </h1>
        </div>
    )
};

export default Users;


