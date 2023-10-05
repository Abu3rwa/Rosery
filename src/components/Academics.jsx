import "./academics.css";
import CheckIcon from "@mui/icons-material/Check";
import Cross from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
function Academics({ profile }) {
  const [active, setActive] = useState(localStorage.getItem("active"));

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
              }}
            >
              {" "}
              {subject}
            </li>
          ))}
        </ul>
        <ul className="homeworks-list">
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
        </ul>
      </div>
    </div>
  );
}

export default Academics;
