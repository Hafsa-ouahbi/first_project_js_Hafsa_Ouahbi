class Person {
    constructor(name, age, password, email) {
        this.name = name
        this.age = age
        this.password = password
        this.email = email
    }
}
let Answer = prompt("choose one : signing up / logging in / changing the password").trim().toLocaleLowerCase()
let dataBase = []
if (Answer == "signing up") {
    //*----------------------------------name---------
    let name ;
    while(true){// to keep asking until the name is valid
    name = prompt("insert a valid name :").trim().toLocaleLowerCase()
    let count = 0
    for (let i = 0; i < name.length; i++) {
        if (name[i] !== " ") {
            count++
        }
    }
    if (count < 5) {
        alert("please insert a longer name")
        continue //ask again
    }

    let j = 0
    let invalid = false //nftardo rah password shih yaeni machi invalid wlkin valis 
    while (name[j]) {
        if (!((name[j] >= 'a' && name[j] <= 'z') || (name[j] >= 'A' && name[j] <= 'Z') || name[j] == " ")) {
            alert("you can't have a nuimbers or special characters in your name please insert a valid name")
            invalid = true // db bsah rah invalid
            break
        }
        j++
    }
    if(invalid)continue // if invalid is true starts again
    let words = name.split(" ")// to separate the words ila kano endna ktr mn kelma wehda
    let finalres = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] != "") { // if the user taps a multiple spaces it's never enter in this condioion 
            finalres.push(words[i][0].toLocaleUpperCase() + words[i].slice(1))
        }
    }
    name = finalres.join(" ")
    break //ila kan kolchy howa hadak kanbrikiw loup
}
    // let newPerson = new Person(name, email, password);
    // dataBase.push(name)
    // console.log(dataBase)
    //*------------------------------------email---------
    let email = prompt("insert a valid email :").trim().toLowerCase()
    
}