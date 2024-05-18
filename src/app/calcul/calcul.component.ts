import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcul',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcul.component.html',
  styleUrl: './calcul.component.css'
})
export class CalculComponent {
    // RxJs (change detection / input/ output / eventEmiter) ===> taille assez elevée 
    // Operation avec forte dépendence (custom operator with RxJS)
    number1: WritableSignal<number> = signal(0); 
    number2: WritableSignal<number> = signal(0);
    sum: Signal<number> = computed(()=> this.number1() + this.number2());

    log = effect((cleanup) => console.log("===> "+ this.number1() + " & "+ this.number2()))

    // calculSum(){
    //   this.sum = this.number1 + this.number2
    // }

    changeNumber1(value: string){
      // set (il faut changer directement la nouvelle valeur)
      this.number1.set(+value)
    }

    changeNumber2(value: string){
      // update ( ça te donne l'ancien valuer v)
      this.number2.update(v => +value);
    }


    // getters
    getNumber1(){
      this.number1()
    }
    getNumber2(){
      this.number2()
    }
}
