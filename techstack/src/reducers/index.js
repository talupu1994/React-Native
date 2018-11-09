import { combineReducers } from 'redux';
import LibraryReducer from './Libraryreducer';
import SelectionReducer from './SelectionReducer';
export default combineReducers({
   libraries: LibraryReducer ,
   selectedLibraryID: SelectionReducer
});