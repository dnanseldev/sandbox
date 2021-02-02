function User(pusername, pemail)
{
    this.username = pusername;
    this.email = pemail ;     
}

User.prototype.getInfo = function() {
    console.log(`Das ist ein user: ${this.username}`);
}

let usr1 = new User('danstonebuilt', 'dnstonebuilt@gmail.com');
let usr2 = new User('luguidoni', 'luguidoni@gmail.com');

console.log(usr1);
usr1.getInfo();
