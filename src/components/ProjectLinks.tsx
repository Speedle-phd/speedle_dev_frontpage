import { Project } from '@/pages/Projects'

const ProjectLinks = ({ description, image, link, name }: Project) => {
	return (
		<div className="card flex w-[300px] flex-col items-center justify-center rounded-lg bg-secondary p-4 text-center font-mono shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl mx-auto">
			<header className="mb-5">
				<h3 className="text-lg font-bold">{name}</h3>
				<p className="text-[0.6rem]">{description}</p>
			</header>
			<img
				src={image}
				alt={name}
				className="mb-4 h-32 w-full rounded-lg object-cover blur-sm"
			/>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-2 text-primary hover:underline"
			>
				View Project
			</a>
		</div>
	)
}

export default ProjectLinks
