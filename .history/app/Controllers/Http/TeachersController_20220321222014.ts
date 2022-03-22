import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClassRoom from 'App/Models/ClassRoom'
import Student from 'App/Models/Student'
import Teacher from 'App/Models/Teacher'
import {v4 as uuidv4} from "uuid"

export default class TeachersController {

  public async listStudents({params}: HttpContextContract) {

    const students = await Student.query().where('classRoomId',params.classId)

    return {
      data : students
    }
  }

  public async allocateStudent({params}:HttpContextContract){


    const student = await Student.query().where('id',params.studentId)

    //const studentAlreadyExist = await Student.query().where('id', params.studentId)


    const classromm = await ClassRoom.query().where('id',params.classId).update({
      studentId:params.studentId
    })



    return{
      message :'student allocated',
      data:`${student} aloccate at ${classromm}`
    }
  }

  public async removeStudentAllocate({params}: HttpContextContract){

    const student = await Student.query().where('class_room_id',params.classId).delete()

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


