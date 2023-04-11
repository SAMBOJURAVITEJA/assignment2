import './index.css'

const SavingPasswordContainer = props => {
  const {each, filtering, Loader} = props
  const {id, username, password, website} = each
  const firstLetter = username.slice(0, 1)
  const passwordImage = Loader ? (
    password
  ) : (
    <img
      className="image4"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const render2 = () => {
    const deleting = () => {
      filtering(id)
    }

    return (
      <div className="logoBoxContainer">
        <div className="logo-box">
          <p className="firstLetter">{firstLetter}</p>
          <div className="content-container">
            <p>{website}</p>
            <p>{username}</p>
            <p>{passwordImage}</p>
          </div>
          <img
            className="img"
            onClick={deleting}
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    )
  }

  return (
    <li>
      <div className="logoBoxImageContainer">{render2()}</div>
    </li>
  )
}
export default SavingPasswordContainer
