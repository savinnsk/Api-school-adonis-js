import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher'
import ClassRoom from './ClassRoom'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(()=> Teacher)
  public teachers:HasMany<typeof Teacher>

  @hasMany(() => ClassRoom)
  public class_room: HasMany<typeof ClassRoom>


  @column()
  public matricula: string

  @column()
  public nome : string

  @column()
  public email : string

  @column()
  public data_nascimento :string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
