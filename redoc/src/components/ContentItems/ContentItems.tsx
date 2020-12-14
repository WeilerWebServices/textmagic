import {observer} from 'mobx-react';
import * as React from 'react';

import {ExternalDocumentation} from '../ExternalDocumentation/ExternalDocumentation';
import {AdvancedMarkdown} from '../Markdown/AdvancedMarkdown';

import {H1, H2, MiddlePanel, Row, Section, ShareLink} from '../../common-elements';
import {ContentItemModel} from '../../services/MenuBuilder';
import {GroupModel, OperationModel} from '../../services/models';
import {Operation} from '../Operation/Operation';

@observer
export class ContentItems extends React.Component<{
    items: ContentItemModel[];
    i: number;
}> {
    render() {
        const items = this.props.items;
        if (items.length === 0) {
            return null;
        }

        return items.filter(item => item.isVisible).map(item => <ContentItem item={item} key={item.id} i={this.props.i}/>);
    }
}

export interface ContentItemProps {
    item: ContentItemModel;
    i: number;
}

@observer
export class ContentItem extends React.Component<ContentItemProps> {
    constructor(props: Readonly<ContentItemProps>) {
        super(props);
    }

    render() {
        const item = this.props.item;
        let content;
        const {type} = item;
        switch (type) {
            case 'group':
                content = null;
                break;
            case 'tag':
            case 'section':
                content = <SectionItem {...this.props} i={this.props.i} />;
                break;
            case 'operation':
                content = <OperationItem item={item as any}/>;
                break;
            default:
                content = <SectionItem {...this.props} />;
        }

        return (
            <>
                {content && (
                    <Section id={item.id} underlined={item.type === 'operation'}>
                        {content}
                    </Section>
                )}
                {item.items && <ContentItems items={item.items} i={this.props.i}/>}
            </>
        );
    }
}

const middlePanelWrap = component => <MiddlePanel compact={true}>{component}</MiddlePanel>;

@observer
export class SectionItem extends React.Component<ContentItemProps> {
    render() {
        const {name, description, externalDocs, level} = this.props.item as GroupModel;
        const Header = level === 2 ? H2 : H1;
        return (
            <>
                <Row>
                    <MiddlePanel compact={level !== 1}>
                        <Header>
                            <ShareLink to={this.props.item.id}/>
                            {name}
                        </Header>
                    </MiddlePanel>
                </Row>
                <AdvancedMarkdown source={description || ''} htmlWrap={middlePanelWrap}/>
                {externalDocs && (
                    <Row>
                        <MiddlePanel>
                            <ExternalDocumentation externalDocs={externalDocs}/>
                        </MiddlePanel>
                    </Row>
                )}
            </>
        );
    }
}

@observer
export class OperationItem extends React.Component<{
    item: OperationModel;
}> {
    render() {
        return <Operation operation={this.props.item}/>;
    }
}
