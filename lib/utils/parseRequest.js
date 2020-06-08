module.exports = rawRequest => {
    //above also exports as a default
    // parseRequest takes a rawRequest (an HTTP request message). 
    const arr = rawRequest.split(' '); 

    const [method, path, , , body] = arr;
    //need to get the body 
    // \n this was returning after the fn \n\n 
    if(body.includes('\n')) {
        const arr = body.split('\n');

        return {
            method: method, 
            path: path, 
            body: arr[2]
        };
     //return object with body, method and path from rawRequest
    } else {
        return { 
            method: method,
            path: path
        }
    };
    
};

