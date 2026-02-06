import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02-attribute-binding',
  imports: [],
  templateUrl: './demo02-attribute-binding.html',
  styleUrl: './demo02-attribute-binding.css',
})
export class Demo02AttributeBinding {

  showPassword: boolean = true;
  password: string = "MonPassword!123=";

  urlImage: string = "https://images.ctfassets.net/denf86kkcx7r/2lAnM10AMAxuGdxSvtNK9m/19d1ed1cc37d43d0d15fe9653b49eac4/chat_noir_soleil.jpg";
  
  altImage: string = "Photo d'un petit chat noir";
  widthImage: string = "300";

}
