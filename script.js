const angka = document.getElementsByClassName("item");
const inputBox = document.getElementById("input");
let angka1 = "0";
let angka2 = "0";
let operasi = "";

for(let i = 0; i < angka.length; i++){

          angka[i].addEventListener("click", function(){
                    if(angka[i].innerText === "+"){
                        angka1 = inputBox.value;
                        operasi = "+";
                        inputBox.value = "0";
                    } else if(angka[i].innerText === "-"){
                        angka1 = inputBox.value;
                        operasi = "-";
                        inputBox.value = "0";
                    } else if(angka[i].innerText === "/"){
                        angka1 = inputBox.value;
                        operasi = "/";
                        inputBox.value = "0";
                    } else if(angka[i].innerText === "*"){
                        angka1 = inputBox.value;
                        operasi = "*";
                        inputBox.value = "0";
                    } else if(angka[i].innerText === "%"){
                        angka1 = inputBox.value;
                        operasi = "%";
                        inputBox.value = "0";
                    }

                    else if(angka[i].innerText === "="){
                            angka2 = inputBox.value;
                            if (operasi === "+"){
                                inputBox.value = parseInt(angka1) + parseInt(angka2);
                            }
                            if(operasi === "-"){
                                inputBox.value = parseInt(angka1) - parseInt(angka2);
                            }
                            if(operasi === "/"){
                                inputBox.value = parseInt(angka1) / parseInt(angka2);
                            }
                            if(operasi === "*"){
                                inputBox.value = parseInt(angka1) * parseInt(angka2);
                            }
                            if(operasi === "%"){
                                inputBox.value = parseInt(angka1) % parseInt(angka2);
                            }
                    } else {
                        if(inputBox.value === "0"){
                            inputBox.value = angka[i].innerText
                            } else {
                                      inputBox.value = inputBox.value + angka[i].innerText
                            }
                    }   
          })
    }
const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    inputBox.value ="0"
    angka1 = 0
    angka2 = 0
});