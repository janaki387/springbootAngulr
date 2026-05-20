import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solar } from './solar';

@Injectable({
  providedIn: 'root'
})
export class MenageService {
private getDetails="http://localhost:8085/solar/getDetails";
private addDetails="http://localhost:8085/solar/addDetails";
private getById="http://localhost:8085/solar/getDetals/{id}";
private update="http://localhost:8085/solar/update/{id}";
private delete="http://localhost:8085/solar/delete/{id}";
  constructor(private http:HttpClient) { }
  fetchDetails(){
   return this.http.get<Solar[]>(this.getDetails);
  }
  postDeatils(solar:Solar){
    return this.http.post(this.addDetails,solar);
  }getDetailsById(id:number){
    const url=this.getById.replace("{id}",id.toString());
    return this.http.get<Solar>(url);
  }
  updateDettails(id:number,solar:Solar){
        const url=this.update.replace("{id}",id.toString());
        return this.http.put<Solar>(url,solar);
      }
  deleteById(id:number){
   const url=this.delete.replace("{id}",id.toString());
   return this.http.delete(url,{responseType:'text'});
  }

}
