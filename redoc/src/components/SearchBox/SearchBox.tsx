import * as React from 'react';

import {IMenuItem} from '../../services/MenuStore';
import {SearchStore} from '../../services/SearchStore';
import {MarkerService} from '../../services/MarkerService';
import {SearchResult} from '../../services/SearchWorker.worker';

import {
  ClearIcon,
  SearchIcon,
  SearchInput,
  SearchWrap,
} from './styled.elements';
import {observer} from "mobx-react";

export interface SearchBoxProps {
  search: SearchStore<string>;
  marker: MarkerService;
  onActivate: (item: IMenuItem) => void;
  className?: string;
}

interface SearchBoxState {
  term: string
}

@observer
export class SearchBox extends React.PureComponent<SearchBoxProps, SearchBoxState> {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  clearResults = () => {
    this.setState({
      term: ''
    });
    this.props.search.deactivate();
    this.props.search.clearResults('');
    this.props.marker.unmark();
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 27) {
      // ESQ
      this.clearResults();
    }

    if (event.keyCode === 13) {
      if(!this.state.term){
        this.clearResults();
        return;
      }

      this.props.search.search(this.state.term).then(res => {
        this.setResults(res, this.state.term);
      });
    }
  };

  setResults(results: SearchResult[], term: string) {
    window.scrollTo(0, 0);
    this.props.search.activate();
    this.props.search.setResults(results, term);
    this.props.marker.mark(term);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value
    })
  };

  render() {
    return (
      <SearchWrap role="search">
        {this.state.term && <ClearIcon onClick={this.clearResults}>×</ClearIcon>}
        <SearchIcon/>
        <SearchInput
          value={this.state.term}
          onKeyDown={this.handleKeyDown}
          placeholder="Search..."
          type="text"
          onChange={this.handleChange}
        />
      </SearchWrap>
    );
  }
}
