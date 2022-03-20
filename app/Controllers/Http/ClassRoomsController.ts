import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClassRoom from 'App/Models/ClassRoom';
import Teacher from 'App/Models/Teacher';

export default class ClassRoomsController {
  public async index({}: HttpContextContract) {}

  public async store({request , params , response}: HttpContextContract) {
    const body = request.body();
    const teacherId = params.teacherId;


    body.teacherId = Number(teacherId);
    await Teacher.findOrFail(teacherId);

    const classroom = await ClassRoom.create(body)

    response.status(201);

    return{
      message :'Class room created',
      data:classroom
    }


 }

 public async show({  params}: HttpContextContract) {
  const teacherId = params.teacherId;
  const classroomId = params.roomId;

  await Teacher.findOrFail(teacherId);
  const classroom = await ClassRoom.findOrFail(classroomId);


  return {
    message:"classroom data acessed",
    data :classroom
  }
}

  public async update({request , params ,}: HttpContextContract) {
    const body = request.body();
    const teacherId = params.teacherId;
    const roomId = params.classroomId;

    await Teacher.findOrFail(teacherId);
    const classroom = await ClassRoom.findOrFail(roomId);

    classroom.disponibilidade = body.disponibilidade;
    classroom.capacidade = body.capacidade;

    await classroom.save();
 ;

    return {
     message:'Classroom updated',
     data : classroom
    }
  }

  public async destroy({params ,}: HttpContextContract) {
    const teacherId = params.teacherId;
    const classroomId = params.classroomId;

    await Teacher.findOrFail(teacherId);
    const classroom = await ClassRoom.findOrFail(classroomId);

    await classroom.delete();


    return{
      message:'classroom deleted',
      data : classroom
    }
  }
}
