

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.resource('/students' , 'StudentsController').apiOnly()
}).prefix('/api')


Route.group(() => {

  Route.get('/teachers' ,'TeachersController.listStudents')

  Route.resource('/teachers' ,'TeachersController' ).apiOnly()

  Route.post('teachers/:teacherId/classrooms' , 'ClassRoomsController.store');
  Route.put('teachers/:teacherId/:classroomId/classrooms' , 'ClassRoomsController.update');
  Route.get('teachers/:teacherId/:roomId/classrooms' , 'ClassRoomsController.show')
  Route.delete('teachers/:teacherId/:classroomId/classrooms' , 'ClassRoomsController.destroy')



}).prefix('/api')
