import { connect, Connect } from "react-redux";
function SearchBar(props) {
  function random(params) {
    let aleatorio = Math.round(Math.random() * (826 - 1) + 1);
    props.onSearch(aleatorio)
  }
  return (
    <div>
      <input type="search" id="entrada" />
      <button
        onClick={() => {
          let dato = document.getElementById("entrada").value;
          props.onSearch(dato);
        }}
      >
        Agregar
      </button>
        <button className="random" onClick={ random }>Random</button>

    </div>
  );
}
function mapStateToProps(state) {
  
}
function mapDispatchToProps(dispatch) {
  
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)