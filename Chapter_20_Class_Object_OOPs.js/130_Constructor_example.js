class car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }
}

let hyndai_i10 = new car("i10", "Hatchback", 2020);
console.log(hyndai_i10.name);
console.log(hyndai_i10.model);
console.log(hyndai_i10.year);