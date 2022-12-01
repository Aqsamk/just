

//house
this.table = 'window table';
console.log(table);

const  cleanTable = (soap) => {
    
    const innerFunction = (_soap) =>{
        console.log(`cleaning ${this.table} using ${_soap}`);
    }
    innerFunction(soap);
}
cleanTable.call(this,'some soap');

/*this.garage = {
    table: 'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};
this.garage.cleanTable();
console.log(this.garage.table);*/






class createRoom {
    constructor(name) {
        this.table = `${name}s table`;
    }
    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}
const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('John');




jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap')
