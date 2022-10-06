import { Link } from 'react-router-dom'

import React from 'react'

function Public() {
 const content = (
    <section className="public">
        <head>
            <h1>Welcome to <span className="nowrap">Dan D. Repaires!
            </span></h1>
        </head>
        <main className="public__main">
            <p>
               Located in Beautiful Downtown Foo City, Dan D. Repaires
               provides a trained staff ready to meet your repair needs. 
            </p>
            <address className="public__addr">
                Dan D. Repaires<br/>
                555 Foo Drive<br/>
                Foo City, CA 1234<br/>
                <a href="tel:+237678251082">(555) 555-555555</a>
            </address>
              <br/>
            <p>Owner: Nelson Bechem</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>
  )
  return content
}

export default Public