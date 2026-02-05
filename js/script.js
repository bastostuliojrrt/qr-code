// QR CODE GENERATOR SCRIPT
const url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#generate-btn");
const qrCodeImgContainer = document.querySelector("#qr-code-img");
const qrCodeInput = document.querySelector("#qr-input");

// event

function generateQRCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Generating QR Code...";

    // QR CODE API
    const qrCodeImg = document.createElement("img");
    qrCodeImg.src = `${url}${qrCodeInputValue}`;
    qrCodeImg.alt = "QR Code";
    
    // remove previous QR code if exists
    if(qrCodeImgContainer.firstChild){
        qrCodeImgContainer.innerHTML = "";
    }
    
    // append QR code image
    qrCodeImgContainer.appendChild(qrCodeImg);

    // once image is loaded
    qrCodeImg.onload = () => {
        qrCodeBtn.innerText = "Generated QR Code";
    }

    container.classList.add("active");

}

// generate QR code on button click
qrCodeBtn.addEventListener("click", () => {
    generateQRCode();
})

qrCodeInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        generateQRCode();
    }
});

qrCodeInput.addEventListener("keyup", (e)=>{
    if(!qrCodeInput.value && e.key === "Backspace"){
        qrCodeImgContainer.innerHTML = "";
        container.classList.remove("active");
        qrCodeBtn.innerText = "Generate QR Code";
    }
})

// END OF SCRIPT