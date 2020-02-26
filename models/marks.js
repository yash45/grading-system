class Marks{
    constructor(subject, mark, student){
        this.subject = subject;
        this.mark = mark;
        this.student = student;
    }
    isValid(){
        let valid = true;
        this.student === null? 'please enter a student' : true;
        typeof(this.mark !== 'number')? true: 'please enter a number'; 

        return valid
    }
    grade(){
        let mark = this.mark 
        let score = 0;
        switch(mark){
            case mark < 50:
               return  score = 'F';
            case mark >= 50 && mark <60:
                return (score = 'E');
            case mark >= 60 && mark < 70:
                return (score = 'D');
            case mark >= 70 && mark < 80:
                return (score = 'C');
            case mark >= 50 && mark < 90:
                return (score = 'B'); 
            case mark >=90 && mark <=100:
                return (score = 'A');
            case mark > 100:
                return (score = 'mark cannot exceed 100 ');
            default: 'enter grade'
                 break;
        }
        return score
    }
}

module.exports = Marks;