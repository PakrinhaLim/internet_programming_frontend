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
      this.http.get("http://localhost:8080/InternetProgramming/backend/public/api/v1/students")
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }
  getID(id) {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:8080/InternetProgramming/backend/public/api/v1/students/getID/"+ id, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  addData(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:8080/InternetProgramming/backend/public/api/v1/students/add", data, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  updateData(data, id) {
    return new Promise((resolve, reject) => {
      this.http.put("http://localhost:8080/InternetProgramming/backend/public/api/v1/students/updateData/" + id, data, httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }
  

  deleteData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete("http://localhost:8080/InternetProgramming/backend/public/api/v1/students/deleteData/"+id , httpOptions)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

}
