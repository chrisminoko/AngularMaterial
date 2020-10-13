import {Component} from '@angular/core';
import {DataService} from '../data/data.service';
import {Post} from '../Post';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import {PostDialogComponent} from '../post-dialog/post-dialog.component'; 
import {MatDialog}  from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private dataService: DataService,private toastr: ToastrService,public dialog:MatDialog) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  openDialog():void{
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }

  deletePost(id) {
    
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
      this.showSuccess();
  }


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!',
    {timeOut: 2000});;
  }
  showError() {
  this.toastr.error('everything is broken', 'Major Error', {
  timeOut: 3000
});
}
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}