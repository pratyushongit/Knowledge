// Factory Pattern

function Developer(name){
    this.name = name,
    this.type = 'Developer';
}

function Tester(name){
    this.name = name,
    this.type = 'Tester';
}

function Factory(){
    this.create = function(name,type){
        switch(type){
            case 1 : return new Developer(name);
            case 2 : return new Tester(name);
            default : console.log('Invalid');
        }
    }
}

let factory = new Factory();
let dev1 = factory.create('John',1);
let test1 = factory.create('Tim',2);
console.log('FACTORY->' + dev1.name);
console.log('FACTORY->' + test1.name);

// Singleton Pattern

let Singleton = (function(){
    function ProcessManager(){
        this.numOfProcesses = 0;
    }
    let pmInstance;
    return {
        createInstance : function(){
            if(!pmInstance){
                pmInstance = new ProcessManager();
            }
            return pmInstance
        }
    }
})();

let inst1 = Singleton.createInstance();
let inst2 = Singleton.createInstance();
console.log("SINGLETON->" + (inst1 == inst2));

// Strategy Pattern

function USPS(){
    this.calculate = function(package){
        return 1.1;
    }
}

function Fedex(){
    this.calculate = function(package){
        return 2.1;
    }
}

function Strategy(){
    this.setStrategy  = function(obj){
        this.company = obj;
    }
    this.calculate = function(package){
        return this.company.calculate(package);
    }
}

let usps = new USPS();
let fedex = new  Fedex();

let package = { weight : 100};

let strategy = new Strategy();
strategy.setStrategy(usps);

console.log('STRATEGY->' + strategy.calculate(package));

// Iterator Pattern

let iteratorArr = [1,true,'John',4.7];

function Iterator(arr){
    this.arr = arr;
    this.index = 0;
    // this.index = arr.length - 1; --> Reverse Order
}

Iterator.prototype.hasNext = function(){
    return this.index < this.arr.length;
    // return this.index >= 0; --> Reverse Order
}

Iterator.prototype.next = function(){
    return this.arr[this.index++];
    // return this.arr[this.index--]; --> Reverse Order
}

let iterator = new Iterator(iteratorArr);
while (iterator.hasNext()) {
    console.log('ITERATOR->' + iterator.next());
}

// Observer Pattern

function Observer1(){
    console.log('OBSERVER-> Observer 1')
}

function Observer2(){
    console.log('OBSERVER-> Observer 2')
}

function MySubject(){
    this.observers = [];
}

MySubject.prototype.subscribe = function(obs){
    this.observers.push(obs);
}

MySubject.prototype.unsubscribe = function(obs){
    this.observers = this.observers.filter(el => {
        if(el != obs){
            return el;
        }
    });
}

MySubject.prototype.trigger = function(){
    this.observers.forEach(el=>{
        el();
    });
}

let subject = new MySubject();
subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer2);
subject.trigger();

// Proxy Pattern

function MockAPI(){
    this.getData = function(type){
        console.log('PROXY-> API CALL');
        switch(type){
            case 'banana' : return 'yellow';
            case 'apple' : return 'red';
            case 'grapes' : return 'green';
            default : console.log('Invalid');
        }
    }
}

function Proxy(){
    this.api = new MockAPI();
    this.cache = {};
    this.getData  = function(type){
        if(!this.cache[type]){
            this.cache[type] = this.api.getData(type);
        }
        return this.cache[type];
    }
}

let mockApi = new MockAPI();
let proxy = new Proxy();

console.log('PROXY-> ' + mockApi.getData('banana'));

console.log('PROXY-> ' + proxy.getData('banana'));
console.log('PROXY-> ' + proxy.getData('banana'));

// Mediator Pattern

function Chatroom(){
    this.members = {};
}

Chatroom.prototype.addMember = function(member){
    this.members[member.name] = member;
    member.chatroom = this;
}

Chatroom.prototype.send = function(message, fromMember, toMember){
    toMember.receive(message,fromMember);
}

function Member(name){
    this.name = name;
    this.chatroom = null;
}

Member.prototype.send = function(message, toMember){
    this.chatroom.send(message , this, toMember);
}

Member.prototype.receive = function(message, fromMember){
    console.log(`MEDIATOR -> From ${fromMember.name} to ${this.name} : ${message}`);
}

let chatroom = new Chatroom();

let john = new Member('John');
let tim = new Member('Tim');
let prat = new Member('Prat');

chatroom.addMember(john);
chatroom.addMember(tim);
chatroom.addMember(prat);

prat.send('Hello',tim);
john.send('Wzup',prat);

// Visitor Pattern

function Employee(name,salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype.setSalary = function(salary){
    this.salary = salary
}

Employee.prototype.getSalary = function(){
    return this.salary;
}

Employee.prototype.accept = function(fn){
    fn(this);
}

function VisitorFunc(obj){
    obj.setSalary(obj.getSalary() * 2);
}

let employee = new Employee('John',1000);
console.log('VISITOR->' + employee.getSalary());
employee.accept(VisitorFunc);
console.log('VISITOR->' + employee.getSalary());

// Facade Pattern

function Age(){
    this.year = 0;
    let calculateAge = (year)=>{
        this.year = year;
        this.age = 2020-this.year;
    }

    this.finalAge = function(year){  
        calculateAge(year);      
        return this.age;
    }
}

let age = new Age();
console.log('FACADE->' + age.finalAge(1993));