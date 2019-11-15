import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost/InternetProgramming/backend/public/api/v1/students")
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  addData(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost/InternetProgramming/backend/public/api/v1/students/add", data, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  updateData(data, id) {
    return new Promise((resolve, reject) => {
      this.http.put("http://localhost/InternetProgramming/CRUDLumen-master/public/api/v1/updateData/" + id, data, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  deleteData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete("http://localhost/InternetProgramming/CRUDLumen-master/public/api/v1/deleteData/" + id, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

}
