import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ClassRoom from './ClassRoom'
import Student from './Student'

export default class Teacher extends BaseModel {
  @hasMany(() => ClassRoom)
  public class_rooms:HasMany<typeof ClassRoom>

  @hasMany(() => Student)
  public students:HasMany<typeof Student>

  @column({ isPrimary: true })
  public id: number

  @column()
  public matricula : string

  @column()
  public nome : string

  @column()
  public email : string

  @column()
  public data_nascimento :string

  @column()
  public ClassRoomId : number

  @column()
  public StudentId : number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
