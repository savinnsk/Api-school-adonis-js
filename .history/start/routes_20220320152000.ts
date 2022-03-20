

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.resource('/students' , 'StudentsController').apiOnly()
}).prefix('/api')


Route.group(() => {

  Route.resource('/teachers' ,'TeachersController' ).apiOnly()

  Route.post('teacher/:teacherId/classrooms' , 'ClassRoomsController.store')
  Route.put('teacher/:teacherId/:classroomId/classrooms' , 'ClassRoomsController.update')


}).prefix('/api')
