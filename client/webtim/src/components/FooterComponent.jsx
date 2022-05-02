import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
          <footer>
              <nav className='footer navbar-dark bg-dark'>
                  <div>
                      David Kvesic | Kristijan Haubrich
                      <br/>
                      <a href ="https://github.com/KristijanHaubrich/WebTim"><i>Github Link</i> </a>
                  </div>
              </nav>
          </footer>
      </div>
    )
  }
}
