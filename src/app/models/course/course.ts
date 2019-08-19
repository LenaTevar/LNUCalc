export class Course {
    public used : boolean = true;
    constructor (
        public code: string,
        public credits: number,
        public type? : string
    ) { 
       
    }
}
