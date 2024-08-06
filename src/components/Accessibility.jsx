import './Accessibility.css'

const Accessibility = ({handleAccessibility, handleClick}) => {
  return (
    <div className="accessibility-container">
    <ul>
      <li id='zoom-in' onClick={(e) => handleAccessibility(e)}><i class="bi bi-zoom-in"></i> Aumentar Letras</li>
      <li id='zoom-out' onClick={(e) => handleAccessibility(e)}><i class="bi bi-zoom-out" ></i> Diminuir Letras</li>
      <li><i class="bi bi-upc"></i> Escala de Cinza</li>
      <li><i class="bi bi-eye"></i> Contraste Negativo</li>
      <li><i class="bi bi-eye"></i> Luz de Fundo</li>
      <li><i class="bi bi-eye"></i> Sublinhar Links</li>
      <li id='bolder' onClick={(e) => handleAccessibility(e)}><i class="bi bi-type-bold"></i> Engrossar Letras</li>
      <li id='reset' onClick={(e) => handleAccessibility(e)}><i class="bi bi-arrow-counterclockwise"></i> Reiniciar</li>
    </ul>
    <button onClick={() => handleClick()} className="access-box">
      <i class="bi bi-universal-access-circle"></i>
    </button>
  </div>
  )
}

export default Accessibility