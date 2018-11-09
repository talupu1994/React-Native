import React , {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component{
    renderItme(library) {
        return <ListItem library={library} />;
    }

    render() {
        return(
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItme}
                keyExtractor={library => library.id}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
