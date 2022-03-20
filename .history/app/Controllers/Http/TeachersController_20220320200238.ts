import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'
import {v4 as uuidv4} from "uuid"

export default class TeachersController {

  public async listStudents({params}: HttpContextContract) {

    const rooms =  await Teacher.query()
    .preload('class_rooms', (query)=> query
    .where('teacher_id' ,params.teacherId ));

    const teacher = await Teacher.findOrFail(params.teacherId)
    const student_rooms =  await teacher.related('class_rooms').query().preload('students')



    return {
      data : rooms
    }
  }

   /*public async listStudents({params}: HttpContextContract){

  }*/

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


