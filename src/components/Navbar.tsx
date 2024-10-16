import useResize from '@/hooks/useResize'
import { NavLink } from 'react-router-dom'
// import logo from '@/assets/smiley.jpg'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import Brand from './Brand'
// import { buttonVariants } from './ui/button'
// import { cn } from '@/lib/utils'

const Navbar = () => {
	//get window size for responsive design
   const windowSize = useResize()
   //all the Pages for the links in the navbar as constant
	const PAGES = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'About',
			url: '/about',
		},
		{
			name: 'Projects',
			url: '/projects',
		},
		{
			name: 'Contact',
			url: '/contact',
		},
	] as const

	if (windowSize.width < 500) {
		return (
			<nav className="fixed mt-0 flex w-[100vw] justify-end py-3 opacity-40 transition-opacity hover:opacity-100 shadow-primary shadow-lg">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="py-6">
                        <Brand />
								<NavigationMenuContent className="w-[500px] p-5">
									<ul className="flex flex-col gap-4">
										{PAGES.map((page, i) => {
											const { name, url } = page
											return (
												<LinkElement
													key={i}
													name={name}
													url={url}
													className=""
												/>
											)
										})}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuTrigger>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		)
	}

	return (
		<nav className="fixed mt-0 flex w-[100vw] justify-between items-center py-3 px-3 opacity-40 transition-opacity hover:opacity-100 shadow-primary shadow-lg">
         <Brand />
			<ul className="flex gap-4 ml-2">
				{PAGES.map((page, i) => {
					const { name, url } = page
					return <LinkElement key={i} name={name} url={url} />
				})}
			</ul>
		</nav>
	)
}

export default Navbar

type LinkElementType = {
	url: string
	name: string
	className?: string
}

const LinkElement = ({ url, name, className }: LinkElementType) => {
	return (
		<li className={cn(className, 'hover:opacity-70')}>
			<NavLink
				viewTransition
				end={url === '/'}
				to={url}
				className={(state) =>
					state.isActive ? 'text-primary font-bold' : 'text-gray-500'
				}
			>
				{name}
			</NavLink>
		</li>
	)
}
