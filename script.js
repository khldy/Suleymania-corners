function checkpassword () {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const videoLinks = {
        "youssef": "https://www.youtube.com/watch?v=Fpksdschk-o",
        "jannah" : "https://www.youtube.com/watch?v=0uYA-tq6jQc",
        "yassmein": "https://www.youtube.com/watch?v=LR5WFy0UoPM",
        "rufeyda": "https://www.youtube.com/watch?v=VB3p15NJP9g",
        "fedaa": "https://www.youtube.com/watch?v=k8K0XHMxbZQ&t=108s",
        "abd": "https://www.youtube.com/watch?v=r3S3_gj78BU&list=PLdDw-NyVFhQNk7sT5nPoGNHFMn_sjtcft&index=8"
    };

    if (videoLinks[password]) {
        window.location.href = videoLinks[password];
    } else {
        errorMessage.textContent = "الباسورد مش صح جرب تاني";
        errorMessage.style.display = "block";
        document.getElementById('password').value = "";
    }
}