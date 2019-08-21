import { CTYPE } from '../CTYPE/ctype.enum';
import { Course } from '../course/course';
export class ProgramBlock {
    public name : string;
    public type : CTYPE;
    public credits : number;
    public regex : RegExp;
    public courses : Course[];

    constructor(name:string, 
        type:CTYPE, 
        credits : number, 
        regex : RegExp){
        this.name = name;
        this.type = type;
        this.credits = credits;
        this.regex = regex;
        this.courses = [];        
    }
}
