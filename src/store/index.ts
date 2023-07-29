import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Store
import { RootState, AppDispatch } from './cofigureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
