import { Component, OnInit } from '@angular/core';
import { StackOverflowService } from 'src/core/services/stackoverflow/stackoverflow.service';
import { UnsubscribeAdapter } from 'src/core/helper/unsubscriber';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends UnsubscribeAdapter implements OnInit {
  user;
  loading = false;

  constructor(private stackService: StackOverflowService, private router: Router ) {  super(); }

  ngOnInit() {
    this.subs.sink = this.stackService.getUserDetails().subscribe(res => this.user = res);
  }

  preloader() {
    this.loading = !this.loading;
    // this.router.navigateByUrl('/');
  }

}
