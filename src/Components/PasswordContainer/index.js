import {Component} from 'react'
import {v4} from 'uuid'

import SavingPasswordContainer from '../SavingPasswordContainer'
import './index.css'

class PasswordContainer extends Component {
  state = {website: '', username: '', password: '', Loader: false, list: []}

  input = () => {
    this.setState(prevState => ({Loader: !prevState.Loader}))
  }

  render1 = () => (
    <div className="logoImageContainer">
      <img
        className="image3"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p>No Passwords</p>
    </div>
  )

  checkBoxing = () => {
    this.setState(prevState => ({
      Loader: !prevState.Loader,
    }))
  }

  btn = event => {
    console.log('ravi')
    const {username, password, website} = this.state
    const newItem = {
      id: v4(),
      username,
      password,
      website,
    }
    event.preventDefault()
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  changing3 = event => {
    this.setState({password: event.target.value})
  }

  changing2 = event => {
    this.setState({username: event.target.value})
  }

  render3 = () => {
    const {list, Loader} = this.state
    return list.map(each => (
      <SavingPasswordContainer
        key={each.id}
        Loader={Loader}
        list={list}
        filtering={this.filtering}
        each={each}
      />
    ))
  }

  changing1 = event => {
    this.setState({website: event.target.value})
  }

  filtering = id => {
    const {list} = this.state
    const newList = list.filter(each => each.id !== id)
    this.setState({list: newList})
  }

  searching = event => {
    this.setState(prevState => ({
      list: prevState.list.filter(each =>
        each.website.includes(event.target.value.toLowerCase()),
      ),
    }))
  }

  render() {
    const {list, website, username, password} = this.state
    return (
      <div className="bg-container">
        <div className="logo-parent-container">
          <div className="logo-container">
            <img
              className="image1"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            />
          </div>
          <div className="password-container1">
            <form className="formContainer">
              <h1>Add New Password</h1>
              <div className="websiteContainer">
                <img
                  className="image2"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  value={website}
                  type="text"
                  onChange={this.changing1}
                  placeholder="Enter Website"
                />
              </div>
              <div className="userContainer">
                <img
                  className="image2"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="username"
                />
                <input
                  value={username}
                  onChange={this.changing2}
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
              <div className="passwordContainer">
                <img
                  className="image2"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  value={password}
                  onChange={this.changing3}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <button
                onClick={this.btn}
                data-testid="delete"
                className="btn"
                type="submit"
              >
                Add
              </button>
            </form>
            <img
              className="image3 sm"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <img
              className="image3 lg"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="parent-list-container">
            <div className="parent-list-container-items">
              <h1>Your Passwords {list.length}</h1>
              <div className="parent-list-search-container">
                <img
                  className="image2"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input type="search" onChange={this.searching} />
              </div>
            </div>
            <div className="checkbox-container">
              <input id="input" onClick={this.input} type="checkbox" />
              <label htmlFor="input">Show passwords</label>
            </div>
            <hr className="horizontalLine" />
            <ul className="list-container">
              {list.length > 0 ? this.render3() : this.render1()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordContainer
