export default function ErrorModal({ onClose, menssagem }) {
  const formatMessage = () => {
    const message = menssagem[0].toUpperCase() + menssagem.substring(1);
    return message
  }
  return (
    <div className="modal fade show d-block text-start" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4">Erro</h1>
          </div>
          <div className="modal-body fs-6">
            <p className="">{formatMessage()}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}