
import {defaultStyles, defaultTitle} from '@/constance';
import {clone, dateFilter} from '@/core/utils';

const defaultState = {
  title: defaultTitle,
  date: dateFilter(new Date(), 'datetime'),
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
