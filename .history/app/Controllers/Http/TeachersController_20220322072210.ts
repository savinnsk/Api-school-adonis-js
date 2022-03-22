import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClassRoom from 'App/Models/ClassRoom'
import Registration from 'App/Models/Registration'
import Student from 'App/Models/Student'
import Teacher from 'App/Models/Teacher'
import {v4 as uuidv4} from "uuid"

export default class TeachersController {

  public async listStudents({params} : HttpContextContract) {

    const students = await Registration.query().where('classRoomId',params.classId)

    return {
      data :students
    }
  }

  public async allocateStudent({params}:HttpContextContract){

    const student = await Student.findOrFail(params.studentId);
    const classroom = await ClassRoom.findOrFail(params.classId);


    if(classroom.teacherId != params.teacherId){
      throw new Error('teacher is not owner')
    }

    else if(classroom.capacidade === 0){
      throw new Error('Class is full')

    }else{

      const regitration = await Registration.create(
        {
          studentId:student.id,
          classRoomId:classroom.id
        })

        classroom.capacidade--;

        student.save()
        classroom.save()
        regitration.save()

        return{
          message :'student allocated',
          data:regitration
        }

    }


  }

  public async removeStudentAllocate({params}: HttpContextContract){

    const classroom = ClassRoom.findOrFail(params.classId)
    const regitration = await Registration.query().where('studentId',params.studentId).delete()

    return{
      message:'student removed',
      data:regitration
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


