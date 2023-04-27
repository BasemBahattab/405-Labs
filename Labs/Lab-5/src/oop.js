class person  {
    constructor(first_name, last_name, year_of_birth) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.year_of_birth = year_of_birth;
    }
    
    getFullName(){
        return this.first_name + " " + this.last_name;
    }

    getYearBirth(){
        return this.year_of_birth;
    }

    getAge(){
        return 2023 - this.year_of_birth;
    }
}


function createNewPerson(){
    let FName = document.getElementById("first-name").value;
    let LName = document.getElementById("last-name").value;
    let Ybirth = document.getElementById("year_of_birth").value;
    
    if(Ybirth < 1900 && Ybirth > 2024){
        alert("The year of birth must be between 2023 > birth date > 1900");
        return;
    } else{
        let newPerson = new person(FName, LName, Ybirth);
        updateTheProfile(newPerson.getFullName(), newPerson.getYearBirth(), newPerson.getAge());
        
        alert("New person has been created under name: " + newPerson.getFullName() + " and birth in " + newPerson.getYearBirth() + " Year which makes the person age is: " + newPerson.getAge());
    }
}

function updateTheProfile(name, year, age){
    let nameFetch = name;
    let yearFetch = year + " Year";
    let ageFetch = age + " Year";


    let nameSpan = document.getElementById("person-full-name").innerHTML = nameFetch;
    let yearSpan = document.getElementById("person-YBirth").innerHTML = yearFetch;
    let ageSpan = document.getElementById("person-age").innerHTML = ageFetch;
}