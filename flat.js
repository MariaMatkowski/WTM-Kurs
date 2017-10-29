module.exports = class flat {
    constructor(location,size,price){
        this.location = location;
        this.size = size;
        this.price = price;
    }
    sayLocation (){
        console.log(this.location)
    }
    static create(obj){
        return new flat(obj.location, obj.size, obj.price)
    }
}