import React from "react";

import MainInfo from "../MainInfo";

import {
  workExperience,
  education,
  softSkills,
} from "../../static/information/information";

import photo from "../../static/photos/mansi-img.jpg";

import Grid from "@mui/material/Grid";

const Info = () => {
  return (
    <Grid container className="info">
      <h1>
        {/* 👋 */}
        Hi, I'm Mansi
        <img
          style={{
            width: "2.7rem",
            paddingLeft: "1rem",
          }}
          src={
            "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/fa300xx/1f44b_wavinghand.gif"
          }
          alt={"waving hand"}
        />
      </h1>

      <h1>
        I'm a Full Stack developer who is knowledgeable in contemporary
        javascript frameworks and libraries
      </h1>
      <Grid
        container
        alignItems="center"
        className="info-block-container"
        justifyContent="center"
        gap={8}
      >
        <Grid item>
          <img src={photo} alt="profile-pic" />
        </Grid>
        <Grid item lg={8}>
          <MainInfo />
        </Grid>
      </Grid>
      <Grid container className="other-info" justifyContent="center">
        <Grid item sm={4}>
          <h2>
            {/* 💼 */}
            <img
              style={{
                width: "2.2rem",
              }}
              src={
                "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/1f4bc_briefcase.gif"
              }
              alt={"waving hand"}
            />

            <span>Work Experience</span>
          </h2>
          {workExperience.map((item) => (
            <div className="other-info-item">
              <h3>{item.companyName}</h3>
              <p>{item.position}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </Grid>
        <Grid item sm={4}>
          <h2>
            {/* 🎓 */}

            <img
              style={{
                width: "2.2rem",
              }}
              src={
                "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/1f393_graduationcap.gif"
              }
              alt={"waving hand"}
            />
            <span>Education</span>
          </h2>
          {education.map((item) => (
            <div className="other-info-item">
              <h3>{item.university}</h3>
              <p>{item.course}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </Grid>
        <Grid item sm={4}>
          <h2>
            {/* 🤝 */}
            <img
              style={{
                width: "2.2rem",
              }}
              src={
                "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/fa300xx/handshake_40x40.gif"
              }
              alt={"waving hand"}
            />

            <span>Soft skills</span>
          </h2>
          <div className="soft-skills">
            {softSkills.map((item) => (
              <h3>{item}</h3>
            ))}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;
