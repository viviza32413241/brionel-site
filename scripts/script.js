const name = [
  "Агарик",
  "Антипаразитарний комплекс",
  "Артротон",
  "Венорм",
  "Вітамін С",
  "Вітамін С+D3+Цинк",
  "Вітамін D3",
  "Ганодерма",
  "Гарцинія",
  "Гінкго білоба",
  "Глюкозамін, хондроїтин, МСМ",
  "Дикий Ямс",
  "Екстракт гречихи",
  "Екстракт кісточки винограду",
  "Екстракт чорного імбіру",
  "Імунувіт",
  "Кальцій жувальний полуниця",
  "Кальцій жувальний шоколад",
  "Кальцій, лецитин, таурин",
  "Клімактерон",
  "Колаген",
  "Кордіцепс",
  "Мака",
  "Мікс",
  "Монтмірол",
  "Наттокіназа",
  "Омега-3",
  "Панкреас",
  "Пилок сосни",
  "Слім дот",
  "Слім норм",
  "Спіруліна",
  "Тайрод",
  "Ферментований чорний часник",
  "Хітозан",
  "Цинк піколінат",
];
const pv = [
  14.63, 14.08, 12.23, 11.68, 10.98, 9, 9.85, 19.13, 16.03, 18.28, 18.85, 11.83,
  10.13, 18, 12.85, 13.78, 16.88, 16.88, 13.8, 11.95, 16.6, 29.53, 16.33, 32.63,
  16.43, 17.45, 12.1, 12.38, 15.75, 12.65, 11.53, 17.73, 11.25, 20.1, 23.35,
  7.88,
];
const price_p = [
  645, 621, 539, 515, 484, 397, 435, 843, 707, 806, 832, 522, 446, 794, 567,
  608, 744, 744, 609, 527, 732, 1302, 720, 1439, 725, 770, 533, 546, 695, 558,
  508, 781, 497, 886, 1030, 348,
];
const price_c = [
  677, 652, 566, 541, 508, 417, 457, 885, 742, 846, 874, 548, 468, 834, 595,
  638, 781, 781, 639, 553, 769, 1367, 756, 1511, 761, 809, 560, 573, 730, 586,
  533, 820, 522, 930, 1082, 365,
];

let parentDiv = document.querySelector("div");

for (let i = 0; i < name.length; i++) {
  const test = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");
  test.classList.add("test");

  label.textContent = name[i];
  input.setAttribute("type", "number");
  input.setAttribute("placeholder", "0");
  input.setAttribute("min", "0");
  input.setAttribute("inputmode", "none");

  label.classList.add("label");
  input.classList.add("input");
  input.classList.add("input-border");
  label.setAttribute("id", i + "n");
  input.setAttribute("id", i);

  test.appendChild(label);
  test.appendChild(input);
  parentDiv.appendChild(test);
}

function display_price_c() {
  let count = [document.getElementById("0").value];
  for (let i = 1; i < 36; i++) {
    count.push(document.getElementById(i.toString()).value);
    console.log(document.getElementById(i.toString()).value);
  }
  let res = 0;
  for (let i = 0; i < 36; i++) {
    res += price_c[i] * count[i];
  }
  document.getElementById("rescheck").innerHTML = "";
  document.getElementById("res").innerHTML = res + " грн";
}
jQuery("#price_c").on("click", function () {
  display_price_c();
});
function display_price_p() {
  let count = [document.getElementById("0").value];
  for (let i = 1; i < 36; i++) {
    count.push(document.getElementById(i.toString()).value);
    console.log(document.getElementById(i.toString()).value);
  }
  let res = 0;
  for (let i = 0; i < 36; i++) {
    res += price_p[i] * count[i];
  }
  document.getElementById("rescheck").innerHTML = "";
  document.getElementById("res").innerHTML = res + " грн";
}
jQuery("#price_p").on("click", function () {
  display_price_p();
});
function display_pv() {
  let count = [document.getElementById("0").value];
  for (let i = 1; i < 36; i++) {
    count.push(document.getElementById(i.toString()).value);
    console.log(document.getElementById(i.toString()).value);
  }
  let res = 0;
  for (let i = 0; i < 36; i++) {
    res += pv[i] * count[i];
  }
  res = Math.floor(res * 100) / 100;
  document.getElementById("rescheck").innerHTML = "";
  document.getElementById("res").innerHTML = res + " pv";
}
jQuery("#pv").on("click", function () {
  display_pv();
});
function sale() {
  let count = [document.getElementById("0").value];
  for (let i = 1; i < 36; i++) {
    count.push(document.getElementById(i.toString()).value);
  }
  let res = 0;
  for (let i = 0; i < 36; i++) {
    res += price_c[i] * count[i] - price_p[i] * count[i];
  }
  document.getElementById("rescheck").innerHTML = "";
  document.getElementById("res").innerHTML = res + " грн";
}
jQuery("#sale").on("click", function () {
  sale();
});
function check() {
  let res = "";
  for (let i = 0; i < 36; i++) {
    if (document.getElementById(i.toString()).value != "") {
      res +=
        document.getElementById(i.toString() + "n").innerHTML +
        " - " +
        document.getElementById(i.toString()).value +
        "<br>";
    }
  }
  document.getElementById("res").innerHTML = "";
  document.getElementById("rescheck").innerHTML = res;
}
jQuery("#check").on("click", function () {
  check();
});
function clear() {
  for (let i = 0; i < 36; i++) {
    document.getElementById(i.toString()).value = "";
  }
  document.getElementById("res").innerHTML = "";
  document.getElementById("rescheck").innerHTML = "";
}
jQuery("#clear").on("click", function () {
  clear();
});
// let input = document.getElementById('fileInput');

// input.addEventListener('change', function(e) {
//     let file = e.target.files[0];

//     let reader = new FileReader();
//     reader.onload = function(e) {
//     	let name=[];
//     	let pv=[];
//     	let price_p=[];
//     	let price_c=[];
//         let data = new Uint8Array(e.target.result);
//         let workbook = XLSX.read(data, { type: 'array' });

//         // Отримання першого аркуша з Excel файлу
//         let firstSheet = workbook.Sheets[workbook.SheetNames[0]];

//         // Отримання даних з аркуша
//         let excelData = XLSX.utils.sheet_to_json(firstSheet);
//         	excelData.forEach(data => {
//     		name.push(data.name);
//     		pv.push(data.pv);
//     		price_p.push(data.price_p);
//     		price_c.push(data.price_c);
//     	});
//    		console.log(name, pv, price_p, price_c)
//         console.log(excelData);
//     };

//     reader.readAsArrayBuffer(file);

// });
