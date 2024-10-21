import { cn } from '@/lib/utils'
import { Switch } from './ui/switch'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/context/ThemeProvider'


type FooterType = {
	className?: string
}

const Footer = ({ className }: FooterType) => {
   const {theme, setTheme} = useTheme()
	return (
		<footer
			className={cn(
				className,
				'flex justify-between text-[clamp(0.8rem_,0.6rem+0.75vw,_1rem)] font-thin',
			)}
		>
			<div className={cn('switch-container flex items-center gap-2', theme === "dark" ? "text-white" : "text-[#222]")}>
				<SunIcon className={theme === "light" ? "text-red-900" : ""} />
				<Switch
					// change style of the switch
					id="dark-mode-switch"
					className="Switch"
					aria-label="Toggle dark mode"
					checked={theme === 'dark'}
					onCheckedChange={(checked) =>
						setTheme(checked ? 'dark' : 'light')
					}
				/>

				<MoonIcon />
			</div>
			<p>© {new Date().getFullYear()} All rights reserved.</p>
		</footer>
	)
}

export default Footer
