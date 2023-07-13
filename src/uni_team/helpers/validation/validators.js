/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
export const validateEmail = (mail) => {
 let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if (regex.test(mail)) return true;
    return false;
}

export const validatePassword = (str) => {
    let exp = new RegExp('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/');
    if (exp.test(str)) return true;
    return false;
}
