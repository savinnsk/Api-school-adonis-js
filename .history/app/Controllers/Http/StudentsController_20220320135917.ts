import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student';

export default class StudentsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request , response} : HttpContextContract){
    const body = request.body();

    console.log(body)


    const student = await Student.create(body);

    response.status(201)

    return {
        message:'student created',
        data:student
    }

}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
