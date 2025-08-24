import Centering from '@/layouts/Centering'
import profilePic from '@/assets/me.jpg'
import html from '@/assets/html.png'
import css from '@/assets/css.png'
import react from '@/assets/react.png'
import nodejs from '@/assets/nodejs.png'
import flask from '@/assets/flask.png'
import mongodb from '@/assets/mongodb.png'
import nginx from '@/assets/nginx.png'
import docker from '@/assets/docker.png'
import js from '@/assets/js.png'
import ts from '@/assets/ts.png'
import git from '@/assets/git.png'
import python from '@/assets/python.png'
import postgresql from '@/assets/postgres.png'
import { Link } from 'react-router-dom'

const techStack = [
	{
		name: 'HTML',
		icon: html,
		value: 95,
	},
	{
		name: 'CSS',
		icon: css,
		value: 85,
	},
	{
		name: 'JavaScript',
		icon: js,
		value: 100,
	},
	{
		name: 'TypeScript',
		icon: ts,
		value: 90,
	},
	{
		name: 'React',
		icon: react,
		value: 85,
	},
	{
		name: 'Node.js',
		icon: nodejs,
		value: 75,
	},
	{
		name: 'Flask',
		icon: flask,
		value: 50,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
		value: 85,
	},
	{
		name: 'NGINX',
		icon: nginx,
		value: 40,
	},
	{
		name: 'Docker',
		icon: docker,
		value: 65,
	},
	{
		name: 'Git',
		icon: git,
		value: 65,
	},
	{
		name: 'Python',
		icon: python,
		value: 70,
	},
	{
		name: 'PostgreSQL',
		icon: postgresql,
		value: 75,
	},
] as const

const About = () => {
	return (
		<Centering className="mx-auto min-h-[80dvh] max-w-[fit-content] flex-col gap-8">
			<header className="flex flex-col gap-4 md:flex-row">
				<div className="relative h-64 w-64">
					<img
						src={profilePic}
						alt="Profile Picture"
						className="image-clip mt-4 rounded-sm"
					/>
					<div className="image-clip absolute -inset-2 -z-10 -translate-x-3 translate-y-10 rounded-sm border-2 bg-primary opacity-30"></div>
				</div>
				<div className="ml-4 mt-14 flex flex-col justify-center md:mt-0">
					<h1 className="text-4xl font-bold text-primary">
						About Me
					</h1>
					<p className="mt-4 max-w-lg leading-relaxed md:text-lg">
						Hello! I'm Emanuel Eirich,{' '}
						{Math.floor(
							(new Date().getTime() -
								new Date('1989-12-22').getTime()) /
								1000 /
								60 /
								60 /
								24 /
								365,
						)}{' '}
						years old, a passionate web developer with a knack for
						creating dynamic and responsive web applications.
					</p>
					<p className="mt-4 max-w-lg leading-relaxed md:text-lg">
						I am an IT enthusiast with over{' '}
						<strong className="text-primary">
							six years of hands-on programming experience
						</strong>{' '}
						and a strong background in{' '}
						<strong className="text-primary">
							application development, automation, and software
							support
						</strong>
						.
					</p>
					<p className="mt-4 max-w-lg leading-relaxed md:text-lg">
						I combine technical expertise with strong{' '}
						<strong className="text-primary">
							communication and problem-solving skills.
						</strong>
					</p>
				</div>
			</header>
			<section className="mt-10 w-full">
				<h2 className="mb-8 text-center text-4xl font-bold text-primary">
					Tech Stack
				</h2>
				<div className="auto-grid-tech">
					{techStack.map((tech, i) => (
						<div key={i} className="flex flex-col items-center">
							<div className="relative max-w-[96px]">
								<svg
									width={96}
									height={96}
									className="rotate-[-90deg]"
								>
									<circle
										cx={48}
										cy={48}
										r={42}
										stroke="#e5e7eb"
										strokeWidth={10}
										fill="none"
									/>
									<circle
										cx={48}
										cy={48}
										r={42}
										stroke="hsl(142.1 70.6% 45.3%)"
										strokeWidth={10}
										fill="none"
										strokeDasharray={2 * Math.PI * 42}
										strokeDashoffset={
											2 *
											Math.PI *
											42 *
											(1 - tech.value / 100)
										}
										style={{
											transition:
												'stroke-dashoffset 1s ease',
										}}
									/>
								</svg>
								<img
									src={tech.icon}
									alt={tech.name}
									className="absolute h-16 w-16 rounded-full"
									style={{
										left: '50%',
										top: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								/>
							</div>
							<span className="mt-3 text-base font-medium">
								{tech.name}
							</span>
							<span className="text-sm font-bold">
								{tech.value}%
							</span>
						</div>
					))}
				</div>
			</section>
			<section className="mt-10 w-full">
				<h2 className="mb-8 text-center text-4xl font-bold text-primary">
					Soft skills
				</h2>
            <ul className="">
               <li className="mb-4">
                  <div className="mb-2">
                     <strong className="text-primary">Communication:</strong>
                  </div>
                  <p className="ml-10">
                     Clear and empathetic interaction with clients and team members
                  </p>
               </li>
               <li className="mb-4">
                  <div className="mb-2">
                     <strong className="text-primary">Problem Solving:</strong>
                  </div>
                  <p className="ml-10">
                     Analytical thinking to diagnose issues and provide effective solutions
                  </p>
               </li>
               <li className="mb-4">
                  <div className="mb-2">
                     <strong className="text-primary">Teamwork:</strong>
                  </div>
                  <p className="ml-10">
                     Collaborative, supportive, and goal-oriented approach in team environments
                  </p>
               </li>
               <li className="mb-4">
                  <div className="mb-2">
                     <strong className="text-primary">Leadership:</strong>
                  </div>
                  <p className="ml-10">
                     Experience in team planning, project management, and employee development
                  </p>
               </li>
               <li className="mb-4">
                  <div className="mb-2">
                     <strong className="text-primary">Adaptability:</strong>
                  </div>
                  <p className="ml-10">
                     Quick learner, able to work with new technologies and processes
                  </p>
               </li>
               <li>
                  <div className="mb-2">
                     <strong className="text-primary">Organization:</strong>
                  </div>
                  <p className="ml-10">
                     Efficient in managing tasks, projects, and priorities
                  </p>
               </li>
            </ul>
			</section>
			<section className="mt-10 w-full">
				<h2 className="mb-8 text-center text-4xl font-bold text-primary">
					Contact Me
				</h2>
				<div className="flex flex-col items-center">
					<p className="mb-4 text-lg">
						I'm always open to discussing new projects or
						opportunities. Feel free to reach out!
					</p>
					<Link
						to="/contact"
						className="rounded-md bg-primary px-4 py-2 text-white"
					>
						Email Me
					</Link>
				</div>
			</section>
		</Centering>
	)
}

export default About
