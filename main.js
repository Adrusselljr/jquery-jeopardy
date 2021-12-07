const main = async () => {

    //Load JSON data
    const httpResponse = await fetch('jeopardy.json')
    const data = await httpResponse.json()

    // Query elements
    const two = document.querySelector("#two")
    const four = document.querySelector("#four")
    const six = document.querySelector("#six")
    const eight = document.querySelector("#eight")
    const ten = document.querySelector("#ten")
    const score = document.querySelector("#score")
    const question = document.querySelector("#question")
    const answer = document.querySelector("#answer")
    const submitForm = document.querySelector("#form")

    // Set defaults
    let totalScore = 0
    score.innerText = `YOUR SCORE: $${totalScore}`

    // Get random object from JSON array
    let randObj = data[Math.ceil(Math.random() * data.length - 1)]

    // Event listener for $200
    two.addEventListener('click', () => {

        while(randObj.value !== "$200") {
            randObj = data[Math.ceil(Math.random() * data.length - 1)]
        }
        console.log(randObj)
        question.innerText = `${randObj.question}?`

    })

    // Event listener for $400
    four.addEventListener('click', () => {

        while(randObj.value !== "$400") {
            randObj = data[Math.ceil(Math.random() * data.length - 1)]
        }
        question.innerText = `${randObj.question}?`

    })

    // Event listener for $600
    six.addEventListener('click', () => {

        while(randObj.value !== "$600") {
            randObj = data[Math.ceil(Math.random() * data.length - 1)]
        }
        question.innerText = `${randObj.question}?`

    })

    // Event listener for $800
    eight.addEventListener('click', () => {

        while(randObj.value !== "$800") {
            randObj = data[Math.ceil(Math.random() * data.length - 1)]
        }
        question.innerText = `${randObj.question}?`

    })

    // Event listener for $1000
    ten.addEventListener('click', () => {

        while(randObj.value !== "$1,000") {
            randObj = data[Math.ceil(Math.random() * data.length - 1)]
        }
        question.innerText = `${randObj.question}?`

    })

    // Event listener for submit
    submitForm.addEventListener('click', e => {

        e.preventDefault()

        if(answer.value.toLowerCase() === randObj.answer.toLowerCase()) {
            
            question.innerText = "CORRECT!"
        }

    })

}
main()