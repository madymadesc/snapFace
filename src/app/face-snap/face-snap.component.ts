import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapTitle!: string;

  ngOnInit(){
    this.snapTitle= 'Oh Snap!';
  }

  onClickAddSnap(){
    if(this.snapTitle === 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.snapTitle = 'Oops, un Snap!'
    }else{
      this.faceSnap.snaps--;
      this.snapTitle= 'Oh Snap!';
    }
  }
}
