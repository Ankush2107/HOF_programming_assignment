const urls = [
    "http://www.facebook.com",
    "https://www.twitter.com",
    "http://instagram.com",
    "https://realme.com",
    "ftp://github.com",
    "http://www.linkedin.com",
    "https://www.hashnode.com",
    "http://www.stackoverflow..com",
    "https://www.leetcode.com.",
];

function isValidURL(url) {

    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\.+[a-zA-Z]+$/;

    return regex.test(url);
}



urls.forEach((url) =>{
    const isValid = isValidURL(url);
    console.log(`${url} is ${isValid ? 'valid' : 'invalid'}`);
});