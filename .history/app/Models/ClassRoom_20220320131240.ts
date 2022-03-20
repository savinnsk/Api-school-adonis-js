import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher'

export default class ClassRoom extends BaseModel {


  @column({ isPrimary: true })
  public id: number

  @column()
  public sala_numero : number

  @column()
  public capacidade :number

  @column()
  public disponibilidade : boolean

  @column()
  public data_nascimento :string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
