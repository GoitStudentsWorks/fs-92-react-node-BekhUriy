import { useSelector } from 'react-redux';
import { selectWaterMonth, selectWaterRecords } from '../redux/water/selectors.js';


export const useWater = () => ({
  waterRecords: useSelector(selectWaterRecords),
  waterMonth: useSelector(selectWaterMonth),
});