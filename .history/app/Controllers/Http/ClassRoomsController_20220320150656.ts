import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClassRoom from 'App/Models/ClassRoom';
import Teacher from 'App/Models/Teacher';

export default class ClassRoomsController {
  public async index({}: HttpContextContract) {}

  public async store({request , params , response}: HttpContextContract) {
    const body = request.body();
    const teacherId = params.teacherId;

    await Teacher.findOrFail(teacherId);

    body.teacherId = teacherId;

    const classroom = await ClassRoom.create(body)

    response.status(201);

    return{
      message :'Class room created',
      data:classroom
    }


 }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
