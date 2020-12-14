import * as React from 'react';

import {SearchResult} from "../../services/SearchWorker.worker";
import {IMenuItem} from "../../services";
import {H1, H3, MiddlePanel, Row, SearchResultItemContainer, Section} from '../../common-elements';
import {AdvancedMarkdown} from "../Markdown/AdvancedMarkdown";


export interface SearchResultListProps {
  term: string;
  results: SearchResult[];
  getItemById: (id: string) => IMenuItem | undefined;
  onResultClick: (id: string) => void;
}

export interface SearchResultItemProps {
  item: IMenuItem;
  score: number;
  onResultClick: (id: string) => void;
}

// export interface SearchResultListState {
//   activeItemIdx: number;
// }

function trunc(str, n) {
  return (str.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
};

const middlePanelWrap = component => <MiddlePanel compact={true}>{component}</MiddlePanel>;

const beforeRenderDescriptionFilters = () => {
    return [
        (item: string) => {
            return item.replace(/(<([^>]+)>)/ig, '');
        },
        (item: string) => {
            return item.replace('Try in sandbox', '');
        },
    ];
};

export class SearchResultItem extends React.PureComponent<SearchResultItemProps> {
  render() {
    const {item} = this.props;

    let description = item.description ? item.description : '';
    beforeRenderDescriptionFilters().forEach(filter => {
        description = filter(description);
    });

    if(item.type === 'operation' && !description.length){
        description = 'API endpoint documentation';
    }

    return (
      <SearchResultItemContainer>
        <Row>
          <MiddlePanel compact={false}>
            <H3>
              <a href="#" onClick={((e) => {
                e.preventDefault();
                this.props.onResultClick(item.id);
              })}>{item.name}</a>
            </H3>
          </MiddlePanel>
        </Row>
        <AdvancedMarkdown source={trunc(description, 300)} htmlWrap={middlePanelWrap}/>
      </SearchResultItemContainer>
    );
  }
}

export class SearchResultList extends React.PureComponent<SearchResultListProps> {
  render() {
    const {results, getItemById} = this.props;

    results.sort((a, b) => b.score - a.score);

    const normalizedResults = results.filter((item) => item.score > 10).map(result => {
      return {
        item: getItemById(result.meta)!,
        score: result.score
      }
    });

    if (normalizedResults.length > 0) {
      return (
        <>
          <MiddlePanel>
            <H1>Search results</H1>
          </MiddlePanel>
          {
            normalizedResults.map(result => <SearchResultItem score={result.score} item={result.item}
                                                              key={result.item.id}
                                                              onResultClick={this.props.onResultClick}/>)
          }
        </>
      )
    }

    return (
      <MiddlePanel>
        <Section>
            <br/>
            We could not find any results with this keyword. Please try using a different search keyword.
        </Section>
      </MiddlePanel>
    );
  }
}
