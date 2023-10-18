import {AfterViewInit, Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {IFileData} from "./file-data.interface";
import {FileUploadService} from "./file-upload.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'file-upload';
  files: IFileData[] = [];
  infoAlert: string = '';
  constructor(private fileUploadService:FileUploadService) {
  }
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    this.fileUploadService.getFiles().subscribe(files => this.files = files);
  }

  uploadFile(event: any): void {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    this.fileUploadService.uploadFile(formData).subscribe({
      next: response => {
        if (response.status === 409) {
          this.infoAlert = `You have already uploaded this file: ${response.name} with checksum: ${response.checksum}`;
        } else {
          this.infoAlert = `File ${response.name} uploaded successfully`;
          this.fileUploadService.getFiles().subscribe(files => this.files = files);
        }

        // TODO: enhancement: have the banner disappear after a few seconds
      },
      error: error => {
        this.infoAlert = `File ${error.name} upload failed`;
      }
    });
  }
}
