import React from 'react';
import Link from 'next/link';


const Layout = ({children}) => {
  return (
    <>  
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link href="/" passHref>
                        <div class="nav-link text-white">Task 1</div>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/customers" passHref>
                        <div class="nav-link text-white">Task 2</div>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        {children}
    </>

  )
}

export default Layout