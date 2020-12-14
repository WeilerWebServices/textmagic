import * as PropTypes from 'prop-types';
import * as React from 'react';

import {ThemeProvider} from '../../styled-components';
import {OptionsProvider} from '../OptionsProvider';

import {AppStore, IMenuItem} from '../../services';
import {ApiLogo} from '../ApiLogo/ApiLogo';
import {ContentItems} from '../ContentItems/ContentItems';
import {SideMenu} from '../SideMenu/SideMenu';
import {StickyResponsiveSidebar} from '../StickySidebar/StickyResponsiveSidebar';
import {ApiContentWrap, BackgroundStub, RedocWrap} from './styled.elements';

import {SearchBox} from '../SearchBox/SearchBox';
import {StoreProvider} from '../StoreBuilder';
import {observer} from "mobx-react";
import {SearchResultList} from "../SearchBox/SearchResultList";

export interface RedocProps {
    store: AppStore;
    onPageLoaded?: () => any;
}

interface MainState {
    i: number;
    sections: IMenuItem[];
    searchMode: true;
}

@observer
export class Redoc extends React.Component<RedocProps, MainState> {
    constructor(props: RedocProps, context: any) {
        super(props, context);

        props.store.menu.setOnChangeActiveScreenCallback(this.onChangeActiveScreen);

        this.state =
            {
                i: 0,
                sections: props.store.menu.items,
                searchMode: true
            };

        this.changeActiveScreen(this.state.sections[0].id);
    }

    static propTypes = {
        store: PropTypes.instanceOf(AppStore).isRequired,
    };

    componentDidMount() {
        this.props.store.onDidMount();
    }

    componentWillUnmount() {
        this.props.store.dispose();
    }

    render() {
        const {
            store: {spec, menu, options, search, marker},
        } = this.props;

        return (
            <ThemeProvider theme={options.theme}>
                <StoreProvider value={this.props.store}>
                    <OptionsProvider value={options}>
                        <RedocWrap className="redoc-wrap">
                            <StickyResponsiveSidebar menu={menu} className="menu-content">
                                <ApiLogo info={spec.info}/>
                                {(!options.disableSearch && (
                                    <SearchBox
                                        search={search!}
                                        marker={marker}
                                        onActivate={menu.activateAndScroll}
                                    />
                                )) ||
                                null}
                                <SideMenu menu={menu} onChangeActiveScreen={this.onChangeActiveScreen}/>
                            </StickyResponsiveSidebar>
                            <ApiContentWrap className="api-content">
                              {search && search.isActive ? <SearchResultList getItemById={menu.getItemById} term={search.term} results={search.results} onResultClick={this.onSearchResultClick}/> : <ContentItems items={this.state.sections as any} i={this.state.i}/>}
                            </ApiContentWrap>
                            <BackgroundStub/>
                        </RedocWrap>
                    </OptionsProvider>
                </StoreProvider>
            </ThemeProvider>
        );
    }

    makeParentsVisible = (menu: IMenuItem) => {
        if (menu.parent) {
            menu.parent.isVisible = true;
            this.makeParentsVisible(menu.parent);
        }
    };

    makeInvisibleItems = (items: IMenuItem[]) => {
        items.forEach((item) => {
            item.isVisible = false;

            if (item.items.length) {
                this.makeInvisibleItems(item.items);
            }
        });
    };


    makeVisibleItem = (item: IMenuItem) => {
        item.isVisible = true;
        item.items.forEach((item) => {
            this.makeVisibleItem(item);
        });
    };

    findFirstLevelParent = (item: IMenuItem) => {
        if (item.depth === 1) {
            return item;
        }

        if (item.parent) {
            return this.findFirstLevelParent(item.parent);
        }

        return null;
    };

    findTargetItem = (items: IMenuItem[], id: string) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return items[i];
            }

            if (items[i].items.length) {
                let foundItem = this.findTargetItem(items[i].items, id);
                if (foundItem) {
                    return foundItem;
                }
            }
        }

        return null;
    };

    changeActiveScreen = (id: string) => {
        this.makeInvisibleItems(this.state.sections);
        let targetItem = this.findTargetItem(this.state.sections, id);
        let firstLevelParent = this.findFirstLevelParent(targetItem);
        if(firstLevelParent){
            if(firstLevelParent.parent){
                firstLevelParent.parent.isVisible = true;
            }

            this.makeVisibleItem(firstLevelParent);
        } else {
            this.makeVisibleItem(targetItem);
        }

        this.props.store.search!.deactivate();
        this.props.store.search!.clearResults('');
        this.props.store.marker.unmark();

        if(this.props.onPageLoaded){
            this.props.onPageLoaded();
        }
    };

    onChangeActiveScreen = (id: string) => {
        this.changeActiveScreen(id);
        this.setState({i: this.state.i + 1, sections: this.state.sections});
    };

    onSearchResultClick = (id: string) => {
      let item = this.findTargetItem(this.state.sections, id);
      this.props.store.menu.activateAndScroll(item, true);
    }
}
