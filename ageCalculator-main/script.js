let today = new Date();

let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let day = today.getDate();

//Function which acts when clicked on calculate button
function calculateAge() {
    let calculateBtn = document.querySelector(".input-container button");
    calculateBtn.innerHTML = '<div class="animation"><div></div><div></div><div></div></div>';

    setTimeout(() => {
        const ageInput = document.querySelector(".input-container input");
        let dateObject = new Date(ageInput.value);

        let birthYear = dateObject.getFullYear();
        let birthMonth = dateObject.getMonth() + 1;
        let birthDay = dateObject.getDate();

        let ageYear, ageMonth, ageDay;
        ageYear = todayYear - birthYear;

        if (ageInput.value === "") {
            alert("please enter your date of birth");
        } else {

            // To calculate total month
            if (todayMonth >= birthMonth) {
                ageMonth = todayMonth - birthMonth;
            } else {
                ageYear--;
                ageMonth = 12 + (todayMonth - birthMonth);
            }

            // To calculate total days
            if (day >= birthDay) {
                ageDay = day - birthDay;
            } else {
                let noOfDaysInBirthMonth = new Date(birthYear, birthMonth, 0).getDate();
                birthMonth--;
                ageDay = noOfDaysInBirthMonth + (day - birthDay);
            }

            // Decrease year if month is -ve
            if (ageMonth < 0) {
                ageMonth = 11;
                ageYear--;
            }



            displayAge = document.querySelector('#main p');

            // If the element exists, update its content; otherwise, create a new element
            if (displayAge) {
                displayAge.innerHTML = `You are <span>${ageYear}</span> years, <span>${ageMonth}</span> months, and <span>${ageDay}</span> days old.`;
            } else {
                displayAge = document.createElement('p');
                displayAge.innerHTML = `You are <span>${ageYear}</span> years, <span>${ageMonth}</span> months, and <span>${ageDay}</span> days old.`;
                document.querySelector("#main").appendChild(displayAge);
            }
        }

        calculateBtn.innerHTML = "Calculate";
    }, 1000);
}
