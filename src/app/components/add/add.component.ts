import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  sidBool:boolean=false;

  @ViewChild('studentForm',{static:false}) studentForm:any;

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }
  

  onSubmit(){
    this.studentService.addNewStudent(this.studentForm.form.value).subscribe(data=>{
      if(data.results==1){
        alert("new student added.");
        window.location.href="";
      }else{
        alert("error..");
      }
    })
  }


  checkId(){
    if(isNaN(this.studentForm.form.value.sid) || !this.studentForm.form.value.sid.trim()){
      return;
    }else{
      this.studentService.checkSid(this.studentForm.form.value.sid.trim()).subscribe(data=>{
        this.sidBool= !data.results;
      })
    }
  }

}
