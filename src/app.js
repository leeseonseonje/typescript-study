var studentId = 123;
var studentName = 'seon Je';
var age = 21;
//?는 선택적 프로퍼티(있어도되고, 없어도되는)
//read
var stu = {
    id: 1,
    name: 'studentName',
    age: 24
};
console.log(stu);
function getStudent(studentId) {
    return {
        id: 1,
        name: 'name'
        // age: 24
    };
}
function saveStudent(student) {
    getStudent(1);
}
