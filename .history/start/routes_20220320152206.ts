

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.resource('/students' , 'StudentsController').apiOnly()
}).prefix('/api')


Route.group(() => {

  Route.resource('/teachers' ,'TeachersController' ).apiOnly()

  Route.post('teachers/:teacherId/classrooms' , 'ClassRoomsController.store');
  Route.put('teachers/:teacherId/:classroomId/classrooms' , 'ClassRoomsController.update');
  Route.get('/:roomId/rooms' , 'RoomsController.show')


}).prefix('/api')
