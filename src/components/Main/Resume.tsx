import Skill from "../Main/Resume/Skill";
import Experience from "../Main/Resume/Experience";

const Resume = () => {
	return (
		<div className="Resume">
			<div className="inner">
				<div className="resumeBox">
					<Experience></Experience>
					<Skill></Skill>
				</div>
			</div>
		</div>
	);
};

export default Resume;
