import * as Mark from 'mark.js';

export class MarkerService {

  markInstance: Mark | undefined = undefined;
  previousTerm: string = '';

  constructor() {

  }

  clearAll() {
    this.unmark();
  }

  mark(term?: string) {
    if(this.markInstance){
      this.markInstance.unmark();
    }

    this.markInstance = new Mark(document.querySelector(".api-content") as HTMLElement);
    this.markInstance.mark(term || this.previousTerm);

    if(term){
      this.previousTerm = term;
    }
  }

  unmark() {
    this.previousTerm = '';

    if(this.markInstance){
      this.markInstance.unmark();
    }
  }

}
