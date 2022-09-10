import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs')formTabs: TabsetComponent;
  propertyTypes: Array<string> = ['House','Apartment','Duplex']
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished']
  propertyView: IProperty = {
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    Type: null
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit()
  {
    console.log('Congrats, for Submitted');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active =true;
  }

}
