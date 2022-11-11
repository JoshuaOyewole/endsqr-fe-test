import { useState, useEffect } from 'react'


/* 
Created this Hook to determine if an account is active or not using the user account balance as a parameter since the USER STATUS IS NOT COMING FORM THE API GIVEN 
*/

const useAccountStatus = (accountBalance: string) => {
    const [status, setStatus] = useState<string>("Inactive");

    useEffect(() => {
        switch (accountBalance) {
            case  "200":
                setStatus("Blacklisted");
                break;
    
            case "400":
                setStatus("Inactive");
                break;
    
            case "500":
                setStatus("Pending");
                break;
    
            case "600":
                setStatus("Active");
                break;
    
            default:
                setStatus("Inactive")
                break;
        }
    }, [])
    


    return [status]
}

export default useAccountStatus