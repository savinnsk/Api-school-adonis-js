import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClassRooms extends BaseSchema {
  protected tableName = 'class_rooms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('capacidade')
      table.boolean('disponibilidade')

      table.integer('teacher_id').unsigned().references('teachers.id').onDelete('CASCADE');
      //table.integer('student_id').unsigned().references('students.id');
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
