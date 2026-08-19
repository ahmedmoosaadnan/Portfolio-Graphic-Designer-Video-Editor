import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Graphic Designer & Video Editor</h4>
                <h5>Fiverr (International) | Local Pakistani Clients</h5>
              </div>
              <h3>2023 - PRESENT</h3>
            </div>
            <p>
              Delivered end-to-end video editing (raw footage to final cuts) for Instagram Reels, TikTok, and YouTube Shorts including color correction, audio mixing, and transitions. Created motion graphics, kinetic typography, and animated logos for brand promotional content. Produced specialized content for local agricultural/dairy clients including cow/farm promotional videos and product reels. Managed multiple concurrent projects with tight deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Media Coordinator</h4>
                <h5>Departmental Management Committee (DMC)</h5>
              </div>
              <h3>UNIVERSITY TENURE</h3>
            </div>
            <p>
              Served as Media Coordinator of the departmental committee for the Department of Computer Science & IT at Baba Guru Nanak University. Led the video editing and content team, managing event coverage, promotional videos, reels, and social media creatives for departmental activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Media Representative</h4>
                <h5>University Official Media Society</h5>
              </div>
              <h3>UNIVERSITY TENURE</h3>
            </div>
            <p>
              Represented the university’s official media society. Covered and edited videos for official events and activities. Covered an official event at Lahore Garrison University (LGU) and handled complete post-production of the event video.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>Baba Guru Nanak University, Nankana Sahib</h5>
              </div>
              <h3>GRADUATED 2026</h3>
            </div>
            <p>
              Graduated June 2026 with a Bachelor of Science in Computer Science, combining technical expertise with creative visual storytelling, systematic post-production workflows, and design principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
