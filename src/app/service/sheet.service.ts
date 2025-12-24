import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sheet } from '../Models/sheet.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

    createSheet(fullName:String,email:String,phoneNumber:Number,subject:String,message:String):Observable <sheet>{
      return this.http.post <sheet>(`${environment.CONNECTION_URL}`,{fullName,email,phoneNumber,subject,message,});

    }
    getSheetDataById(id:number){
      return this.http.get(`${environment.CONNECTION_URL}/${id}`)
    }
}
