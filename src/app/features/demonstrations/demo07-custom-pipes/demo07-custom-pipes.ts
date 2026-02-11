import { Component } from '@angular/core';
import { ConvertToDhmsPipe } from "../../../shared/pipes/convert-to-dhms-pipe";
import { SumPipe } from "../../../shared/pipes/sum-pipe";

@Component({
  selector: 'app-demo07-custom-pipes',
  imports: [ConvertToDhmsPipe, SumPipe],
  templateUrl: './demo07-custom-pipes.html',
  styleUrl: './demo07-custom-pipes.css',
})
export class Demo07CustomPipes {
  time: number = 123456;
  values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
