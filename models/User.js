class User {

    constructor(name, gender, birth, county, email, password, photo, admin){

        this._name = name
        this._gender = gender
        this._birth = birth
        this._county = county
        this._email = email
        this._password = password
        this._photo = photo
        this._admin = admin
        this._register = new Date()

    }

    get register(){
        return this._register

    }

    get name(){
        return this._name
    }

    get gender(){
        return this._gender

    }

    get birth(){

        return this._birth
    }

    get county(){
        return this._county

    }

    get email(){
        return this._email
    
    }

    get password(){
        return this._password
    }

    get photo(){
        return this._photo
    }

    get admin(){
        return this._admin
    }
        
    set photo(value){
        this._photo = value
    }
}