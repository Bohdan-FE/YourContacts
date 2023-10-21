import { Container } from 'components/App/App.styled';
import Header from 'components/Header/Header';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';

function Layout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default Layout;
