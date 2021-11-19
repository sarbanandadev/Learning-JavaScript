function something(great, name) {
    // function sayhi() {
    //     console.log(great, name)
    // }
    // sayhi()

    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = great + ' ' + getFirstName()
    console.log(message)
}

// sayhi() // sayhi is not defined


something('Good Morning', 'SarbaNanda Chakma')