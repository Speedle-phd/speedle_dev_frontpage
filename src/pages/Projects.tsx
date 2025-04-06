
import Centering from '@/layouts/Centering'
import liquiplaner from '@/assets/liquiplaner.jpg'
import weather from '@/assets/weather.jpg'
import shopping from '@/assets/shopping.jpg'
import cocktail from '@/assets/cocktail.jpg'
import todo from '@/assets/todo.jpg'
import ProjectLinks from '@/components/ProjectLinks'


export type Project = {
   name: string
   description: string
   link: string
   image: string
}

const Projects = () => {
	const projects: Project[] = [
		{
			name: 'Shopping List',
			description: 'Never forget your shopping list again',
			link: 'https://chipper-tiramisu-891dd8.netlify.app/dashboard',
			image: shopping,
		},
		{
			name: 'Cocktail Finder',
			description: 'Pour in your favorite cocktail',
			link: 'https://sensational-sprinkles-54e619.netlify.app/',
			image: cocktail,
		},
		{
			name: 'Weather App',
			description: 'Weather the weather',
			link: 'https://peaceful-bavarois-424fd9.netlify.app/login',
			image: weather,
		},
		{
			name: 'ToDo List',
			description: "Don't you even dare forget a task again",
			link: 'https://tourmaline-sorbet-2ff079.netlify.app/',
			image: todo,
		},
		{
			name: 'Liquipaner',
			description: 'Track your finances',
			link: 'https://radiant-hummingbird-1e0e37.netlify.app/',
			image: liquiplaner,
		},
	]

	return (
		<Centering className="min-h-[80dvh] flex-col">
			<header className="my-4">
            <h2 className="mb-4 text-center font-mono text-4xl font-bold">List of my projects</h2>
            <p className="text-center text-xs text-gray-400 italic">
               Please note that the projects are <b>not</b> optimized. I developed them to learn a specific tech or framework. I hope you like them with their flaws, which I am aware of. That said, feel free to check them out."
            </p>
         </header>
         <div className="project_grid w-full auto-grid mt-8">
            {projects?.map((p, i) => {
               return (
                  <ProjectLinks key={i} {...p}/>
               )}
            )}
            
         </div>
		</Centering>
	)
}

export default Projects
