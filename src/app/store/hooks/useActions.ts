import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { tasksReducer } from '../reducers/tasksReducer';
import { actionCreators } from '../index';

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(
        () =>
            bindActionCreators(
                {
                    ...actionCreators,
                    ...tasksReducer.actions,
                },
                dispatch,
            ),
        [dispatch],
    );
};
