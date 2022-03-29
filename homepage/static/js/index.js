boxes = document.querySelectorAll("input");
place = ""
boxes.forEach(box =>{
    box.addEventListener("focus",()=>{
        place = box.getAttribute("placeholder");
        box.setAttribute("placeholder","");
    });
    box.addEventListener("blur",()=>{
        box.setAttribute("placeholder",place);
        if(box.name === "quantity"){
            re = /[0-9]+/;
            if(!(re.test(box.value)) && box.value!=""){
                alert("Enter Number for the Quantity");
                box.value = "";
                box.focus();
            }
        }
        else if(box.name === "date" || box.name === "woidate"){
            re = /\d\d\d\d-\d\d-\d\d/
            if(!(re.test(box.value)) && box.value!=""){
                alert("Enter a valid date");
                box.value = "";
                box.focus();
            }
        }
    })
});

document.forms[0].onsubmit = ()=>{
    if(select.value === "None"){
        alert("Select an product type");
    }
};
