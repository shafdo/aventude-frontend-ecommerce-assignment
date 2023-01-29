/* eslint-disable react-hooks/rules-of-hooks */
import { saveUserData } from '../store';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

export const loadSettings = () => {
  const dispatch = useDispatch();
  // Set redux state variables from localstorage
  const savedSettings = JSON.parse(localStorage.getItem('settings') || '{}');

  if (_.isEmpty(savedSettings)) return;

  dispatch(saveUserData(savedSettings));
};
