const keysField = document.querySelector(".calc__keys");
let displayNow = document.querySelector(".calc__now");
let displayPrev = document.querySelector(".calc__previous");
let field = "";


keysField.addEventListener("click", (event) => {
   let btn = event.target;

   if (btn.classList.contains("keyPer")) {
      calcPercent();
   } else if (btn.classList.contains("keySqr")) {
      renderPow();
   } else if (btn.classList.contains("keyClean")) {
      clearDisplay();
   } else if (btn.classList.contains("keyDelete")) {
      renderRemoval();
   } else if (btn.classList.contains("key7")) {
      renderNumInField("7");
   } else if (btn.classList.contains("key8")) {
      renderNumInField("8");
   } else if (btn.classList.contains("key9")) {
      renderNumInField("9");
   } else if (btn.classList.contains("keyDiv")) {
      renderMathOps(" / ");
   } else if (btn.classList.contains("key4")) {
      renderNumInField("4");
   } else if (btn.classList.contains("key5")) {
      renderNumInField("5");
   } else if (btn.classList.contains("key6")) {
      renderNumInField("6");
   } else if (btn.classList.contains("keyX")) {
      renderMathOps(" * ");
   } else if (btn.classList.contains("key1")) {
      renderNumInField("1");
   } else if (btn.classList.contains("key2")) {
      renderNumInField("2");
   } else if (btn.classList.contains("key3")) {
      renderNumInField("3");
   } else if (btn.classList.contains("keyMinus")) {
      renderMathOps(" - ");
   } else if (btn.classList.contains("key0")) {
      renderNumInField("0");
   } else if (btn.classList.contains("keyDot")) {
      renderDot();
   } else if (btn.classList.contains("keyPlus")) {
      renderMathOps(" + ");
   } else if (btn.classList.contains("keyEqual")) {
      renderResult();
   }



   function calcPercent() {
      let arr = field.split(" ");
      if (arr.length <= 2) {
         field = '0';
         displayNow.innerHTML = field;
      } else {
         if (arr[2] != "") {
            arr[2] = ((arr[0] * arr[2]) / 100).toString();
            displayNow.innerHTML = field = `${arr[0]} ${arr[1]} ${arr[2]}`;
         } else {
            field = '0';
            displayNow.innerHTML = field;
         }
      }
   }

   function renderPow() {
      if (field.length < 16) {
         let arr = field.split(" ");
         if (arr.length == 1) {
            arr[0] = Math.pow(arr[0], 2);
            console.log(arr[0])
            field = `${arr[0]}`;
            displayNow.innerHTML = field;
         } else if (arr.length > 2) {
            console.log(arr)
            arr[2] = Math.pow(arr[2], 2);
            field = `${arr[0]} ${arr[1]} ${arr[2]}`;
            displayNow.innerHTML = field;
         }
      }
   }


   function clearDisplay() {
      field = "";
      displayNow.innerHTML = "0";
      displayPrev.innerHTML = "";
   }


   function renderRemoval() {
      let arr = field.split("");
      arr.pop();
      if (arr[arr.length - 1] == " ") {
         arr.pop();
      }

      field = arr.join("");
      displayNow.innerHTML = field;
      if (displayNow.innerHTML == '') {
         displayNow.innerHTML = "0";
      }
   };

   function renderResult() {

      displayPrev.innerHTML = displayNow.innerHTML;
      let arr = field.split(" ");
      let result = 0;
      let one = arr[0];
      let two = arr[2];
      let operator = arr[1];

      if (operator == "+") {
         result = +one + +two;
      } else if (operator == "-") {
         result = one - two;
      } else if (operator == "*") {
         result = one * two;
      } else if (operator == "/") {
         result = one / two;
      }

      if (result.toString().length > 9) {
         displayNow.innerHTML = result.toFixed(2);
         field = "" + result.toFixed(2);

      } else {
         displayNow.innerHTML = result;
         field = "" + result;
      }

   }


   function renderNumInField(num) {

      if (field.length < 16) {
         if (displayNow.innerHTML == "0") {
            field = num;
         } else {
            field += num;
         }
         displayNow.innerHTML = field;
      }
   }


   function renderMathOps(operator) {
      let arr = field.split(" ");
      if (arr.length == "3") {
         renderResult();
         field += operator;
         displayNow.innerHTML = field;
      }

      if (field.includes("/") || field.includes("*") || field.includes("-") || field.includes("+")) {
         return;
      } else {


         field += operator;
         displayNow.innerHTML = field;
      }


   }


   function renderDot() {

      let arr = field.split(" ");

      if (arr.length == 1) {

         if (field.includes(".")) {
            return;
         } else {
            field += ".";
            displayNow.innerHTML = field;
         }

      } else if (arr.length >= 2) {

         if (arr[2].includes(".")) {
            return;
         } else {
            field += ".";
            displayNow.innerHTML = field;
         }

      }
   }


})