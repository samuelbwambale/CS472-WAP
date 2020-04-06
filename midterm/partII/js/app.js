//Part II question 2.1
const Car = {
    make: 'default',
    model: 'default',
    color: 'default',
    drive: function(speed){
        console.log(`A ${this.color} ${this.make} ${this.model} is driving at a speed of ${speed}mph`);
    },
    stop: function(){
        console.log(`A ${this.color} ${this.make} ${this.model} is stopping`);
    }
};

const redHondaAccord = Object.create(Car);
redHondaAccord.color = "Red";
redHondaAccord.make = "Honda";
redHondaAccord.model = "Accord";

redHondaAccord.drive(200);


//Part II question 2.2
const Car1 = function(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color; 
};

Car1.prototype.drive = function(speed){
    console.log(`A ${this.color} ${this.make} ${this.model} is driving at a speed of ${speed}mph`);
}

Car1.prototype.stop = function(){
    console.log(`A ${this.color} ${this.make} ${this.model} is stopping`);
}

const redHondaAccord1 = new Car1('Honda', 'Accord', 'red');
redHondaAccord1.drive(300);






// Part II question 3

function arrayUtils(){
    function multipleCounts(nums, b){
        let numbers = nums.filter(n=>(n%b == 0));
        return numbers.length;
    };
    function reverseInPlace(nums){
        var i = 0;
        var j = nums.length - 1;
        while(i < j){
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
        return nums;
    }
    return{
        multipleCounts:multipleCounts,
        reverseInPlace:reverseInPlace
    }
};
const arrayu = arrayUtils();
console.log(arrayu.reverseInPlace([1,2,3,4,5,6]));
console.log(arrayu.multipleCounts([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));





//Part II question 4
const arrayTest = [];
Array.prototype.printName = function(name){
    console.log(name);
}
arrayTest.printName("Anna H Smith");
arrayTest.printName("Bob J Harrison");
