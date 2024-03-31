/*1. JavaScript-da Car classi yarating va uning konstruktori orqali brand va year xususiyatlarini o'z ichiga olsin. Keyin ushbu classdan bir nechta avtomobil obyektlarini yarating.*/

// class Car{
//     constructor(brand,year){
//         this.brand = brand;
//         this.year = year;
//      
//     }
// }

// let car1 = new Car("Shevrolet",2015);
// let car2 = new Car("Tayota",2020);
// let car3 = new Car("Nissan",2010);


// console.log(car1);
// console.log(car2);
// console.log(car3);
//=========================================================================================================================================================================

/*2. Car classini kengaytirib, ElectricCar classini yarating. ElectricCar classi Car classining barcha xususiyatlariga ega bo'lishi kerak va qo'shimcha ravishda batteryLife xususiyatini ham o'z ichiga olishi kerak.*/

// class Car{
//     constructor(brand,year){
//         this.brand = brand;
//         this.year = year;
//     }
// }

// class ElectricCar extends Car{
//     constructor(brand,year,batteryLife){
//         super(brand,year);
//         this.batteryLife = batteryLife;
//     }
// }

// let electricCar1 = new ElectricCar("Hyundai",2022,"250km");
// let electricCar2 = new ElectricCar("Tesla",2016,"360km");

// console.log(electricCar1);
// console.log(electricCar2);
//=======================================================================================================================================================================

/*3. Metodlar: Car classiga displayInfo deb nomlangan metod qo'shing, bu metod avtomobilning markasi va ishlab chiqarilgan yilini konsolga chiqaradi. Keyin ushbu metodni ElectricCar classidagi obyekt uchun ham sinab ko'ring.*/

// class Car{
//     constructor(brand,year){
//         this.brand = brand;
//         this.year = year;
//     }

//     displayInfo(){
//        return `Avtomobil Markasi: ${this.brand}, Year: ${this.year}`
//     }
// }



// class ElectricCar extends Car{
//         constructor(brand,year,batteryLife){
//             super(brand,year);
//             this.batteryLife = batteryLife;
//         }

//         displayInfo(){
//            return `Electro Avtomobil Markasi: ${this.brand}, Year: ${this.year}, Battery life: ${this.batteryLife}`
//         }
//     }

//     let car1 = new Car("Shevrolet",2016);
//     console.log(car1.displayInfo());

//     let electricCar1 = new ElectricCar("Hyundai",2022,"250km");
//     console.log(electricCar1.displayInfo());

//=======================================================================================================================================================================



/*4. Darsta korilgan usullar bilan(4 ta usulni ko'dik) html dagi taglarni textini o'zgartiring.*/

/*1-usul*/

// let item1 = document.getElementById("item1");
// console.log("O'zgarishdan oldingi xolati:", item1.textContent);
// console.log("O'zgarishdan keyingi xolati:",item1.textContent = "Alisher");



/*2-usul*/

// let item2 = document.getElementsByClassName('item2');

// [...item2].forEach((el) => {
//     console.log("O'zgartirilmagan xolati:",el.textContent);
//     console.log("O'zgartirilgan xolati:", el.textContent = "Bexruz");
// });



/*3-usul*/

// let item3 = document.getElementsByTagName('li');

// for(i=0; i<item3.length;i++){
//     console.log(item3[i].textContent ='Element')
// }



/*4-usul*/

// let item4 = document.querySelector('#item1');

// console.log("Avvalgi xolati:",item4.textContent);
// console.log("O'zgartirilgan xolati:",item4.textContent = "Avazbek");




