import SearchBar from "./SearchBar";
export default function Nav(props) {
    return (
        <div className="nav"> 
            <SearchBar onSearch={props.alBuscar}></SearchBar>
        </div>
    );
}