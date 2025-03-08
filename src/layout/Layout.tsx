import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
// import Header from './Header';
// import Footer from './Footer';
import { getTotalPrice } from '../components/cart/Cart';
import { useCart } from '../context/CartContext';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { loginToken } from '../features/auth/authAction';

// export default function Layout() {

//   const { user } = useAppSelector(state => state.auth)
//   const { cart } = useCart();


export default function Layout() {
  // забираем данные по юзеру из redux
  const { user } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch()

  const { cart } = useCart();


  useEffect(()=> {
    // пробуем забрать токен из браузера
    const token = localStorage.getItem('token')
    // ! если в браузере есть токен посылаем с ним запрос
    if (token) {
      dispatch(loginToken(token))
    }
  }, [])

  return (
    <>
      <header className={styles.header}>
        {/* <Header /> */}
        <nav>
          {user.firstName ? <>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="/">home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="fellowship">fellowship</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="fetch-fox">fetch fox</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="products">products</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="store">store</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="cart">cart</NavLink>
            
          </> : <>

          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='login'>login</NavLink>
          </>}
        </nav>
        {user.firstName && <span>total: {getTotalPrice(cart)}€</span>}
        {/* <span>total: {getTotalPrice(cart)}€</span> */}
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        {/* <Footer /> */}
        Footer
      </footer>
    </>
  );
}

// return (
//   <>
//     <header className={styles.header}>
//       <nav>
//         {/* если firstName есть (т.е данные пришли) - мы показываем навигацию */}
//         {user.firstName ? <>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='/'>home</NavLink>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fellowship'>fellowship</NavLink>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fetch-fox'>fetch fox</NavLink>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='form-gender'>form gender</NavLink>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='products'>products</NavLink>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='cart'>cart</NavLink>
//         </> : <>
//           <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='login'>login</NavLink>
//         </>}
//       </nav>
//       {user.firstName && <span>total: {getTotalPrice(cart)}€</span>}
//     </header>
//     <main className={styles.main}>
//       <Outlet />
//       {/* на место Outlet импортированного из библиотеки react router будут приходить компоненты из routing, чьи пути мы пропишем в App.tsx */}
//     </main>
//     <footer className={styles.footer}>
//       footer
//     </footer>
//   </>
// );
// }