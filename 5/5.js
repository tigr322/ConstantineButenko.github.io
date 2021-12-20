function click1() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count");
    let result = document.getElementById("result");
    let toPrice = price[0].value;
    let toCount = count[0].value;
    let f1 = toCount.match(/^\d+$/);
    let f2 = toPrice.match(/^\d+$/);
    if(f1 !== null && f2 !== null) {
    result.innerHTML = parseInt(price[0].value) * parseInt(count[0].value);
    }
    else if(f2 === null && f1 !== null ){
    result.innerHTML = "Введите число в поле - цена !";
    }
    else if(f1 === null && f2 !== null) {
      result.innerHTML = "Введите число в поле - количество !";
    }
    else if(f1 === null && f2 === null) {
      result.innerHTML = "Вводите числа в оба поля !";
    }
    return false;
  }

 function onClick() {
    alert("Done");
  }
  
  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("calculateResult");
    b.addEventListener("click", onClick);
  });