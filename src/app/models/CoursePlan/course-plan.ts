import { Course } from '../course/course';
import { Credits } from '../Credits/credits';

export class CoursePlan {

   
    private index_cs : number = 0;
    private index_adv : number = 1;
    private index_free : number  = 2;
    private index_non : number = 3;

    private a_credits : number[] = [67.5, 22.5, 60, 30];

    private cs = "cs";
    private adv = "cs_adv";
    private free = "free";
    private non = "non";
    private notused = "not_used"

    private a_courses : Course[] = [];
    
    //regex
    private is_CS = new RegExp(/[0-9][dv|DV]{2}[0-9]{3}/);
    private is_CS_Adv = new RegExp(/[2][dv|DV]{2}[0-9]{3}/);

    constructor(){
        let thesis = new Course("2dv50E",15, this.adv);
        this.a_credits[this.index_adv] -= thesis.credits;
        this.a_courses.push(thesis);
    }

    public addCourse(code:string, credits:number): boolean{
        if(this.isRepeated(code)){
            return false;
        }
        this.setcredits(code,credits);
        return true;
    }

    public getCourses(): Course[] {
        return this.a_courses;
    }

    public getCredits() : Credits{
        return new Credits(this.a_credits[0],this.a_credits[1],this.a_credits[2],this.a_credits[3]);
    }

    public deleteCourse(course:Course){
        let index : number = this.a_courses.indexOf(course);
        if(index !== -1){
            this.a_courses.splice(index,1);
        }
    }

    private setcredits(code:string, credits:number){
        let loop = true;
        let course = this.courseBuilder(code,credits);
        while (loop) {
            switch (course.type) {
                case "cs_adv":   
                    loop = this.checkCourseAndCredits(course, this.index_adv, this.cs);
                    break;            
                case "cs":                    
                    loop = this.checkCourseAndCredits(course, this.index_cs, this.free);
                    break;
                case "free":                    
                    loop = this.checkCourseAndCredits(course, this.index_free, this.notused);
                    break;
                case "free_non":
                    loop = this.checkCourseAndCredits(course, this.index_non, this.free);
                    break;
                default://not used
                    loop = false;
                    break;
            }
        }
        this.a_courses.push(course);
    }

    private isRepeated(code:string){
        let repeated = false;
        this.a_courses.forEach(course => {
            if(course.code.includes(code)){
                repeated =  true;
            }
        })
        return repeated;
    }

    private checkCourseAndCredits(course:Course, currentCredits:number, nextType:string){
      let keeplooping = true;
        if(this.enoughCredits(currentCredits,course)){
            keeplooping  = false;
        } else {
            this.changeType(course, nextType);
            keeplooping = true;
        }
        return keeplooping;
    }
    private changeType(course:Course, newType:string){
        course.type = newType;
    }

    private enoughCredits(current:number, course:Course){  
        
        let currentCredits = this.a_credits[current];
        if (currentCredits>0){
            this.a_credits[current] -= course.credits;
            return true;
        }
        return false;
    }
   
    private courseBuilder(code:string, credits:number): Course{
        if(code.match(this.is_CS_Adv)){
            return new Course(code,credits,this.adv)
        } else if (code.match(this.is_CS)){
            return new Course(code,credits,this.cs)
        } 
        return new Course (code,credits, this.non)        
    }
}


