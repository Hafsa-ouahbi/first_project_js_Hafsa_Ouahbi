let Answer = prompt("choose one : signing up / logging in / changing the password").trim().toLocaleLowerCase()
if (Answer == "signing up") {
    let dataBase = []
    //*--------------------------name
    let name = prompt("insert a valid name").trim().toLocaleLowerCase()
    let count = 0
    for (let i = 0; i < name.length; i++) {
        if (name[i] != " " && name[i] != "  ") {
            count++
        }
    }
    if (count < 5) {
        console.log("please insert a longer name")
        return
    }
    let j = 0
    while(name[j]){
        if (!((name[j] >= 'a' && name[j] <= 'z') || (name[j] >= 'A' && name[j] <= 'Z'))){
            console.log("you can't have a nuimbers or special characters in your name please insert a valid name")
            return
        }
    }
    name = name.charAt(0).toUpperCase() + name.slice(1)//to capitalize the first letter and keep the rest lowercase
    let words = name.split(" ")// to separate the words ila kano endna ktr mn kelma wehda
    let finalres = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] != "") { // if the user taps a multiple spaces it's never enter in this condioion 
            finalres.push(words[i].charAt(0).toLocaleUpperCase() + words[i].slice(1))
        }
    }
    name = finalres.join(" ")
    //*------------------------------------email
}