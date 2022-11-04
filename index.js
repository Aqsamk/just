localStorage.setItem('name','bob');
class User {
    static countUsrs = 0

    constructor (username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
        User.countUsrs += 1; 
    }
    static countUsers(){
        console.log(`Number of registered user are ${User.countUsrs}`);
    }

    register(){
        console.log(this.username + ' is now registered.');

    }

}
class Member extends User {
    constructor(username,email,password,memberpackage){
        super(username,email,password);
        this.memberpackage = memberpackage;
        let todayDate = new Date();
        const memberahipactivtillyear = todayDate.getFullYear();
        const memberahipactivtillmonth = todayDate.getMonth();
        const memberahipactivtillday = todayDate.getDay();
        this.memberahipactivtilldate = new Date(
            memberahipactivtillyear,
            memberahipactivtillmonth + 1,
            memberahipactivtillday
        );

    }
    renewmembership(){
        const memberahipactivtillyear = this.memberahipactivtilldate.getFullYear();
        const memberahipactivtillmonth = this.memberahipactivtilldate.getMonth();
        const memberahipactivtillday = this.memberahipactivtilldate.getDay();

        if(this.memberpackage === "standerd package"){
        this.memberahipactivtilldate = new Date(
            memberahipactivtillyear,
            memberahipactivtillmonth + 1,
            memberahipactivtillday
        );
        }else if (this.memberpackage === "yearly package"){
            this.memberahipactivtilldate = new Date(
                memberahipactivtillyear + 1,
                memberahipactivtillmonth,
                memberahipactivtillday
            );
        }
    }

    subscribtionActivetill(){
        
            console.log('The package for ' +  this.username + '  is active till '+ this.memberahipactivtilldate);
       
    }


    getPackage(){
        console.log(this.username + ' is subscribed to the '+ this.memberpackage + ' Package');
    }
}
let U1 = new Member ('Aqsam','aqsam@gmail.com','12345','yearly package');
let U2 = new Member ('Ved','ved@gmail.com',12344,'standerd package');
U2.getPackage();
U1.getPackage();
U1.renewmembership();
U2.renewmembership();
U2.subscribtionActivetill();
U1.subscribtionActivetill();
U1.renewmembership();
Member.countUsers();




