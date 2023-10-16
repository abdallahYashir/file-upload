import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IFileData} from "./file-data.interface";


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiUrl = 'http://localhost:3000/api/documents';

  constructor(private http: HttpClient) { }

  getFiles(): Observable<IFileData[]> {
    return this.http.get<IFileData[]>(this.apiUrl);
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
