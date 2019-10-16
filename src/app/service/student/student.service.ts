import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  public API_URL = 'http://localhost/InternetProgramming/backend/public/api/v1';
  public path= 'students';
  constructor(
    protected http: HttpClient,
    
  ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}/${this.path}`)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  // get(id: number): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http
  //       .get(`${StudentService.API_URL}/${this.path}/${id}`)
  //       .toPromise()
  //       .then((response: any) => {
  //         response.status === "error" ? reject(response) : resolve(response);
  //       })
  //       .catch(error => {
  //         // this.handleError(error);
  //       });
  //   });
  // }
}
