import { Pipe, PipeTransform } from '@angular/core';

interface languagesObject {
  [index:string]:string;
}

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {
  langsArray:string[] = [];

  transform(langs: languagesObject | undefined): String {
    return langs ? 
      Object.values(langs).join(", ") : 
      "No languages to display";
  }

}
