document.onload=()=>{
    var akanMaleName = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw","Kofi", "Kwame"];
    var akanFemaleNames = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua", "Ama"];

    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    function validateDate(){
        if(month=="1" || month=="3" || month=="5" || month=="7" || month=="8" || month=="10" || month=="12"){
            return true;
        } else {
            if(month==2){
                if(year%4==0){
                    if(day<28){
                        return false;
                    }
                }else{
                    if(day>29){
                        return false;
                    }
                }

            }
            if(day>30){
                return false;
            }
        }

        return true;

    }

    function calculateDayofWeek(){
        
    }

    function submit(){
        if(validateDate()){
            var gender = document.getElementById("gender").value;

            var dayOfWeek= calculateDayofWeek();
            if(gender.toLowerCase()=="female"){

            } else{

            }

        } else{
            document.getElementById("error").innerHTML="Invalid date";
        }
    }


    /**
     * Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )
     */

 function submit(){

 }


}