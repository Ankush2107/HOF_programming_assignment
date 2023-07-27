const linkedinProfileURLs = [
    "https://www.linkedin.com/in/john_doe123",
    "https://www.linkedin.com/in/jane-doe456",
    "https://www.linkedin.com/in/sam_smith",
    "https://www.linkedin.com/in/12a3b4c",
    "https://www.linkedin.com/in/user-name_with_underscores",
    "https://www.linkedin.com/in/invalid!@#.url",
];

function isValidLinkedinURL(url) {

    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\.+[a-zA-Z]+$/;

    return regex.test(url);
}

linkedinProfileURLs.forEach((url) => {
    const isValid = isValidLinkedinURL(url);
    console.log(`${url} is ${isValid ? 'valid' : 'invalid'}`);
})