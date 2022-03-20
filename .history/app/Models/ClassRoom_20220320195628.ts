import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Teacher from './Teacher'
import Student from './Student'

export default class ClassRoom extends BaseModel {

  @hasOne(()=> Teacher)
  public teachers:HasOne<typeof Teacher>

  @hasMany(()=> Student)
  public students:HasMany<typeof Student>

  @column({ isPrimary: true })
  public id: number

  @column()
  public capacidade :number

  @column()
  public disponibilidade : boolean

  @column()
  public teacherId: number

  @column()
  public student_id:number

  @column()
  public data_nascimento :string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
