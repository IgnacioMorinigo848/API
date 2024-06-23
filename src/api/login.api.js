export const login = async (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        email: email,
        password: password
    });

    console.log("Payload being sent:", raw);
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    try {
        let response = await fetch("http://localhost:3000/auth/signin", requestOptions);
        if (!response.ok) {
            let errorDetails = await response.json();
            console.log("Error details:", errorDetails);
            throw new Error(`Network response was not ok: ${response.statusText}. Details: ${errorDetails.message}`);
        }
        let jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error during the fetch request:", error);
        throw error;
    }
};
