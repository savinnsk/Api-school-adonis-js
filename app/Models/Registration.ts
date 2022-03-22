import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Student from './Student'
import ClassRoom from './ClassRoom'

export default class Registration extends BaseModel {

  @hasOne(()=> Student)
  public student:HasOne<typeof Student>

  @hasOne(()=> ClassRoom)
  public class_room:HasOne<typeof ClassRoom>

  @column()
  public studentId : number

  @column()
  public classRoomId : number

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
