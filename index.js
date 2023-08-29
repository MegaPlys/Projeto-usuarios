var name = document.querySelector('#exampleInputName')
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
var birth = document.queryCommandValue('#exampleInputBirth')
var country = document.querySelector('#exampleInputCountry')
var email = document.querySelector('#exampleInputEmail')
var password = document.querySelector('#exampleInputPassword')
var photo = document.querySelector('#exampleInputFile')
var admin = document.querySelector('#exampleInputAdmin')

var fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(function(field, index){

    if (field.name == "gender"){
        if (field.checked){
            console.log("SIM", field)
        } 
    } else {
        console.log("NÃO")
    }

//  console.log(field.id, field.name, field.ariaValueMax, field.checked, index)

});