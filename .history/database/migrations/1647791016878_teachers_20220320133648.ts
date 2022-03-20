import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teachers extends BaseSchema {
  protected tableName = 'teachers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('matricula')
      table.string('nome')
      table.string('email')
      table.string('data_nascimento')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
