import html from '@/assets/html.png'
import css from '@/assets/css.png'
import react from '@/assets/react.png'
import nodejs from '@/assets/nodejs.png'
import flask from '@/assets/flask.png'
import mongodb from '@/assets/mongodb.png'
import nginx from '@/assets/nginx.png'
import docker from '@/assets/docker.png'
import python from '@/assets/python.png'
import postgres from '@/assets/postgres.png'
import js from '@/assets/js.png'
import ts from '@/assets/ts.png'
import git from '@/assets/git.png'
import { cn } from '@/lib/utils'
import { classNameType } from '@/types/types'

type TechstackType = classNameType

const Techstack = ({ className }: TechstackType) => {
	const imgArr = [html, css, react, nodejs, js, ts, python, flask, mongodb, postgres, nginx, docker,  git] as const
	const style = { '--_min-column-size': '56px' } as React.CSSProperties

	return (
		<div
			className={cn(
				className,
				'gap-[clamp(1rem,5vmax,1.625rem)] flex w-[50%] flex-wrap',
			)}
			style={style}
		>
			{imgArr.map((img, i) => {
				const tech = img.split('/').pop()?.split('.')[0]
				const style = {
					'--i': i + 3,
					'--d': (i + 2) * 100 + 'ms',
				} as React.CSSProperties

				return (
					<figure className="flex-spreader mx-auto w-14" key={i}>
						<img
							src={img}
							alt={tech + ' logo'}
							style={style}
							className="transition-techstack h-14 w-14 object-contain"
						/>
					</figure>
				)
			})}
		</div>
	)
}

export default Techstack
