

import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.resource('/students' , 'StudentsController').apiOnly()
}).prefix('/api')


Route.group(() => {



  Route.resource('/teachers' ,'TeachersController' ).apiOnly()

  Route.get('/teachers/classroom/:roomId' , 'TeachersController.listStudents')

  Route.post('teachers/:teacherId/classrooms' , 'ClassRoomsController.store');
  Route.put('teachers/:teacherId/:classroomId/classrooms' , 'ClassRoomsController.update');
  Route.get('teachers/:teacherId/:roomId/classrooms' , 'ClassRoomsController.show')
  Route.delete('teachers/:teacherId/:classroomId/classrooms' , 'ClassRoomsController.destroy')



}).prefix('/api')
