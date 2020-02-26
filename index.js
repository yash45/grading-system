const Marks = require('./models/marks')
const Student = require('./models/student')

const marks =  new Marks('Math', 1, 'Chris');
console.log(marks.grade());

module.exports = marks;