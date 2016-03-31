import { Pipe } from 'angular2/core';

@Pipe({
  'name': 'starts_with_s'
})
export class StartsWithSFilter {
  transform(value){
    return value.filter(item => item.title.startsWith('s'));
  }
}
