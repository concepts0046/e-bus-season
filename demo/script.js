function takevalue(event) {
    event.preventDefault(); // Prevent form submission and page refresh

    var redDiv = document.createElement("div");
    redDiv.classList.add("red-div");

    var mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div");

    var leftColumnDiv = document.createElement("div");
    leftColumnDiv.classList.add("left-column-div");

    var rightColumnDiv = document.createElement("div");
    rightColumnDiv.classList.add("right-column-div");

    var paymentDiv = document.createElement("div");
    paymentDiv.classList.add("payment-div");

    //payment btn
    var paymentBtn = document.createElement("a")
    paymentBtn.textContent = "Log In";
    paymentBtn.classList.add("payment-btn");
    paymentBtn.setAttribute("href", "log in page.html");

    //get QR button
    // var QrBtn = document.createElement("a")
    // QrBtn.textContent = "Get";
    // QrBtn.classList.add("QR-btn");
    // QrBtn.setAttribute("href", "https://www.google.com");

    // var qrDiv = document.createElement("div");
    // qrDiv.classList.add("qr-code");

    // display full name
    var name = document.getElementById("fullName").value;
    var outputElement = document.createElement("p");
    outputElement.textContent = "Full Name : " + name;
    outputElement.classList.add("submission-message");


    var paragraph = document.createElement("p"); // Create a <p> element for additional text
    paragraph.textContent = "Registration Successful";
    paragraph.classList.add("additional-text"); // Add a class for styling

    // loging paragarph
    var paymentParagraph = document.createElement("p"); // Create a <p> element for additional text
    paymentParagraph.textContent = "Log in to your accont";
    paymentParagraph.classList.add("payment-text");

    // //get QR code paragarph
    // var QRParagraph = document.createElement("p"); // Create a <p> element for additional text
    //     QRParagraph.textContent = "Get the QR code";
    //     QRParagraph.classList.add("QR-text");

    leftColumnDiv.appendChild(paragraph); // Append the paragraph to the leftColumnDiv
    leftColumnDiv.appendChild(outputElement); // Append the output element to the leftColumnDiv

    // Display Image
    // var imageElement = document.createElement("img");
    // imageElement.src = ""; // Replace with the actual path to your image
    // imageElement.classList.add("qr-img"); // Add a class for styling

    // rightColumnDiv.appendChild(imageElement);

    // starting point display
    var startingPoint = document.getElementById("startingpoint").value;
    var startingPointOutput = document.createElement("p");
    startingPointOutput.textContent = "Starting Point: " + startingPoint;
    startingPointOutput.classList.add("submission-message");

    // ending point display
    var endingPoint = document.getElementById("endingpoint").value;
    var endingPointOutput = document.createElement("p");
    endingPointOutput.textContent = "Ending Point: " + endingPoint;
    endingPointOutput.classList.add("submission-message");

    // display distance
    var distance = document.getElementById("distance").value;
    var distanceOutput = document.createElement("p");
    distanceOutput.textContent = "Distance: " + distance;
    distanceOutput.classList.add("submission-message");

    // display username
    var username = document.getElementById("username").value;
    var usernameOutput = document.createElement("p");
    usernameOutput.textContent = "Username: " + username;
    usernameOutput.classList.add("submission-message");


    leftColumnDiv.appendChild(startingPointOutput);
    leftColumnDiv.appendChild(endingPointOutput);
    leftColumnDiv.appendChild(distanceOutput);
    leftColumnDiv.appendChild(usernameOutput);

    paymentDiv.appendChild(paymentParagraph);
    paymentDiv.appendChild(paymentBtn);
    // paymentDiv.appendChild(QRParagraph);
    // paymentDiv.appendChild(QrBtn);



    mainDiv.appendChild(leftColumnDiv);
    mainDiv.appendChild(rightColumnDiv);
    // qrDiv.appendChild(imageElement);

    // rightColumnDiv.appendChild(qrDiv);

    redDiv.appendChild(paragraph);
    redDiv.appendChild(mainDiv);
    redDiv.appendChild(paymentDiv);

    document.getElementById("form_container").innerHTML = ""; // Clear the form container
    document.getElementById("form_container").appendChild(redDiv); // Append the redDiv to the form container


    // const wrapper = document.querySelector(".wrapper");
    // const qrInput2 = wrapper.querySelector(".text2");
    // const generateBtn = wrapper.querySelector(".generate-btn");
    // const qrImg = wrapper.querySelector(".qr-img");
    // let preValue = "";

    // generateBtn.addEventListener("click", (event) => {
    //     event.preventDefault(); // Prevent form submission
    //     let qrValue = qrInput2.value.trim();
    //     if (!qrValue || preValue === qrValue) return;
    //     preValue = qrValue;
    //     generateBtn.innerText = "Generating QR Code...";
    //     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    //         qrValue
    //     )}`;
    //     qrImg.addEventListener("load", () => {
    //         wrapper.classList.add("active");
    //         generateBtn.innerText = "Generate QR Code";
    //     });
    // });

    // qrInput2.addEventListener("keyup", () => {
    //     if (!qrInput2.value.trim()) {
    //         wrapper.classList.remove("active");
    //         preValue = "";
    //     }
    // });

    generateQRCode(username); // Generate QR code based on the username
}
