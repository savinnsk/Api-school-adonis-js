import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher'
import Student from './Student'

export default class Registration extends BaseModel {

  @hasOne(()=> Teacher)
  public teachers:HasOne<typeof Teacher>

  @hasOne(()=> Student)
  public student:HasOne<typeof Student>

  @hasOne(()=> Student)
  public class_room:HasOne<typeof Student>

  @column()
  public studentId : number

  @column()
  public teacherId : number

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
