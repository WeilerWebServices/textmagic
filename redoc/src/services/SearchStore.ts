import {IS_BROWSER} from '../utils/';
import {IMenuItem} from './MenuStore';
import {OperationModel} from './models';

import Worker, {SearchResult} from './SearchWorker.worker';
import {action, observable} from "mobx";
// import {act} from "react-dom/test-utils";

let worker: new () => Worker;

if (IS_BROWSER) {
  try {
    // tslint:disable-next-line
    worker = require('workerize-loader?inline&fallback=false!./SearchWorker.worker');
  } catch (e) {
    worker = require('./SearchWorker.worker').default;
  }
} else {
  worker = require('./SearchWorker.worker').default;
}

export class SearchStore<T> {
  searchWorker = new worker();

  @observable isActive: boolean = false;

  @observable results: SearchResult[] = [];

  @observable term: string = '';

  @action
  setResults(results: SearchResult[], term: string) {
    this.results = results;
    this.term = term;
  }

  @action
  clearResults(term: string) {
    this.term = term;
    this.results = [];
  }

  @action
  activate() {
    this.isActive = true;
  }

  @action
  deactivate() {
    this.isActive = false;
  }

  beforeIndexFilters = () => {
    return [
      (item: string) => {
        return item.replace(/```([\s\S.]*)```/g, '');
      },
      (item: string) => {
        return item.replace(/(<([^>]+)>)/ig, '');
      },
      (item: string) => {
        return item.replace(/###/g, '');
      }
    ];
  };

  indexItems(groups: Array<IMenuItem | OperationModel>) {
    const recurse = items => {
      items.forEach(group => {
        if (group.type !== 'group') {

          let description = group.description || group.name;

          this.beforeIndexFilters().forEach(filter => {
            description = filter(description);
          });

          this.add(group.name, description, group.id);
        }
        recurse(group.items);
      });
    };

    recurse(groups);
    this.searchWorker.done();
  }

  add(title: string, body: string, meta?: T) {
    this.searchWorker.add(title, body, meta);
  }

  search(q: string) {
    return this.searchWorker.search<T>(q);
  }

  async toJS() {
    return this.searchWorker.toJS();
  }

  load(state: any) {
    this.searchWorker.load(state);
  }
}
