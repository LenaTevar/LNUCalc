import { CTYPE } from '../CTYPE/ctype.enum';
export class Course {
    public code : string;
    public credits : number;
    public type : CTYPE;

    constructor(code:string, credtis:number, type:CTYPE){
        this.code = code;
        this.credits = credtis;
        this.type = type;
    }
}
