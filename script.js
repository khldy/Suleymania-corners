function checkpassword () {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const videoLinks = {
        "youssef": "https://www.youtube.com/watch?v=Fpksdschk-o",
        "jannah" : "",
        "yassmein": "",
        "rufeyda": "",
        "fedaa": "",
        "abd": ""
    };

    if (videoLinks[password]) {
        window.location.href = videoLinks[password];
    } else {
        errorMessage.textContent = "الباسورد مش صح جرب تاني";
        errorMessage.style.display = "block";
    }
}