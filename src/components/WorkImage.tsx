import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const targetLink = props.link && props.link !== "#" ? props.link : props.video;

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={targetLink || "#"}
        target="_blank"
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {targetLink && (
          <div className="work-link" title="Watch Full Video">
            <MdArrowOutward />
          </div>
        )}

        {props.video ? (
          <video
            src={props.video}
            poster={props.image}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            onCanPlay={(e) => {
              e.currentTarget.play().catch(() => {});
            }}
          />
        ) : (
          <img src={props.image} alt={props.alt} />
        )}
      </a>
    </div>
  );
};

export default WorkImage;
