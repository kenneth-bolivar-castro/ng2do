import { Pipe } from 'angular2/core';

@Pipe({
  name: 'bystatus'
})
export class ByStatusPipe{
  transform(value, [status]){
    return value.filter(item => item.status === status);
  }
}
