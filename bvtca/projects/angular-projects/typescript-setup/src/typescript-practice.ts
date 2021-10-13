
    class Vehicle {
      year: number;
  
      constructor(year: number) {
        this.year = year;
      }
  
      printYear(): void {
        console.log('This vehicle has a year of', this.year);
      }
  
      static printSomething(): void {
        console.log('Something');
      }
    }
  
    const fordFocus = new Vehicle(2006);
    const toyotaYaris = new Vehicle(2011);
  
    fordFocus.printYear();
    toyotaYaris.printYear();
  
    Vehicle.printSomething();

