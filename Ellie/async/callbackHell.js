'use strict';

class DataStorage {
    loginData (id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'elina' && password === '1234') ||
                (id === 'hoomin' && password === '1234')) {
                    onSuccess(id);
            } else {
                    onError(new Error(' Wrong data'));
            }
        }, 2000);
    }
    adminData (id, onSuccess, onError) {
        setTimeout(()=> {
            if (id === 'elina') {
                onSuccess({id:'elina', admin:'admin'})
            } else {
                onError (new Error('Admin is not access'));
            }
        }, 1000);
    }
}

const dataStorage = new DataStorage();
const id = prompt('enter your ID');
const password = prompt('enter your PW');
dataStorage.loginData(
    id,
    password,
    id => {
        dataStorage.adminData(
            id,
            idWithAdmin => {
                alert(`Hello ${idWithAdmin.id}, you have a ${idWithAdmin.admin} ACCESS`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)