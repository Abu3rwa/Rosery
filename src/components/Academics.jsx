import "./academics.css";
import CheckIcon from "@mui/icons-material/Check";
import Cross from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
function Academics({ profile }) {
  const [active, setActive] = useState(localStorage.getItem("active"));
  const [error, setError] = useState("");
  const [homeWorks, setHomeworks] = useState([]);
  console.log(`/homeworks/?subject=${active}&grade=${profile.grade}`);
  function fetchHomeWork() {
    axiosInstance
      .get(`/homeworks/?subject=${active}&grade=${1}`, {
        // const profile = axios.get("http://localhost:8000/api/auth/me", {
      })

      .then((homework) => {
        console.log(homework.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="academics  col-12 col-md-9 row ">
      {/* <h1 className="mt-3 tx-dark    text-center">Academic</h1> */}
      <div className="subject col-12">
        <ul className="list">
          {profile.subjects?.map((subject, index) => (
            <li
              key={subject}
              className={subject === active ? "active" : ""}
              onClick={() => {
                setActive(subject);
                fetchHomeWork();
              }}
            >
              {" "}
              {subject}
            </li>
          ))}
        </ul>
        {!error && homeWorks ? (
          homeWorks.map((homework) => (
            <ul className="homeworks-list">
              <h3 className="dark-rose">today's Homeworks</h3>
              <li>
                <span>What are you?</span>
                <span>8/10/2013</span>
                <span>9/10/2013</span> <span className="new"></span>
              </li>
            </ul>
          ))
        ) : (
          <h2>No Homework</h2>
        )}
        {/* <ul className="homeworks-list">
          <h3 className="dark-rose">today's Homeworks</h3>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <span className="new"></span>
          </li>
        </ul>
        <ul className="homeworks-list">
          <h3 className="dark-rose">Homeworks to be correct</h3>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="to-be-corrected" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="to-be-corrected" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="to-be-corrected" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="to-be-corrected" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="to-be-corrected" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="to-be-corrected" />
          </li>
        </ul>
        <ul className="homeworks-list">
          <h3 className="dark-rose">Finished</h3>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
          <li>
            <span>What are you?</span>
            <span>8/10/2013</span>
            <span>9/10/2013</span> <CheckIcon className="finished" />
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Academics;
