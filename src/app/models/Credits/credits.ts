import { CoursePlan } from '../CoursePlan/course-plan';
export class Credits {
    public program : number;
    
    public program_adv : number;
    public free : number;
    public non_program : number
    
    constructor(c:number, a:number, f:number, n:number){
        this.program = c;
        this.program_adv = a;
        this.free = f;
        this.non_program = n;
    }
}
