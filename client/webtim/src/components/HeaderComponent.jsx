import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><h1 href="https://github.com/KristijanHaubrich/WebTim" className="navbar-brand">WebTim</h1></div>
                    </nav>
                </header>
            </div>
        )
    }
}
