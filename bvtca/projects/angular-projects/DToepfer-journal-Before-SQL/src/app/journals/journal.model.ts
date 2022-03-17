export class Journal{
    public id: number;
    public date: string;
    public entry:string;

    constructor(id:number, date:string, entry:string){
        this.id = id;
        this.date = date;
        this.entry = entry;
    }
}