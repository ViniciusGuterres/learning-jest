const axios = require('axios');

const jsonPlaceholderEndPoint = 'https://jsonplaceholder.typicode.com/users';

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Joe' };
        user['lastName'] = 'Doe';

        return user;
    },
    
    fetchUser: () => axios.get(`${jsonPlaceholderEndPoint}/1`)
        .then(res => res.data)
        .catch(err => err),

    fetchUserById: userId => axios.get(`${jsonPlaceholderEndPoint}/${userId}`)
        .then(res => res.data)
        .catch(err => err),
    initDatabase: () => {
        console.log('Init database');
    },
    closeDatabase: () => {
        console.log('Closing database');
    },
};

module.exports = functions;