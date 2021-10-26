// Первое задание

let cat = {
    name: "cat",
    legs: 4,
    color: "black",
};

function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`
}

console.log(animal(cat));

// Второе задание

function Calculator() {
    this.a = 0;
    this.b = 0;  // На случай, если никто не вызовет read()

    function readANumber(name) {
        let number;
        while (true) {
            number = prompt(`Введите значение ${name}`, "");
            number = number.trim();
            if (isNaN(number) || number.length === 0) {
                alert("Некорректная запись. Введите только цифры.");
            } else {
                return +number;
            }
        }
    }

    this.read = function () {
        this.a = readANumber("a");
        this.b = readANumber("b");
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let bb = new Calculator();
bb.read();
console.log(bb.sum());
console.log(bb.mul());
