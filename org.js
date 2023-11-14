class Staff{
    constructor(staffId,staffName,startDate,staffLevel){
        this.staff_id=staffId;
        this.staff_name=staffName;
        this.start_date=startDate;
        this.staff_level=staffLevel;
    }
}// end of Staff class

class Executive extends Staff{
    constructor(staffId,staffName,startDate,staffLevel){
        super(staffId,staffName,startDate,staffLevel);
       this.staff_level="Executive";
    }
}//end of class Executive

class Manager extends Staff{
    constructor(staffId,staffName,startDate,staffLevel){
        super(staffId,staffName,startDate,staffLevel);
        this.staff_level="Manager";
    }
}// end of class Manager

class Worker extends Staff{
    constructor(staffId,staffName,startDate,staffLevel,division,manager){
        super(staffId,staffName,startDate,staffLevel);
        this.staff_level="Worker";
        this.division=division;
        this.manager=manager;
    }
}// end of Worker class
class Division{
    constructor(divName,executive){
        this.div_name=divName;
        this.div_exective=executive;
    }
}// end of Dicision class

// creating Executive
const execitive1=new Executive('E001','Exc1','12-03-2023');
const executive2=new Executive('E002','Exc2','14-09-2020');
const executive3=new Executive('E003','Exc3','09-09-2022');

//creating Division

const division1=new Division('Devision1',executive2);
const division2=new Division('Division2',execitive1);
const division3=new Division('Division3',execitive1);
const division4=new Division('Division4',executive3);
const division5=new Division('Division5',executive3);

//creating Manger

const manager1=new Manager('M001','Mng1','13-09-2023');
const manager2=new Manager('M002','Mng2','13-10-2000');
const manager3=new Manager('M003','Mng3','31-09-2022');

// creating Workers

const worker1=new Worker('W001','Wok1','12-12-2002','Worker',division1,manager1);
const worker2=new Worker('W002','Wok2','12-10-2022',division2,manager2);
const worker3=new Worker('W003','Wok3','12-12-2021',division1,manager1);
const worker4=new Worker('W004','Wok4','12-12-2002',division3,manager1);
const worker5=new Worker('W005','Wok5','12-12-2002',division2,manager2);
const worker6=new Worker('W006','Wok6','12-12-2002','Worker',division3,manager3);
const worker7=new Worker('W007','Wok7','12-12-2002',division2,manager3);
const worker8=new Worker('W008','Wok8','12-12-2002',division1,manager1);

console.log(worker1.staff_id);
console.log(worker1.staff_name);
console.log(worker1.division.div_name);
console.log("==========");
console.log(worker6.division.div_name);
console.log(worker6.division.div_exective.staff_name);
console.log(worker1.manager.staff_name);