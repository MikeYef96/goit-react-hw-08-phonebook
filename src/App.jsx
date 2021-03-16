import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import HeaderMUI from './components/HeaderMUI/HeaderMUI';
import BottomAppBar from './components/Footer/BottomAppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { css } from '@emotion/react';
import ClockLoader from 'react-spinners/ClockLoader';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#011211',
    },
    secondary: {
      main: '#faa346',
    },
  },
});

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <ClockLoader css={override} color={'#e8834d'} size={150} />
      ) : (
        <ThemeProvider theme={theme}>
          <HeaderMUI />
          <Switch>
            <Suspense
              fallback={
                <ClockLoader css={override} color={'#e8834d'} size={150} />
              }
            >
              <PublicRoute exact path="/" component={HomePage} />
              <PublicRoute
                path="/register"
                component={RegisterPage}
                redirectTo="/"
                restricted
              />
              <PublicRoute
                path="/login"
                component={LoginPage}
                redirectTo="/"
                restricted
              />
              <PrivateRoute
                path="/contacts"
                component={ContactsPage}
                redirectTo="/login"
              />
            </Suspense>
          </Switch>
          <BottomAppBar />
        </ThemeProvider>
      )}
    </Container>
  );
}
