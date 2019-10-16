import { Component, OnInit } from '@angular/core';
import { StudentService} from '../service/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  dataSource: any=null;
  constructor(
    private studentService: StudentService,
  ) {
    this.getAll();
   }

  ngOnInit() {
  }
  getAll() {
    this.studentService.getAll().then((res: any)=>{
      this.dataSource=res.data;
      console.log(this.dataSource);
    });
  }
}
