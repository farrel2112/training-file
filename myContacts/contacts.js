class MyContacts {
    constructor(name, sex, airtel, libertis, phoneNumber, whatsapp) {
        this.name = name;
        this.sex = sex;
        this.airtel = airtel;
        this.libertis = libertis;
        this.phoneNumber = phoneNumber;
        this.whatsapp = whatsapp;
    }
    numHasWhatsapp() {
        var wh = [];
        for (var i = 0; i < phoneBook.length; i++) {
            var nums = phoneBook[i];
            if (nums.whatsapp) return wh.push(nums);
        }
    }
}
var phoneBook = [
    new MyContacts("Aaron", "male", true, true, [62219694, 77938885], false),
    new MyContacts("Abo", "male", true, true, [77120615, 66762699], true),
    new MyContacts("Ahmed", "male", true, true, [622822103, 74969599], true),
    new MyContacts("Adeba", "male", false, true, [66650985], true),
    new MyContacts("Adoumaga", "male", true, true, [60161505], true),
    new MyContacts("Ah", "male", false, true, [62780907], false),
    new MyContacts("Aicha", "female", false, true, [66721168], false),
    new MyContacts(
        "Akandas Areno",
        "male",
        true,
        true,
        [74677626, 66285609],
        true,
    ),
    new MyContacts("Akens", "male", false, true, [62576267]),
    new MyContacts("Alain Jepang", "male", true, false, [77272560], true),
    new MyContacts("Alan Mouendzi", "male", true, false, [77888962], true),
    new MyContacts("Alban", "male", true, false, [77765639], true),
    new MyContacts("Alban pk7", "male", false, true, [62363464], true),
    new MyContacts("Alex", "male", true, false, [77688071], true),
    new MyContacts("Alex Kouima", "male", false, true, [66374657], false),
    new MyContacts("Alex pk7", "male", false, true, [62183055], true),
    new MyContacts("Alino", "male", true, false, [77393970], true),
    new MyContacts("Amar", "male", true, false, [77870957], false),
    new MyContacts("captain America", "male", false, true, [77661603], true),
    new MyContacts("André", "male", false, true, [62237961], true),
    new MyContacts("Andrea", "female", true, false, [74169363], true),
    new MyContacts("Andrea Lékélé", "female", true, false, [77674495], true),
    new MyContacts("Anelka Sola", "male", false, false, [677784204], true),
    // new MyContacts ('','',,,[],),
    // new MyContacts ('','',,,[],),
    // new MyContacts ('','',,,[],),
    // new MyContacts ('','',,,[],),
    // new MyContacts ('','',,,[],),
    // new MyContacts ('','',,,[],),
];

document.body.innerHTML = phoneBook
    .map(
        (nums) =>
            `
	<div class="myNumbers">
		<h2>${nums.name}</h2>
		<p>Sexe : ${nums.sex}</p>
		<p>Airtel : ${nums.airtel}</p>
		<p>Libertis : ${nums.libertis}</p>
		<p>Numéros : ${nums.phoneNumber.join(" / ")}</p>
		<p>whatsapp : ${
            nums.whatsapp
                ? "Ce contact possède un numéro whatsapp"
                : " Ce contact n'utilise pas whatsapp"
        }</p>
	</div>
	`,
    )
    .join(" ");

var numHasLibertis = phoneBook.filter(function (elm) {
    if (elm.libertis) {
        return true;
    }
});

var numHasAirtel = phoneBook.filter(function (zain) {
    if (zain.airtel) {
        return true;
    }
});
var bothHouses = phoneBook.filter(function (both) {
    if (both.libertis && both.airtel) {
        return true;
    }
});
var femaleHasWhatsapp = phoneBook.filter(function (female) {
    if (female.whatsapp && female.sex == "female") {
        return true;
    }
});

// console.log(numHasWhatsapp)
console.log(numHasLibertis);
console.log(numHasAirtel);
console.log(bothHouses);
console.log(femaleHasWhatsapp);
console.log(phoneBook.numHasWhatsapp());
