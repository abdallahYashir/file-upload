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
  constructor(private fileUploadService:FileUploadService) {
  }
  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    this.fileUploadService.getFiles().subscribe(files => this.files = files);
  }
}
