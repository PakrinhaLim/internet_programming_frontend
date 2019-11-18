import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Students } from '../../models/students/students'
import { StudentService} from '../../service/student/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { QueryParamsModel } from '../../models/query-params.model';

@Component({
  selector: 'update_student',
  templateUrl: './update_student.component.html'
})
export class UpdateStudentComponent implements OnInit {
  item: Students
	oldItem: Students
  studentFormGroup: FormGroup;
  user: any = [];
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  id: number

  constructor(
    private router: Router,
    private formBuilder:FormBuilder,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
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

    this.loadingSubject.next(true);
		this.createForm();
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.id) {
        
        
        this.id = params.id
        console.log(this.id,"IDDDDDDD");
				this.studentService.getID(this.id).then(res => {

          this.item = res["data"][0];
					this.oldItem = Object.assign({}, res["data"]);
          this.initPage();
            })
          }
        })
  }

  initPage() {
		this.createForm();
		this.loadingSubject.next(false);
	}

  createForm() {
		if (this.item) {

			this.studentFormGroup = this.formBuilder.group({
				stu_id: [this.item.student_id],
        fname: [this.item.first_name],
        lname: [this.item.last_name],
        major_id: [this.item.major_id],
        address: [this.item.address],

			});
    } 
    this.cdr.detectChanges();
  }
  
  updatestu(){
    const controls = this.studentFormGroup.controls;
		let Data = this.prepareUser();
		if (this.studentFormGroup.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}
		this.update(this.id,Data);
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
    update(id,data){
    alert(id)
    console.log(data,"data to update")
    this.studentService.updateData(id,data).then((res:any)=>{
      alert("success");
      this.router.navigateByUrl('student-list');
    }).catch(error=>{
      alert("error");
      this.router.navigateByUrl('student-list');

    });
  }
}
