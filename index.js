class Car {
    constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
      this.owner = owner
      this.name = name
    }
  
    drive() {
      console.log(
        `The ${this.name} car owned by ${this.owner} drives on the road`
      )
    }
  
    getOwner() {
      return this.owner
    }
  
    getOwner() {
      return this.name
    }
  }
  
  const myCar = new Car('Elon', 'Tesla Model S')
  const myCartwo = new Car('Chris', 'Mustang') 

  console.log(myCar)
  console.log(myCartwo)
  
  myCar.drive()
  myCartwo.drive()
  
  
  console.log(myCar.getOwner())

  

  class SportsCar extends Car {
    constructor({ owner, name, color, price, engine }) {
      super(owner, name)
      this.color = color
      this.price = price
      this.engine = engine
    }
  
    getColor() {
      return this.color
    }
  
    getPrice() {
      const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(this.price)
  
      return formattedPrice
    }
  
    getEngine() {
      return this.engine
    }
  }
  const coolCar = new SportsCar({
    owner: 'Starman',
    name: 'Tesla Roadster',
    color: 'Red',
    price: '200000', // USD
    engine: 'Electric'
  })
  
  console.log(coolCar)
  // SportsCar { ... }
  
  coolCar.drive()
  // The Tesla Roadster car owned by Starman drives on the road
  
  console.log(coolCar.getColor())
  // Red
  
  console.log(coolCar.getPrice())
  // $200,000
  
