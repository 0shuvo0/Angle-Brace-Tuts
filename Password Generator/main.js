const include_AZ = document.querySelector('.caps');
const include_az = document.querySelector('.smalls');
const include_09 = document.querySelector('.nums');
const include_syms = document.querySelector('.syms');
const length = document.querySelector('.length');
const btn = document.querySelector('.btn');
const display = document.querySelector('.display');

const chars_AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const chars_az = 'abcdefghijklmnopqrstuvwxyz'
const chars_09 = '0123456789'
const chars_syms = '!@#$%^&*()_+-=[]{}|;\':",./<>?'

btn.addEventListener('click', function(){
    let pwd_chars = ''
    let len = length.value
    if(include_AZ.checked){
        pwd_chars += chars_AZ
    }
    if(include_az.checked){
        pwd_chars += chars_az
    }
    if(include_09.checked){
        pwd_chars += chars_09
    }
    if(include_syms.checked){
        pwd_chars += chars_syms
    }
    
    let pwd = generatePassword(pwd_chars, len)
    
    display.innerText = pwd
})

function generatePassword(pwd_chars, len){
    let pwd = ''
    for(let i = 0; i < len; i++){
        pwd += pwd_chars[Math.floor(Math.random() * pwd_chars.length)]
    }
    return pwd
}