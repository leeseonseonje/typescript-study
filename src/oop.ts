class User {

    username: string;
    age: number; 
    address: string;

    constructor(username: string, age: number, address: string) {
        this.username = username;
        this.age = age;
        this.address = address;
    }

    userInfo = (): void => {
        console.log(`username= ${this.username}`)
    }
}

let user1 = new User('userA', 24, 'Seoul');
user1.userInfo