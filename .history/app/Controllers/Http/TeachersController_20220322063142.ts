import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClassRoom from 'App/Models/ClassRoom'
import Registration from 'App/Models/Registration'
import Student from 'App/Models/Student'
import Teacher from 'App/Models/Teacher'
import {v4 as uuidv4} from "uuid"

export default class TeachersController {

  public async listStudents({params} : HttpContextContract) {

    const registrations = await Registration.query().preload('')

    const studentsAtClass = await registrations.load('student')

    console.log(classroom.students)

    return {
      data :studentsAtClass
    }
  }

  public async allocateStudent({params}:HttpContextContract){

    const student = await Student.findOrFail(params.studentId);
    const classroom = await ClassRoom.findOrFail(params.classId);

    const teacher = await Teacher.findOrFail(params.teacherId);



  console.log(classroom.teacherId , params.teacherId )
  console.log(classroom.studentId, student.id )


    if(classroom.teacherId != params.teacherId){
      throw new Error('teacher is not owner')
    }

    else if(classroom.capacidade === 0){
      throw new Error('Class is full')

    }else if(classroom.studentId === student.id){
       throw new Error('Student Already Allocate')

    }else{

      const regitration = await Registration.create(
        {
          studentId:student.id,
          classRoomId:classroom.id
        })

        classroom.studentId = Number(params.studentId);
        classroom.capacidade--;

        student.save()
        classroom.save()

        return{
          message :'student allocated',
          data:`student ${student.nome} allocate at classroom ${classroom.id}`
        }

    }


  }

  public async removeStudentAllocate({params}: HttpContextContract){

    const student = await Student.findOrFail(params.studentId);
     student.classRoomId = Number('');

    return{
      message:'student removed',
      data:student
    }

  }

  public async store({request , response} : HttpContextContract){
    const body = request.body();

    body.matricula = `${uuidv4()}`

    const teacher = await Teacher.create(body);


    response.status(201)

    return {
        message:'Teacher created',
        data:teacher
    }

}

  public async show({ params} : HttpContextContract){

  const teacher = await Teacher.findOrFail(params.id);


  return{
      data:teacher,
      message:'Teacher data accessed'
  }
  }


  public async update({params , request}:HttpContextContract){

    const body = request.body();
    const teacher = await Teacher.findOrFail(params.id);

    teacher.nome = body.nome;
    teacher.email = body.email;
    teacher.data_nascimento = body.data_nascimento;

    await teacher.save()

    return{
        message:'Teacher Updated',
        data:teacher
    }
  }

  public async destroy({params}: HttpContextContract){

    const teacher = await Teacher.findOrFail(params.id);

    await teacher.delete();

    return {
        message:"teacher deleted",
        data:teacher
    }
  }



}


