import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Students } from '../models/students/students'
import { StudentService} from '../service/student/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  studentFormGroup: FormGroup;
  user: any = [];
  constructor(
    private router: Router,
    private formBuilder:FormBuilder,
    private studentService: StudentService
  ) {     
      this.studentFormGroup = this.formBuilder.group({
        stu_id: ["", [Validators.required, Validators.maxLength(255)]],
        fname: ["", [Validators.required, Validators.maxLength(255)]],
        lname: ["", [Validators.required, Validators.maxLength(255)]],
        major_id: ["", [Validators.required, Validators.maxLength(255)]],
        address: ["", [Validators.required, Validators.maxLength(255)]],
      });
    }

  ngOnInit() {

  }
  submit(){
    const controls = this.studentFormGroup.controls;
		// console.log(controls, "control")
		// tslint:disable-next-line:prefer-const
		let Data = this.prepareUser();
		/** check form */
		// console.log(this.ExamformGroup.invalid, "form invalid")
		if (this.studentFormGroup.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}
		this.add(Data);
  }
  prepareUser(): Students {
		const controls = this.studentFormGroup.controls;
		const _formValue = new Students();
		_formValue.student_id = controls['stu_id'].value;
		_formValue.first_name = controls['fname'].value;
		_formValue.last_name = controls['lname'].value;
		_formValue.major_id = controls['major_id'].value;
		_formValue.address = controls['address'].value;
		return _formValue;
  }
  // add(Data:Students){
    add(data){
    
    this.studentService.addData(data).then((res:any)=>{
      this.getAll();
      alert("success");
      this.router.navigateByUrl('student-list');
      // this.notification.showNotification('top','center','Add Success');
    }).catch(error=>{
      alert(error.error);
    });
    // this.studentService.addData(data).then((data: any) => {
    //   this.getAll();
    // })
  }
  getAll() {
    this.studentService.getAll().then((data: any) => {
      console.log(data);
      this.user = data.data;
    })
  }
}
