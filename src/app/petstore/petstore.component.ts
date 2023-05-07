import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { DialogComponent } from './dialog.component';
import { Dialog2Component } from './dialog2.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-petstore',
  templateUrl: './petstore.component.html',
  styleUrls: ['./petstore.component.css']
})

export class PetstoreComponent implements OnInit, AfterViewInit {
  posts: any[] = [];
  displayColumn: string[] = ['id', 'name', 'photosUrls', 'tags.name', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>(); 
  photosUrl = "string";
  changed_data: any[] = [];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  name: any;
  status: any;
  url: any;

  constructor(private http: HttpClient, private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.url) {
        this.getPosts(params.url);
      }
    });
  }
  getPosts(url: string): void {
    this.http.get<any>(url).subscribe(response => {
      this.posts = response;
      this.dataSource.data = response;
    });
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
  }
  showData(element: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    data: element,
  });

  dialogRef.afterClosed().subscribe((result) => {
    this.changed_data = result;
    console.log(this.changed_data);
  });
}
showData2(element: any): void {
  const dialogRef = this.dialog.open(Dialog2Component, {
    data: element,
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log(result)
    if (result) { 
      this.http.put(`https://petstore.swagger.io/v2/pet/${result.id}`, result).subscribe(response => {

      });
    }
  });
}


}