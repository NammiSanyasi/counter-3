import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  isDisabled = false;
  isEven ="Even";


  checkEvenOdd()
  {    
        if (this.count % 2 == 1)
          { 
              this.isEven = "odd";
          }
        else 
          {
             this.isEven = "Even";
          }
    }
  incr() 
    {
        if (this.count >= 20) 
          {
            this.isDisabled=true
          }
        else 
          {
             this.count++;
          }
      this.checkEvenOdd();

    }


  decr() {
   if (this.count <=0){
    this.isDisabled=true
    }
  else{
    this.count--;
   }
  this.checkEvenOdd();
  }

  reset(){ 
    this.count = 0; 
    
  }
}


