import React from "react";

import Summary from "./Summary";
import { technologies, tools } from "../static/information/information";
import { Grid } from "@mui/material";

const MainInfo = () => {
  return (
    <div>
      <div className="info-block">
        <h2>
          {/* 👨 */}
          <img
            style={{
              width: "2rem",
            }}
            src={
              "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/fa300xx/smilegirl_40x40.gif"
            }
            alt={"waving hand"}
          />
          <span>About Me</span>
        </h2>
        <Summary />
      </div>
      <div className="info-block">
        <h2>
          {/* 💻 */}
          <img
            style={{
              width: "2.2rem",
            }}
            src={
              "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/computer.gif"
            }
            alt={"waving hand"}
          />
          <span>Technologies</span>
        </h2>

        <Grid container>
          {technologies.map((item) => (
            <span className="technologies">{item}</span>
          ))}
        </Grid>
      </div>
      <div className="info-block">
        <h2>
          {/* 🛠️ */}
          <img
            style={{
              width: "2.2rem",
            }}
            src={
              "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/2692_hammerandpick.gif"
            }
            alt={"waving hand"}
          />
          <span>Tools</span>
        </h2>
        <div>
          {tools.map((item) => (
            <span className="tools">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
