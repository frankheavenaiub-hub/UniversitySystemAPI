import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';


@Injectable()
export class NotificationService {


constructor(

@Inject(forwardRef(()=>EnrollmentService))

private enrollmentService:EnrollmentService

){}



sendNotification(
studentName:string,
message:string
){

return {

studentName,

message,

status:'Notification sent'

};

}



checkEnrollmentAndNotify(
studentName:string,
courseId:string
){

return this.enrollmentService.getEnrollments();

}


}