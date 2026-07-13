import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(list  : any [], args? : string) : any[]{
        if(!list){
            return [];
        }
        if(!args){
            return list;
        }
        return list.filter(el=>{
            return el.toLowerCase().includes(args);
        });
    }
}