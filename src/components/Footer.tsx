import { cn } from '@/lib/utils'

type FooterType = {
	className?: string
}

const Footer = ({ className }: FooterType) => {
	return (
		<footer
			className={cn(
				className,
				'text-right text-[clamp(0.8rem_,0.6rem+0.75vw,_1.1rem)] font-thin',
			)}
		>
			<p>© {new Date().getFullYear()} All rights reserved.</p>
		</footer>
	)
}

export default Footer
