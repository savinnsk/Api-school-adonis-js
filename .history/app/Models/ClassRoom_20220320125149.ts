import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher'

export default class ClassRoom extends BaseModel {

  @hasMany(()=> Teacher)
  public teachers:HasMany<typeof Teacher>

  @column({ isPrimary: true })
  public id: number

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
