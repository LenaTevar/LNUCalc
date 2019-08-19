import { CoursePlan } from '../CoursePlan/course-plan';
export class Credits {
    public cs : number;
    public adv : number;
    public free : number;
    public non : number
    
    constructor(c:number, a:number, f:number, n:number){
        this.cs = c;
        this.adv = a;
        this.free = f;
        this.non = n;
    }
}
