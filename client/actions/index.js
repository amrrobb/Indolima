import axios from 'axios';

const baseUrl = 'http://localhost:4000'

export const loginUser = async (input) => {
    try {
        const {email, password} = input
        const {data} = await axios.get(baseUrl + '/users')

        let validUser
        data.forEach(user => {
            if (user.email === email && user.password === password) {
                validUser = user
            }
        })

        return validUser

    }
    catch (err) {
        console.log(err);
    }
}

export const registerUser = async (input) => {
    try {
        const {email, password} = input
        let dataRegister = {email, password}
        const res = await axios({
            url: baseUrl + '/users', 
            method: 'POST', 
            data: dataRegister
        })

        localStorage.access_token = 'loginSuccess'
        return res


    }
    catch (err) {
        console.log(err);
    }
}