export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToInactiveCounter = 0;

    incrementActivetToInactive() {
        this.activeToInactiveCounter++;
        console.log("Active to Inactive: " + this.activeToInactiveCounter);
    }


    incrementInactivetoActive() {
        this.inactiveToInactiveCounter++;
        console.log("Inactive to Inactive: " + this.inactiveToInactiveCounter);
    }
}