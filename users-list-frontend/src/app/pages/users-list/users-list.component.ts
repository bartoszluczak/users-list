import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { DetailsPopupComponent } from './details-popup/details-popup.component';
import { GetUsersService } from '@services/get-users.service';

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'color'];
  dataSource: MatTableDataSource<User>;

  constructor(
    private getUsersService: GetUsersService,
    public dialog: MatDialog
  ) {
    let users = [];
    this.getUsersService.getUsers().subscribe((res: any) => {
      users = res.data;
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(row): void {
    console.log(row);
    const dialogRef = this.dialog.open(DetailsPopupComponent, {
      data: row,
    });
  }

  removeUser(row): void {
    const data = this.dataSource.data;
    const indexToRemove = data.findIndex((index) => index.id === row.id);
    data.splice(indexToRemove, 1);
    this.dataSource.data = data;
    this.dataSource.paginator._changePageSize(
      this.dataSource.paginator.pageSize
    );
  }
}
