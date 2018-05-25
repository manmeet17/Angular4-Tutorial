import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform{
    transform(value: string){
        if(!value)
            return null;
            
        let preps=['of','the','and','or','after','before','on','is'];
        let words=value.split(' ');
        console.log(typeof(words));
        
        console.log("Words are : "+words);
        for(var i=0;i<words.length;i++){
            if(i>0 && preps.includes(words[i])){
                words[i]=words[i].toLowerCase();
            }else{
                words[i]=words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLowerCase();
                }
            }
        
        return words.join(" ");
    }
}