import { app } from "./app"
import { ProjectURL } from "./data/BaseURL";
import getAllClasses from "./endpoints/getAllClasses";
import getAllActiveClasses from "./endpoints/getAllActiveClasses";
import getStudentByName from "./endpoints/getStudentByName";
import getAllTeachers from "./endpoints/getAllTeachers";
import createClass from "./endpoints/createClass";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher";
import putModuleClass from "./endpoints/putModuleClass";
import putStudentOtherClass from "./endpoints/putStudentOtherClass";
import putTeacherOtherClass from "./endpoints/putTeacherOtherClass";

//BaseURL:
// http://localhost:3003/LabenuSystem

// ------------- GET - ENDPOINTS ---------------

//Endpoint de retorno de todas as turmas cadastradas.
app.get(`${ProjectURL}/Class`, getAllClasses)

//Endpoint de retorno das turmas ainda ativas.
app.get(`${ProjectURL}/ActiveClass`, getAllActiveClasses)

//Endpoint de retorno de um estudante por nome.
app.get(`${ProjectURL}/Student`, getStudentByName )

//Endpoint de retorno de todos os professores.
app.get(`${ProjectURL}/Teacher`,  getAllTeachers)

// ------------- POST - ENDPOINTS --------------

//Endpoint de criação de turma.
app.post(`${ProjectURL}/Class`, createClass)

//Endpoint de criação de estudantes.
app.post(`${ProjectURL}/Student`, createStudent)

//Endpoint de criação de docentes.
app.post(`${ProjectURL}/Teacher`, createTeacher)

// ------------- UPDATE - ENDPOINTS ------------

//Endpoint de edição do módulo da turma.
app.put(`${ProjectURL}/Class/:id`, putModuleClass)

//Endpoint de edição para troca de turma de um estudante.
app.put(`${ProjectURL}/Student/:id`, putStudentOtherClass)

//Endpoint de edição para troca de turma de um docente.
app.put(`${ProjectURL}/Teacher/:id`, putTeacherOtherClass )


// ------------- DELETE - ENDPOINTS ------------
