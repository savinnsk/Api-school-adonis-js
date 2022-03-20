import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ClassRoom from './ClassRoom'

export default class Teacher extends BaseModel {
  @hasMany(() => ClassRoom)
  public class_rooms:HasMany<typeof ClassRoom>

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
