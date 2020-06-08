module.exports = rawRequest => {
  //above also exports as a default
  // parseRequest takes a rawRequest (an HTTP request message). 
  const arr = rawRequest.split(' '); 

  const [method, path] = arr;
  const [, body] = rawRequest.split('\r\n\r\n');

  // console.log(body);
     
  // \n this was returning after the fn \n\n 
  if(body) {
    return {
      method, 
      path,
      body
    };
    //return object with body, method and path from rawRequest
  } else {
    return { 
      method: method,
      path: path
    };
  }
    
};

