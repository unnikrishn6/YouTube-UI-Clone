import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit{
  list:any=[];

  public constructor(private service:VideosService){}

  ngOnInit() {
    this.service.getVideos().subscribe((data) => {
      this.list = data;
      console.log(this.list)
    })
  }
  
  redirect(index: any): void {
    window.location.href = index.link;
  }

}
