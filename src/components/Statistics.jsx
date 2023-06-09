import React from "react";
import GitHubCalendar from "react-github-calendar";
const Statistics = () => {
  // const selectLastHalfYear = contributions => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 6;

  //   return contributions.filter(day => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  return (
    <div
      id="bgdivimg"
      style={{
        height: "auto",
        marginTop: "1rem",
        paddingBottom: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
      }}
      name="statistics"
      className="bg-gradient-to-b from-black-800 to-black w-full h-screen experience mbottom ptop"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            style={{ color: "white" }}
            className="text-4xl font-bold border-b-4 border-white-500 p-2 inline"
          >
            Statistics
          </p>
          <p style={{ color: "aqua" }} className="py-6">
            These are some of statistics graphs to determine my contribution and
            knowledge in this digital world.
          </p>
        </div>
        {/* <div
        className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 px-12 py-5 sm:px-0"
      // style={{ display: "grid", gridTemplateColumns:"repeat(2,1fr)", alignItems: "center", gap: "2rem", padding: "2rem", }}
      > */}
        <div style={{ height: "auto", padding: "1rem" }}>
          <p align="center">
            <a href="">
              <img
                style={{ height: "auto" }}
                alt="S-a-i-f-A-l-i's Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=S-a-i-f-A-l-i&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
              />
            </a>
          </p>
        </div>

        <div
          style={{
            background: "black",
            height: "auto",
            padding: "1rem",
            margin: "auto",
          }}
        >
          <img
            alt="S-a-i-f-A-l-i's Activity Graph"
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=S-a-i-f-A-l-i&theme=2077"
          />
        </div>

        {/* git Calender */}
        <div style={{ background: "black", height: "auto", padding: "1rem" }}>
          <GitHubCalendar
            username="S-a-i-f-A-l-i"
            blockSize={15}
            blockMargin={5}
            style={{
              margin: "auto",
              alignItems: "center",
              width: "100%",
            }}
          />
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Statistics;
