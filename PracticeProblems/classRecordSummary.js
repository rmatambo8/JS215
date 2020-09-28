/* brainstorm session
average the values of an array
sum the values of an array
find the minimum value of an array
find the maximum value of an array.
create an object with 3 values, an average, a min, and a max.
find a grade based on weighted average
iterate through a student and find their final grade
final grade will be a percentage of two grades finalized as a rounded value.

Simpler high level approach

first create a way to do basic actions like find an average, a sum, a minimum, and a max ( reduce operations)
iterate through one student to find their final grade
calculate the letter grade of that student
declare an array object that will hold studentGrades
collect all of the grades of each exam into one.
transform the exams into statistics of average test performance
filter last exams since there are only 4 exams and more students.
*/

// -------------------------------------------- CALLBACK FUNCTIONS AND CONSTANTS USED THROUGHOUT THE PROGRAM ----

const EXAM_PERCENTAGE = 0.65;
const EXERCISES_PERCENTAGE = 0.35;
const A_GRADE = 93;
const B_GRADE = 85;
const C_GRADE = 77;
const D_GRADE = 69;
const E_GRADE = 60;

const sum = (array) => array.reduce((accumulator, nextValue) => accumulator + nextValue);
const average = (array) => sum(array)/array.length;
const minimum = (array) => array.reduce((current, nextValue) => current = current <= nextValue ? current : nextValue);
const maximum = (array) => array.reduce((current, nextValue) => current = current >= nextValue ? current : nextValue);

const lookupLetter = function (numberGrade) {
  if (numberGrade >= A_GRADE) {
    return 'A';
  } else if (numberGrade >= B_GRADE) {
    return 'B';
  } else if (numberGrade >= C_GRADE) {
    return 'C';
  } else if (numberGrade >= D_GRADE) {
    return 'D';
  } else if (numberGrade >= E_GRADE) {
    return 'E';
  } else {
    return 'F';
  }
};

// ------------------------------------------------ MAIN FUNCTIONS --------------------------------

function generateClassRecordSummary(scores) {
  let studentGrades = [];
  let rawExams = [];

  Object.keys(scores).forEach(function(student) {
    let studentScore = scores[student]['scores'];
    studentGrades.push(synthesizeGrade(studentScore));
    rawExams.push(studentScore['exams']);
  })

  exams = rawExams.map((exam, index) => getStatistics(rawExams, index)).filter((exam, index) => index < 4);

  return { studentGrades, exams}
}

function synthesizeGrade(individualScores) {
  let examScore = average(individualScores['exams']);
  let exerciseScore = sum(individualScores['exercises']);
  let grade = examScore * EXAM_PERCENTAGE + exerciseScore * EXERCISES_PERCENTAGE;
  return `${Math.round(grade)} (${lookupLetter(grade)})`;
}

function getStatistics(studentsExams, index) {
  let oneExam = [];

  studentsExams.forEach(student => oneExam.push(student[index]));
  return { average: average(oneExam), minimum: minimum(oneExam), maximum: maximum(oneExam) };
}

// --------------------------------------DATA USED THROUGHOUT PROGRAM (SAME AS PROVIDED) --------------------------

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// ---------------------EXECUTION OF THE PROGRAM ------- LOGGED FOR CONVENIENCE ------
console.log(generateClassRecordSummary(studentScores));

// { studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: 
//    [ { average: 75.6, minimum: 50, maximum: 100 },
//      { average: 86.4, minimum: 70, maximum: 100 },
//      { average: 87.6, minimum: 60, maximum: 100 },
//      { average: 91.8, minimum: 80, maximum: 100 } ] }