export default function Exam() {
  //   const person = { name: "Timur", age: 25, city: "Tashkent" };

  //   for (let key in person) {
  //       console.log(key + ": " + person[key]);
  //     }
  //   timur();

  //   function timur() {
  //     console.log("declaration");
  //   }
  //   const expression = function () {
  //     console.log("Expression");
  //   };
  //   expression();
  //   const arrow = () => {
  //       console.log("arrow");
  //     };
  //     arrow()

  //   const person = {
  //     name: "Timur",

  //     declaration: function () {
  //       console.log(this); // "Timur"
  //     },

  //     arrow: () => {
  //       console.log(person); // undefined yoki window (chunki lexical this)
  //     },
  //   };

  //   person.declaration(); // Timur
  //   person.arrow(); // undefined

  //   function createCounter() {
  //     let count = 0; // Tashqi (outer) scope

  //     return function () {
  //       // Ichki funksiya
  //       count++; // Tashqi o‘zgaruvchiga kirish!
  //       return count;
  //     };
  //   }

  //   const counter1 = createCounter();
  //   const counter2 = createCounter();

  //   console.log(counter1()); // 1
  //   console.log(counter1()); // 2
  //   console.log(counter1()); // 3

  //   console.log(counter2()); // 1   (alohida hisoblagich!)
  function salomBer(ism) {
    console.log("Salom, " + ism + "!");
  }

  // Callback funksiya
  function callback() {
    console.log("Men callbackman! Ish tugadi.");
  }

  // Biz callbackni boshqa funksiyaga beramiz
  function ishlash(ism, callbackFunc) {
    console.log("Ish boshlandi...");
    salomBer(ism);

    callbackFunc(); // ← Bu yerda callback chaqiriladi
  }

  ishlash("Timur", callback);

  const number = [1, 2, 3, 4, 5, 6];
  const forEach = number.forEach((num) => {
    console.log(num * 2);
  });
  const map = number.map((num) => num * 2);
  console.log(forEach);
  console.log(map);
}
