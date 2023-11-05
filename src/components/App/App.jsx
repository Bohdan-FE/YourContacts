import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRouts';
import { PrivateRoute } from 'components/PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/thunk';
import { isRefreshingSelector } from 'redux/selectors';
import LogInForm from 'components/LogInForm/LogInForm';
import SignUpForm from 'components/SignUpForm/SignUpForm';

const Contacts = lazy(() => import('../../pages/contacts'));

const Form = lazy(() => import('../../components/FormContainer/FormContainer'));

export const App = () => {
  const isRefreshing = useSelector(isRefreshingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />

        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Form />} />
          }
        >
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInForm />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<SignUpForm />}
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
