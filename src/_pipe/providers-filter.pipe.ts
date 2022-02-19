import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'providersFilter'
})
export class ProvidersFilterPipe implements PipeTransform { 

  transform(value:any, args: string): any {
   
    if (!value) return null
    if(!args) return value
    
    args = args.toLowerCase();
        return value.toLocaleLowerCase().includes(args)
      
}
}
