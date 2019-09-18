regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regexp.test(str);

}

let zipCode = "03201 - 2150";
console.log(is_usZipCode(zipCode));
zipCode = "7892";
console.log(is_usZipCode(zipCode));