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

  public async show({}: HttpContextContract) {}

  public async update({request , params ,}: HttpContextContract) {
    const body = request.body();
    const teacherId = params.teacherId;
    const roomId = params.roomId;

    await Teacher.findOrFail(teacherId);
    const room = await ClassRoom.findOrFail(roomId);

    room.disponibilidade = body.disponibilidade;
    room.capacidade = body.capacidade;

    await room.save();
 ;

    return {
     message:'Classroom updated',
     data : room
    }
  }

  public async destroy({}: HttpContextContract) {}
}
