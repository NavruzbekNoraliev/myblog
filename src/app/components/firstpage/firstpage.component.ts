import { Component, OnInit } from '@angular/core';
import { UnsubscribeAdapter } from 'src/app/core/helper/unsubscriber';
import { StackOverflowService } from 'src/app/core/services/stackoverflow/stackoverflow.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent extends UnsubscribeAdapter implements OnInit {

  constructor( private stackService: StackOverflowService) { super(); }
  user;
  loading = false;
  ngOnInit() {
    this.subs.sink = this.stackService.getUserDetails().subscribe(res => this.user = res);
  }

  preloader() {
    this.loading = !this.loading;
    // this.router.navigateByUrl('/');
  }

}
