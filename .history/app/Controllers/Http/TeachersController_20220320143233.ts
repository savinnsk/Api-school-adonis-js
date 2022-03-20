import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher';

export default class TeachersController {
  public async index({}: HttpContextContract) {}

  public async store({request , response} : HttpContextContract){
    const body = request.body();

    const teacher = await Teacher.create(body);
    response.status(201)

    return {
        message:'Teacher created',
        data:teacher
    }

}


  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
