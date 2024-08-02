import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div className="container-fluid">
 <ul className="nav">
      <li className="nav-item">
        <a id="wd-a" href="#/Labs" className="nav-link">
          Labs 
        </a> 
      </li>
      <li className="nav-item">
        <a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-node-server" href="https://kanbas-node-server-app-a6-19tr.onrender.com" className="nav-link">Render Server</a>
      </li>
    </ul>
    <br />
    <h4>Github Repos</h4>
    <ul className="nav">
    <li className="nav-item">
        <a id="wd-k" href="https://github.com/Samarthvg" className="nav-link">
          My GitHub
        </a>
      </li>
      <li className="nav-item">
      <a id="wd-a" href="https://github.com/Samarthvg/kanbas-node-server-app/tree/A6" className="nav-link">
          node-server-app 
        </a> 
      </li>
      <li className="nav-item">
        <a href="https://github.com/Samarthvg/kanbas-react-web-app/tree/A6" className="nav-link">react-web-app</a>
      </li>
    </ul>
    </div>
   
  );
}
