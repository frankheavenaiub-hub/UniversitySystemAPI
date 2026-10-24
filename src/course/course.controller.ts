import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';


@Controller('course')
export class CourseController {

constructor(
 private courseService: CourseService
){}



@Get()
getCourses(){

return this.courseService.getAllCourses();

}



@Get(':id')
getCourse(@Param('id') id:string){

return this.courseService.getCourseById(id);

}



@Post()
createCourse(
@Body() body:{name:string,code:string}
){

return this.courseService.createCourse(
body.name,
body.code
);

}


}