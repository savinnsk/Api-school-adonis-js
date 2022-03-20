

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.resource('/students' , 'StudentsController').apiOnly()
}).prefix('/api')


Route.group(() => {
  Route.resource('/' ,'TeachersController' ).apiOnly()

  Route.get('/:roomId/rooms' , 'RoomsController.show')
  Route.post('/rooms' , 'RoomsController.store')
  Route.put('/:roomId/rooms' , 'RoomsController.update')
  Route.delete('/:roomId/rooms' , 'RoomsController.destroy')

}).prefix('/api/teachers')
