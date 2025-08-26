import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss"
export default function Search() {
  return (
    <div className="search">
      <input type="search" placeholder="Search for anything" />
      <div className="icon">
        <AiOutlineSearch />
      </div>
    </div>
  );
}
