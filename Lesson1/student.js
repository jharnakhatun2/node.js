const getName = () =>{
    return "Jharna Khatun" ;
}

const getAge = () =>{
    return 25;
}

const cgpa = 3.12;

//function module export
exports.name = getName;
exports.getAge = getAge;
//variable export
exports.result = cgpa;


//another way for export module
module.exports = {
    getName,
    getAge,
    cgpa,
}

// export korar another way
exports.getNames = () =>{
    return " Hello Bangladesh"
}