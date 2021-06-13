window.onload = () => {
    var akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var year, month, day;

    var btnSubmit = document.getElementById("submit");

    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        year = document.getElementById("yr").value;
        month = document.getElementById("mn").value;
        day = document.getElementById("dy").value;
        displayData();

    })

    function validateDate() {
        if (month == "1" || month == "3" || month == "5" || month == "7" || month == "8" || month == "10" || month == "12") {
            return true;
        } else {
            if (month == 2) {
                if (year % 4 == 0) {
                    if (day < 28) {
                        return false;
                    }
                } else {
                    if (day > 29) {
                        return false;
                    }
                }

            }
            if (day > 30) {
                return false;
            }
        }

        return true;

    }

    function calculateDayofWeek() {
        var cc = year.substring(0, 2);
        var yy = year.substring(2, 4);


    /**
     * Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )
     */

        var dayOfWeek = ( ( (parseInt(cc/4)) -2*cc-1) + parseInt((5*yy/4) ) + parseInt((26*(month+1)/10)) + day )%7;        

        return parseInt(dayOfWeek - 1);
    }

    function displayData() {
        if (validateDate()) {
            var gender = document.getElementById("gender").value;

            var dayOfWeek = calculateDayofWeek();
            var name = "";
            if (gender.toLowerCase() == "female") {
                name = akanFemaleNames[dayOfWeek];
            } else {
                name = akanMaleName[dayOfWeek];
            }

            document.getElementById("day-birth").innerText = `Your date of birth is ${day}/${month}/${year}`;
            document.getElementById("akan-name").innerText = "Your Akan name is "+ name;

        } else {
            document.getElementById("error").innerHTML = "Invalid date";
        }
    }

}