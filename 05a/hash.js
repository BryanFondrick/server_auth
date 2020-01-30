const bcrypt = require('bcryptjs');
const {MD5} = require('crypto-js');

/*bcrypt.genSalt(10,(err,salt)=>{
    if(err) return next(err);

    bcrypt.hash('password123',salt,(err,hash)=>{
        if(err) return next(err);
        console.log(hash);
    })
})*/

const secret = 'mysecretpassword';
const secretSalt = 'sdflasdfadsfs';

const user = {
    id: 1,
    token:MD5('dddkkdddd').toString() + secretSalt
}

const receivedToken = '22c260a9f0f887dd279e213fac7d1069sdflasdfadsfs'
if(receivedToken === user.token){
    console.log('move forward');
}
console.log(user);