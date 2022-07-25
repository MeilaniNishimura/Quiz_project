let answerForm = document.getElementById('answerForm')
answerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let answerFormData = new FormData(answerForm)
    for (let question in answerKey){
        let userAnswer=answerFormData.get(question)
        console.log(question)
        if (answerKey[question] == userAnswer.toLowerCase()){
            console.log('correct')
            document.getElementById(`${question}Form`).style.color = "green"

        } else{
            console.log('incorrect')
            document.getElementById(`${question}Form`).style.color = "red"
        }
    }
    let q1Input = answerFormData.get('q1Input')
    let q2Input = answerFormData.get('q2Input')
    let q3Input = answerFormData.get('q3Input')
    let q4Input = answerFormData.get('q4Input')
    let q5Input = answerFormData.get('q5Input')
    let q6Input = answerFormData.get('q6Input')
    let q7Input = answerFormData.get('q7Input')
    let q8Input = answerFormData.get('q8Input')
    let q9Input = answerFormData.get('q9Input')
    let q10Input = answerFormData.get('q10Input')
})


let answerKey = {
    q1Input: 'the bloody baron',
    q2Input: 'bill',
    q3Input: 'xenophilius',
    q4Input: 'fawkes',
    q5Input: 'the room of requirement',
    q6Input: 'aberforth dumbledore',
    q7Input: 'beetle',
    q8Input: 'basilisk',
    q9Input: 'gold',
    q10Input: 'squib'
}

