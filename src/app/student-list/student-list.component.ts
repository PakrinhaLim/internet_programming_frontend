import { Component, OnInit } from '@angular/core';
import { StudentService} from '../service/student/student.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  dataSource: any=null;
  constructor(
    private studentService: StudentService,
    private router: Router,
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

  delete(id) {
    this.studentService.deleteData(id).then((res:any)=>{
      console.log(res,"REsi;")
      alert("delete success");
      window.location.reload();

      // this.router.navigateByUrl('student-list');
    }).catch(error=>{
      alert("success");
      window.location.reload();

    });
}

}
