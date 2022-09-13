import { app } from "./app"
import { BaseURL, ProjectURL } from "./data/BaseURL";
import ClassController from "./endpoints/ClassController"
import HobbyController from "./endpoints/HobbyController";
import SpecialtyController from "./endpoints/SpecialtyController";
import StudentController from "./endpoints/StudentController";
import TeacherController from "./endpoints/TeacherController";

//BaseURL:
// http://localhost:3003/LabenuSystem

// --------- INSTANCIANDO AS CLASSES -----------
const classController = new ClassController()
const hobbyController = new HobbyController()
const studentController = new StudentController()
const teacherController = new TeacherController()
const specialtyController = new SpecialtyController()

// ------------- GET - ENDPOINTS ---------------

app.get(`${ProjectURL}/Class`, classController.getAllClasses)
app.get(`${ProjectURL}/ActiveClass`, classController.getAllActiveClasses)
app.get(`${ProjectURL}/Student`, studentController.getStudentByName)
app.get(`${ProjectURL}/Teacher`, teacherController.getAllTeachers)
app.get(`${ProjectURL}/TeacherSpecialty` , teacherController.getAllTeachersSpecialty)

// ------------- POST - ENDPOINTS --------------

app.post(`${ProjectURL}/Class`, classController.createClass)
app.post(`${ProjectURL}/Hobby`, hobbyController.createHobby)
app.post(`${ProjectURL}/Student`, studentController.createStudent)
app.post(`${ProjectURL}/Teacher`, teacherController.createTeacher)
app.post(`${ProjectURL}/Specialty`, specialtyController.createSpecialty)

// ------------- UPDATE - ENDPOINTS ------------

app.put(`${ProjectURL}/Student/:id`, studentController.putStudentOtherClass)
app.put(`${ProjectURL}/Teacher/:id`, teacherController.putTeacherOtherClass)

// ------------- DELETE - ENDPOINTS ------------
