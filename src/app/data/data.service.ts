import { Injectable } from '@angular/core';
import {Post} from '../Post';
import {Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
ELEMENT_DATA:Post[]=[
  {position:0 ,title: 'Post one',category:'Web development',date_posted:new Date(),body:'body 1'},
  {position:1 ,title: 'Post two',category:'Android Development',date_posted:new Date(),body:'body 2'},
  {position:3 ,title: 'Post three',category:'IOS Development',date_posted:new Date(),body:'body 3'},
  {position:3 ,title: 'Post four',category:'Web development',date_posted:new Date(),body:'body 4'},
  {position:4 ,title: 'Post five',category:'Android Development',date_posted:new Date(),body:'body 5'},
  {position:5 ,title: 'Post six',category:'Web development',date_posted:new Date(),body:'body 6'},
  {position:6 ,title: 'Post seven',category:'IOS Developmentt',date_posted:new Date(),body:'body 7'},
  {position:7 ,title: 'Post eight',category:'Web development',date_posted:new Date(),body:'body 8'}
];
Categories=[
  {value: 'Web-Development', viewValue: 'Web Development'},
  {value: 'Android-Development', viewValue: 'Android Development'},
  {value: 'IOS-Development', viewValue: 'IOS Development'}
];
  constructor() { }

  getData():Observable<Post[]>{
    return of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories(){
    return this.Categories;
  }

  addPost(data:any){
    this.ELEMENT_DATA.push(data)
  }

  deletePost(index){
    this.ELEMENT_DATA=[...this.ELEMENT_DATA.slice(0,index),...this.ELEMENT_DATA.slice(index+1)]
  }
  dataLength(){
    return this.ELEMENT_DATA.length;
  }
}
