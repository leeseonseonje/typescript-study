let studentId: number = 123;
let studentName: string = 'seon Je'
let age: number = 21;

interface Student {
    id: number;
    name: string;
    age?: number;
    // methodTest(m: string): string;
    // methodTest: (m: string) => string;
} // 타입으로 사용 가능
    //?는 선택적 프로퍼티(있어도되고, 없어도되는)
    //read

let stu: Student = {
    id: 1,
    name: 'studentName',
    age: 24
};

console.log(stu);
function getStudent(studentId: number): Student {
    return {
        id: 1,
        name: 'name'
        // age: 24
    };
}

function saveStudent (student: Student): void {
    getStudent(1);
}


