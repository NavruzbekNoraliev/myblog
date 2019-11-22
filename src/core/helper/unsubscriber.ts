import { OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

export class UnsubscribeAdapter implements OnDestroy {
  subs = new SubSink();
  ngOnDestroy(): void {
    console.log('unsubscribing');
    this.subs.unsubscribe();
  }
}
