import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IFileData} from "./file-data.interface";


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  getFiles(): Observable<IFileData[]> {
    const files: IFileData[] = [
      {
        name: 'file1',
        checksum: '1234567890',
        size: 123456,
        created_date: new Date(),
        modified_date: new Date()
      },
      {
        name: 'file2',
        checksum: '1234567890',
        size: 123456,
        created_date: new Date(),
        modified_date: new Date()
      },
      {
        name: 'file3',
        checksum: '1234567890',
        size: 123456,
        created_date: new Date(),
        modified_date: new Date()
      }
    ];

    return of(files); // Convert the array to an observable using the `of` operator
  }
}
