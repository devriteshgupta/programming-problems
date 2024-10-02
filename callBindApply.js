let name = {
    firstname: "Ritesh",
    lastname: "Gupta",
    printFullName: function () {
        console.log(this.firstname + " " + this.lastname)
    }
}

name.printFullName();