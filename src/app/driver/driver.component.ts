import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'driver-root',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  title = 'Courier-client';
  date = this.dataService.getDate();
  drivers: any[] = [];
  driver = new Driver();


  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    
    
    this.dataService.getDrivers().subscribe({
      next: (data:any[]) => this.drivers = <any[]>data,
      error: (err :string) => {
        console.error(err),
        console.warn("Cannot connect to server, using Demo Driver Account");
        this.drivers = [{id: -1}];
        this.driver.number = "-1";
      },
      complete: () => {
        console.log(this.drivers)
        this.driver.number = this.drivers[0].id;
      }
    });
  }
  save(formData: NgForm): void {
    let driver = formData.form.value.driverNumber;

    this.router.navigate(['stops', driver]);
  }
  
}

class Driver {
  constructor(
    public number = "",
  ) { }
}



