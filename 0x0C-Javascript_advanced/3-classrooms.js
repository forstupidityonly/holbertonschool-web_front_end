function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    }
  }
  let students = [];
  for (let itr = 0; itr < numbersOfStudents; itr++) {
    students[itr] = studentSeat(itr + 1);
  }
  return students;
}
classRoom = createClassRoom(10);
