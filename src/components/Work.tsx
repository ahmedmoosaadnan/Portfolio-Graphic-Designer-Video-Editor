import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Personal Portfolio Video Reel",
    category: "Full Video Portfolio · Master Cut",
    tools: "Premiere Pro, After Effects, Sound Design, Color Grading, Transitions",
    link: "https://res.cloudinary.com/grb4tj0c/video/upload/f_mp4,q_auto/v1787134042/portfolio.mov",
    video: "https://res.cloudinary.com/grb4tj0c/video/upload/f_mp4,q_auto/v1787134042/portfolio.mov",
    image: "./images/work_reels.png",
  },
  {
    title: "Kinetic Typography Motion Graphics",
    category: "Motion Design · Animated Typography",
    tools: "After Effects, Kinetic Text, Logo Animation, Sound FX",
    link: "https://res.cloudinary.com/grb4tj0c/video/upload/f_auto,q_auto/v1787133977/KINETIC_TYPOGRAPHY.mp4",
    video: "https://res.cloudinary.com/grb4tj0c/video/upload/f_auto,q_auto/v1787133977/KINETIC_TYPOGRAPHY.mp4",
    image: "./images/work_motion.png",
  },
  {
    title: "Fiverr Gig & Client Showcase Video",
    category: "Freelance Video Editing · Promotional Reel",
    tools: "Premiere Pro, CapCut, Raw Footage Editing, Audio Mixing",
    link: "https://res.cloudinary.com/grb4tj0c/video/upload/f_auto,q_auto/v1787133971/GIG.mp4",
    video: "https://res.cloudinary.com/grb4tj0c/video/upload/f_auto,q_auto/v1787133971/GIG.mp4",
    image: "./images/work_farm.png",
  },
  {
    title: "Revised Typography & Visual Design",
    category: "Brand Motion · Visual Storytelling",
    tools: "After Effects, Photoshop, Illustrator, Custom Typography",
    link: "https://res.cloudinary.com/grb4tj0c/video/upload/f_auto,q_auto/v1787134082/REVISED.mp4",
    video: "https://res.cloudinary.com/grb4tj0c/video/upload/f_auto,q_auto/v1787134082/REVISED.mp4",
    image: "./images/work_event.png",
  },
  {
    title: "Social Media Creatives & Brand Identity",
    category: "Graphic Design · Social Assets",
    tools: "Photoshop, Illustrator, Canva, Thumbnails, Post Creatives",
    link: "https://res.cloudinary.com/grb4tj0c/video/upload/f_mp4,q_auto/v1787134042/portfolio.mov",
    video: "https://res.cloudinary.com/grb4tj0c/video/upload/f_mp4,q_auto/v1787134042/portfolio.mov",
    image: "./images/work_branding.png",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
                video={project.video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
