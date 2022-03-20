import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student';
import {v4 as uuidv4} from "uuid"

export default class StudentsController {
  public async index({response}: HttpContextContract) {

    const classrooms = await Student.query().preload('class_room')
  }

  public async store({request , response} : HttpContextContract){
    const body = request.body();

    body.matricula = `${uuidv4()}`

    const student = await Student.create(body);

    response.status(201)

    return {
        message:'student created',
        data:student
    }

}

public async show({ params} : HttpContextContract){

  const student = await Student.findOrFail(params.id);

  return{
      data:student,
      message:'Student data accessed'
  }
}


public async update({params , request}:HttpContextContract){

  const body = request.body();
  const student = await Student.findOrFail(params.id);

  student.nome = body.nome;
  student.email = body.email;
  student.data_nascimento = body.data_nascimento;

  await student.save()

  return{
      message:'Student Updated',
      data:student
  }
}

public async destroy({params}: HttpContextContract){

  const student = await Student.findOrFail(params.id);

  await student.delete();

  return {
      message:"student deleted",
      data:student
  }
}

}
