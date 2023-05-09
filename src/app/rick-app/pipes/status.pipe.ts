import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../interface/rick-app.interface';
import { ColorStatus } from '../interface/color-status.interface';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: Status | undefined): ColorStatus | undefined {

    switch(status){

      case Status.Alive:
        return ColorStatus.Green;

      case Status.Dead:
        return ColorStatus.Red;

      case Status.Unknown:
        return ColorStatus.Gray;

      default:
        return status;

    }

  }

}
