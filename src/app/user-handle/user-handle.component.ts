import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-handle',
    templateUrl: './user-handle.component.html',
    styleUrls: ['./user-handle.component.css']
})
export class UserHandleComponent implements OnInit 
{
    handle : string = "no_handle";

    constructor() { }

    ngOnInit(): void 
    {

    }

    setHandle() : string 
    {
        console.log(this.handle);
        return this.handle;
    }

}
