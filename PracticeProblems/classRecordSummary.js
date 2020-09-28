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

// -------------------------------------------- Here are some callback functions and constants i use throughout the program ----
const EXAM_PERCENTAGE = 0.65;
const EXERCISES_PERCENTAGE = 0.35
const A_GRADE = 93;
const B_GRADE = 85;
const C_GRADE = 77;
const D_GRADE = 69;
const E_GRADE = 60;

let sum = (array) => array.reduce((accumulator, nextValue) => accumulator + nextValue);
let average = (array) => sum(array)/array.length;
let minimum = (array) => array.reduce((current, nextValue) => current = current <= nextValue ? current : nextValue);
let maximum = (array) => array.reduce((current, nextValue) => current = current >= nextValue ? current : nextValue);

let lookupLetter = function (numberGrade) {
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
  let studentGrades = []
  let rawExams = []

  Object.keys(scores).forEach(function(student) {
    let studentScore = scores[student]['scores'];
    studentGrades.push(synthesizeGrade(studentScore));
    rawExams.push(studentScore['exams']);
  })

  exams = rawExams.map((exam, index) => getStatistics(rawExams, index)).filter((exam, index) => index < 4);

  return { studentGrades, exams}
}

function synthesizeGrade(individualScores) {
  let exams = average(individualScores['exams']);
  let exercises = sum(individualScores['exercises'])
  let grade = exams * EXAM_PERCENTAGE + exercises * EXERCISES_PERCENTAGE;
  return `${Math.round(grade)} (${lookupLetter(grade)})`
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
