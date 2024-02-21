const axios = require('axios').default;
require('dotenv').config();
const url = process.env.URL;

class User {

    find(){

        return new Promise((resolve, reject) => {
            
            axios.get(url)
            .then((response) => {

                const { data } = {...response}
                // console.log(data);
                // reject(data);
                resolve(data);

            }).catch((e) => { 

                reject(data); 

            });

            });
    }

    findById(userId){
        
        return new Promise((resolve, reject) => {
            
            axios.get(url,{
                params: {
                    id: userId
                }
            }).then((response) => {

                const { data } = {...response}
                // console.log(data);
                // reject(data);
                resolve(data);

            }).catch((e) => { 

                reject(data); 

            });

        });

    }

    upload(){
        return new Promise((resolve, reject) => {

            axios.post(url, {
                firstName: 'Astorias',
                lastName: 'Abysswalker'
              })
              .then(function (response) {
                const { data } = {...response};
                // console.log(data);
                resolve(data)
                // reject(data);
              })
              .catch(function (e) {
                reject(data);
              });

        })
    }

    uploadPut(userId){
        return new Promise((resolve, reject) => {

            console.log( url + userId);

            axios.put(url + userId, {

                firstName: 'Gwyn',
                lastName: 'The Fire Lord'
                
            })
              .then(function (response) {
                const { data } = {...response};
                // console.log(response);
                resolve(data)
                // reject(data);
            })
            .catch(function (e) {
                const { data } = {...e};
                // console.log(e);
                reject(data);
              });

        });
    }

    remove(userId){
        return new Promise((resolve, reject) => {

            axios.delete(url + userId)
            .then((response) => {
                const { data } = {...response};
                console.log(response);
                resolve(data);

            }).catch((e) => {
                console.log(e);
                reject(e);
            });

        });
    }

}

module.exports = User;