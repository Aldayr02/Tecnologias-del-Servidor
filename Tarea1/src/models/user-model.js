const axios = require('axios').default;

class User {

    find(){

        return new Promise((resolve, reject) => {
            
            axios.get('https://jsonplaceholder.typicode.com/users')
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
            
            axios.get('https://jsonplaceholder.typicode.com/users',{
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

            axios.post('https://jsonplaceholder.typicode.com/users', {
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

            // console.log( 'https://jsonplaceholder.typicode.com/users/' + userId);

            axios.put('https://jsonplaceholder.typicode.com/users/' + userId, {

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

            axios.delete('https://jsonplaceholder.typicode.com/users/' + userId)
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