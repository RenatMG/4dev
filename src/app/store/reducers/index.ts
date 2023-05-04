import { combineReducers } from '@reduxjs/toolkit';
import tasks from './tasksReducer';

export const reducer = combineReducers({
    tasks,
});

export default reducer;

