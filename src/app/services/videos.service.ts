import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get('https://my-json-server.typicode.com/unnikrishn6/YouTube-UI-Clone/videos')
  }

}

