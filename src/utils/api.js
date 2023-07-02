import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export function login  (requestBody , cb) {
    
    axios.post(`${baseUrl}/auth/login`, requestBody)
    .then((data)=>{
        cb(data.data)
    }).catch((err)=>{
        console.log(err)
    })

}

export function register(requestBody , cb) {

    axios.post(`${baseUrl}/auth/register`, requestBody)
    .then((data)=>{
        cb(data.data)
    }).catch((err)=>{
        console.log(err)
    })

}

export function googleaccount (code , cb){
    const data = code;
    let settings = {
        headers: {
            'Authorization': localStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
        }
    }
    axios.post(`${baseUrl}/cloud/add-drive-account`, data, settings)
    .then(data=>{
        cb(data);
    })
    .catch(err=>{
        console.log(err);
    }) 

}

export function getFiles(cloud_id , cb){
    let settings = {
        headers: {
            'Authorization': localStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
        }
    }
    axios.get(`${baseUrl}/cloud/get-files-drive?cloud_id=${cloud_id}`, settings)
    .then(data=>{
        cb(data.data);
    })
    .catch(err=>{
        console.log(err);
    })

}