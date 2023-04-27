const ratingButtons = document.getElementsByClassName("btn-rating");
const submitButton = document.getElementById("btn-submit");
const ratingContainer = document.getElementById("rating-container");
const thankyouContainer = document.getElementById("thank-you-container");
thankyouContainer.style.display = "none";
let ratingPoints = 0;

for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        if(current.length > 0){
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";     
        ratingPoints = ratingButtons[i].innerHTML;
        console.log(ratingPoints);

    });
}

submitButton.addEventListener("click", function(){
    ratingContainer.style.display = "none";
    thankyouContainer.style.display = "block";
    document.getElementById("point").innerHTML = `You selected ${ratingPoints} out of 5`;
});