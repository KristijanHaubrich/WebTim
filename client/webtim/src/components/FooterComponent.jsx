import React, { Component } from 'react'
import classes from "../styles/Footer.module.scss";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
          <footer>
              <nav className='footer'>
                  <div className={classes.container}>
                      <div className={classes.text}>David Kvesic | Kristijan Haubrich </div>
                      <a href ="https://github.com/KristijanHaubrich/WebTim"><i>Github Link</i> </a>
                  </div>
              </nav>
          </footer>
      </div>
    )
  }
}
