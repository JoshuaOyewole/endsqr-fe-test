import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";


const UserDetails = () => {
    const params = useParams();

    return (
        <>
        <h1>User Details</h1>
        <h3> User ID: {params.id}</h3>
        </>
        
    )

}

export default UserDetails