//hi, other js!

function send(){
    number1 = document.getElementById("number1input").value;
    number2 = document.getElementById("number2input").value;
    actual_answer = parseInt(number1)*parseInt(number2)

    question = "<h4>" + number1 + " x " + number2 + "</h4>";

    input_box = "<br> Answer: <input type='text' id='input-check-box>";

    check_button = "<button class='btn btn-primary' id='check-button' onclick='checkAnswer()'>Check</button>";

    row = question + input_box + check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1input").value="";
    document.getElementById("number2input").value="";
}