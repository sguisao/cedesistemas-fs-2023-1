// Función fecha
//crt + shif + f
const getAge = (yearOfBirth) => {

    const currentYear = (new Date()).getFullYear();
    return currentYear - yearOfBirth;

}
console.log(getAge(1989))