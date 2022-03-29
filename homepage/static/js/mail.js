questions = document.querySelectorAll(".questions");
button = document.querySelector("#drop-down input[type=\"button\"");
dropdown = document.querySelector("#drop-down");
checker = document.querySelector("#checker");

checker.addEventListener("click",()=>{
    outer = true;
    for(i=0;i<questions.length-1;i++){
        question = questions[i];
        if(question != null){
            flag = false;
            inputs = question.querySelectorAll("input[type=\"radio\"]");
            inputs.forEach(input=>{
                if(input.checked){
                    flag = true;
                }
            });
            if(flag == false){
                alert("Select atleast one option for the Question \"" + question.querySelector("p").innerText + "\"");
                outer = false;
                break;
            }
        }
        question.classList.add("drop-down");
    }
    if(outer == true){
        table_str="<tr><th>Question</th><th>Answer</th><th>Remark</td></th></tr>";
        for(i=0;i<questions.length-1;i++){
            question = questions[i];
            if(question != null){
                what = question.querySelector("p").innerText;
                select = null;
                inputs = question.querySelectorAll("input[type=\"radio\"]");
                inputs.forEach(input=>{
                    if(input.checked){
                        select = input.value;
                    }
                });
                remark = question.querySelector(".textbox").value;
                table_str += "<tr><td>" + what + "</td><td>" + select + "</td><td>" + remark + "</td></tr>";
            }
        }
        table = document.forms[0].querySelector("table");
        table.innerHTML = table_str;
    }
    dropdown.classList.remove("drop-down");
    checker.classList.add("drop-down");
    return outer;
});

button.addEventListener("click",()=>{
    dropdown.classList.add("drop-down");
    checker.classList.remove("drop-down");
    for(i=0;i<questions.length-1;i++){
        question = questions[i];
        question.classList.remove("drop-down");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

