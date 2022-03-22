import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Registrations extends BaseSchema {
  protected tableName = 'registrations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('student_id').unsigned().references('students.id')
      table.integer('teacher_id').unsigned().references('teachers.id')
      table.unique(['teacher_id', 'student_id'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
