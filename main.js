const main = async () => {

    //Load JSON data
    const httpResponse = await fetch('jeopardy.json')
    const data = await httpResponse.json()

    // Query elements
    const two = $("#twos")
    const four = $("#fours")
    const six = $("#sixs")
    const eight = $("#eights")
    const ten = $("#tens")
    const score = $("#score")
    const question = $("#question")
    const answer = $("#answer")
    const submitForm = $("#form")

    // Set randomObject globally
    let randomObject

    // Set score
    let getSavedScore = localStorage.getItem('savedScore')
    if(getSavedScore === null) {
        getSavedScore = 0
        score.text(`YOUR SCORE: $${getSavedScore}`)
    }
    else {
        score.text(`YOUR SCORE: $${getSavedScore}`)
    }

    // Helper function for click listeners
    const helpClick = value => {

        // Get random object from JSON array
        randomObject = data[Math.ceil(Math.random() * data.length - 1)]
        while(randomObject.value !== value) {
            randomObject = data[Math.ceil(Math.random() * data.length - 1)]
        }
        console.log(randomObject)
        question.text(`${randomObject.question}?`)

    }

    // Event listener for $200
    two.on('click', e => {

        if($(e.target).hasClass("disable")) {

        }
        else {
            helpClick("$200")
            $(e.target).text("")
            $(e.target).addClass("disable")
        }     

    })

    // Event listener for $400
    four.on('click', e => {

        if($(e.target).hasClass("disable")) {

        }
        else {
            helpClick("$400")
            $(e.target).text("")
            $(e.target).addClass("disable")
        }

    })

    // Event listener for $600
    six.on('click', e => {

        if($(e.target).hasClass("disable")) {

        }
        else {
            helpClick("$600")
            $(e.target).text("")
            $(e.target).addClass("disable")
        }

    })

    // Event listener for $800
    eight.on('click', e => {

        if($(e.target).hasClass("disable")) {

        }
        else {
            helpClick("$800")
            $(e.target).text("")
            $(e.target).addClass("disable")
        }

    })

    // Event listener for $1000
    ten.on('click', e => {

        if($(e.target).hasClass("disable")) {

        }
        else {
            helpClick("$1,000")
            $(e.target).text("")
            $(e.target).addClass("disable")
        }

    })

    // Event listener for submit
    submitForm.on('submit', e => {

        e.preventDefault()

        // Helper functions
        const correct = () => {
            getSavedScore = Number(getSavedScore) + Number(newValue)
            score.text(`YOUR SCORE: $${getSavedScore}`)
            question.text("CORRECT!")
            answer.val("")
            localStorage.setItem('savedScore', getSavedScore)
        }

        const incorrect = () => {
            getSavedScore = Number(getSavedScore) - Number(newValue)
            score.text(`YOUR SCORE: $${getSavedScore}`)
            question.text(`INCORRECT! Correct answer was: ${randomObject.answer}`)
            answer.val("")
            localStorage.setItem('savedScore', getSavedScore)
        }

        let value = randomObject.value

        // Drop '$' and ','
        let newValue = ""
        for(let i = 0; i < value.length; i++) {
            if(value[i] === "$" || value[i] === ",") {
                continue
            }
            else {
                newValue += value[i]
            }
        }

        if(answer.val().toString().toLowerCase() === randomObject.answer.toString().toLowerCase()) {
            correct()
        }
        else {
            incorrect()
        }

    })

}
main()