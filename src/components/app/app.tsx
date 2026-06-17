import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPockemonsAction } from '../../store/api-actions';
import { selectPockemonsLoading } from '../../store/pockemons/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../../pages/home/main-screen';

function App(): React.ReactElement {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectPockemonsLoading);

  useEffect(() => {
    dispatch(fetchPockemonsAction());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <MainScreen />;
}

export default App;
