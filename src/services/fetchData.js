export const uploadFile = async(formDataObj) => { 
    const response = await fetch(`http://localhost:8080/api/upload`, { 
        method: "POST", 
     
        body: formDataObj
    })
    return response;
}