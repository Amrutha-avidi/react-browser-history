import './index.css'

const HistoryItem = props => {
  const {searchItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchItem

  const deleteHistory = () => {
    deleteHistoryItem(id)
  }

  return (
    <li>
      <div className="history-item-con">
        <div className="history-item-content">
          <p>{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>

        <div type="button" className="history-item-button-con">
          <button data-testid="delete" type="button" onClick={deleteHistory}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
