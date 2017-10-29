

//nettoEarning

module.exports = class job {
    constructor(jobTitle, nettoEarning){
        this.jobTitle =jobTitle;
        this.nettoEarning = nettoEarning;
    }
    sayName(){
        console.log(this.jobTitle)
    }
    static create(obj){
        return new job(obj.jobTitle, obj.nettoEarning)
    }
}
