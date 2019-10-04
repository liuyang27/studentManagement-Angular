import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../Student';


@Injectable({
  providedIn: 'root'
})


export class StudentService {

  constructor( private http: HttpClient) { }


  getAllStudents():Observable<Student[]>{
    var res = this.http.get<Student[]>("http://localhost:3000/student");
    return res;

  }

  addNewStudent(s):Observable<any>{
    return this.http.post("http://localhost:3000/student/",s);
  }

  deleteStudentBySid(sid):Observable<any>{
    var res = this.http.delete("http://localhost:3000/student/"+sid);
    return res;
  }

  checkSid(sid):Observable<any>{
    var res= this.http.put("http://localhost:3000/student/"+sid,{});
    return res;
  }

  editStudent(s):Observable<any>{
    var res= this.http.post("http://localhost:3000/student/"+s.sid,{"name":s.name,"gender":s.gender,"age":s.age});
    return res;
  }



}
