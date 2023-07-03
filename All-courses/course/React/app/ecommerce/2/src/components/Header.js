import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { jsonData, setPosts, cartCount, wishCount, posts, filterAll ,isSigned,setIsSigned,myAccount,setMyAccount} = props;

  var navLinks = document.getElementsByClassName("nav-link")
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function (e) {
      console.log(navLinks[i],i);
      for (let j = 0; j < navLinks.length; j++) {
        if (i != j) {
          navLinks[j].classList.remove('active');
        }
      }
      e.target.classList.add('active');
    }
  }
  
  let data=myAccount
  let myAccount_name=myAccount.firstName? myAccount.firstName :"User"
  
  return (
    <>
      <header>
        <div className='header row'>
          <div className='col-2'>
            <span className='kraya'>KRAYA.</span>
          </div>

          <div className="search col-5">
            <input id="searchinput" className="input1 col-xxl-10 col-sm-11"
              placeholder='search for products brands and more' onKeyDown={filterAll}></input>

            <button className="search-icon" type="submit" onClick={filterAll}>
              <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
            </button>
          </div>

          <div className='cart-icon d-flex'>
            <div className='col-5'>
              <Link to='/wish'  >
                <i className="fa fa-heart icon ms-3 nav-link"></i>
              </Link>
              <p className='cart'>{wishCount}</p>
            </div>
            <div className='col-5'>
              <Link to='/cart'  >
                <i className="fa-sharp fa-solid fa-cart-shopping icon nav-link ms-3"></i>
              </Link>
              <p className='cart'>{cartCount}</p>
            </div>
          </div>

          <div className='login justify-content-end col-2 d-flex'>
            {
              isSigned? 
              (
              <p>{myAccount_name}</p>)
              : 
              (
              <Link className='signINbtn nav-link' to='/signin'  >
                <p >Sign In</p>
              </Link>
              )
            }
            {
              isSigned ?
                (
                  <Link to='/account'>
                    <i className="fa fa-user nav-link"></i>
                  </Link>
                )
              :
              <Link to='/signin'>
                <i className="fa fa-user nav-link"></i>
              </Link>
            }
             
          </div>
        </div>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <ul className="nav navbar-nav justify-content-center col-11">
            <li className="nav-item me-3"> <Link className="nav-link active" aria-current="page" to='/'>Home</Link></li>
            <li className="nav-item me-3"> <Link className='nav-link' to='/phones'> Smart Phones </Link></li>
            <li className="nav-item me-3"><Link className='nav-link' to='/laptops' > Laptops </Link></li>
            <li className="nav-item me-3"><Link className='nav-link' to='/groceries' > Groceries </Link></li>
            <li className="nav-item me-3"><Link className='nav-link' to='/fragnaces' > Fragnaces </Link></li>
            <li className="nav-item me-3"><Link className='nav-link' to='/skincare' > Skin Care </Link></li>
            <li className="nav-item me-3"><Link className='nav-link' to='/homedecoration' >Home Decoration </Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
