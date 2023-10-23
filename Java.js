
function calculateCompatibility() {
  console.log("calculateCompatibility()");
  const DESIRED_RESPONSE = [5,4,5,5,5]

  // Get the current values of the dropdown controls.
  let questions1Response = document.getElementById('q1').selectedOptions[0].value;
  let questions2Response = document.getElementById('q2').selectedOptions[0].value;
  let questions3Response = document.getElementById('q3').selectedOptions[0].value;
  let questions4Response = document.getElementById('q4').selectedOptions[0].value;
  let questions5Response = document.getElementById('q5').selectedOptions[0].value;


  // Optionally log the values associated with question 1 through 3 to the console.
  console.log("Question 1 Answers:")
  console.log(document.getElementById('q1').selectedOptions[0].text)
  console.log(document.getElementById('q1').selectedOptions[0].value)
  console.log(questions1Response)

  console.log("Question 2 Answers:")
  console.log(document.getElementById('q2').selectedOptions[0].text)
  console.log(document.getElementById('q2').selectedOptions[0].value)
  console.log(questions2Response)

  console.log("Question 3 Answers:")
  console.log(document.getElementById('q3').selectedOptions[0].text)
  console.log(document.getElementById('q3').selectedOptions[0].value)
  console.log(questions3Response)

  console.log("Question 4 Answers:")
  console.log(document.getElementById('q4').selectedOptions[0].text)
  console.log(document.getElementById('q4').selectedOptions[0].value)
  console.log(questions4Response)

  console.log("Question 5 Answers:")
  console.log(document.getElementById('q5').selectedOptions[0].text)
  console.log(document.getElementById('q5').selectedOptions[0].value)
  console.log(questions5Response)

  // Todo: Scores
  let question1Compatibility = 5 - Math.abs(questions1Response - DESIRED_RESPONSE[0])
  let question2Compatibility = 5 - Math.abs(questions2Response - DESIRED_RESPONSE[1])
  let question3Compatibility = 5 - Math.abs(questions3Response - DESIRED_RESPONSE[2])
  let question4Compatibility = 5 - Math.abs(questions4Response - DESIRED_RESPONSE[3])
  let question5Compatibility = 5 - Math.abs(questions5Response - DESIRED_RESPONSE[4])

  let totalCompatibility = question1Compatibility+question2Compatibility+question3Compatibility+question4Compatibility+question5Compatibility

  let compatibilityPercent = (totalCompatibility/25)*100


  document.getElementById("q1r").innerHTML = "Q1 Compatibility is " +question1Compatibility
  document.getElementById("q2r").innerHTML = "Q2 Compatibility is " +question2Compatibility
  document.getElementById("q3r").innerHTML = "Q3 Compatibility is " +question3Compatibility
  document.getElementById("q4r").innerHTML = "Q4 Compatibility is " +question4Compatibility
  document.getElementById("q5r").innerHTML = "Q5 Compatibility is " +question5Compatibility


  console.log(compatibilityPercent)

  document.getElementById("Compatibility").innerHTML = "Your Total Compatibility is " +totalCompatibility


  if (compatibilityPercent < 50) { 
  document.getElementById("Perfect Match").innerHTML = "No Chance at a match!"
} else if (compatibilityPercent < 75){
  document.getElementById("Perfect Match").innerHTML = "Has potencial but most likely not!"
} else if (compatibilityPercent < 101){
  document.getElementById("Perfect Match").innerHTML = "WE ARE A MATCH!"
}



}
