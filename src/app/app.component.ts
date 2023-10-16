import {AfterViewInit, Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {IFileData} from "./file-data.interface";
import {FileUploadService} from "./file-upload.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'file-upload';
  files: IFileData[] = [];
  constructor(private fileUploadService:FileUploadService) {
  }
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    this.fileUploadService.getFiles().subscribe(files => this.files = files);
  }

  uploadFile(form: NgForm): void {
    const formData = new FormData();
    formData.append('file', form.value.file);

    this.fileUploadService.uploadFile(formData).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
