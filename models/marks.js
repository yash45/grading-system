class Marks{
    constructor(subject, mark, student){
        this.subject = subject;
        this.mark = mark;
        this.student = student;
    }
    isValid(){
        let valid = true;
        this.student === null? 'please enter a student name' : true;
        typeof(this.mark !== 'number')? true: 'please enter a number'; 

        return valid
    }
    grade(){
        let mark = this.mark;
        let score;
        switch(mark){
            case mark < 50:
                 score = 'F';
                 break;
            case mark >= 50 && mark <60:
                score = 'E'
                break;
            case mark >= 60 && mark < 70:
                score = 'D'
                break;
            case mark >= 70 && mark < 80:
                score = 'C'
                break;
            case mark >= 50 && mark < 90:
                score = 'B'
                break;
            case mark >=90 && mark <=100:
                score = 'A'
                break;
            case mark > 100:
                score = 'mark cannot exceed 100 '
                break;
            default: 
                score = 'enter grade'
                 break;
        }
        return score
    }
}

module.exports = Marks;