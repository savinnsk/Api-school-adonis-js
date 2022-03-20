

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.resource('/students' , 'StudentsController').apiOnly()
}).prefix('/api')


Route.group(() => {

  Route.resource('/teachers' ,'TeachersController' ).apiOnly()

  Route.post('/classrooms' , 'classRoomsController.store')



}).prefix('/api')
