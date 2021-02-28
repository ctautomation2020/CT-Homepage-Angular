import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.component.html',
  styleUrls: ['./image-model.component.scss']
})
export class ImageModelComponent implements OnInit {
  imageForm: FormGroup;
  fileToUpload:any;
  sizeValid: boolean=false;
  typeValid: boolean=false;

  imageSrc: string="../../../../assets/img/student/back.jpg";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apollo: Apollo,public dialogRef: MatDialogRef<ImageModelComponent>) { }
  
  ngOnInit(): void {
    this.imageSrc=this.data.photoURL;
    this.imageForm = new FormGroup({
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('')
    })
  }

  get f(){
    return this.imageForm.controls;
  }
   
  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.imageForm.patchValue({
          fileSource: reader.result
        });
      };
      this.fileToUpload=event.target.files[0];
      const ftype=this.fileToUpload.type.slice(0,5);
      const fsize=Math.floor(this.fileToUpload.size/1024);
      this.typeValid=ftype=="image"?true:false;
      this.sizeValid=fsize<=100?true:false;
      
      }
  }
   
  deletephoto(){
    this.imageSrc="../../../../assets/img/student/back.jpg";
    const req = gql `
    mutation deletePhoto{
      deletePhoto
    }`;
    this.apollo.mutate({
      mutation: req
    }).subscribe(({ data }) => {
      
      
    });
    this.dialogRef.close("file");
  }

  onSubmit(){
    const req = gql `
      mutation uploadPhoto($file: Upload!) {
        uploadPhoto(file: $file)
      }`;
    this.apollo.mutate({
      mutation: req,
      variables: {
        file: this.fileToUpload
      },
      context: {
        useMultipart: true
      }
    }).subscribe(({ data }) => {
      
      
    });
    this.dialogRef.close("file");
  }

}
