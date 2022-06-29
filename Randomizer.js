//This file will generate an 11-alphanumeric
//keys to generate random youtube videos


function randomizer(){
    let digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var Id = '';
    while (Id.length < 11){
        Id = Id + digits[Math.floor(62*Math.random())]; //62 is the length of digits above (26 upper and lowercase letters for 52 plus 10 number digits = 62)
    }
    return String(Id);
}

export default randomizer;