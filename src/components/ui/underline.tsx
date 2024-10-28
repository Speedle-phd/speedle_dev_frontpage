import { cn } from '@/lib/utils'

type UnderlineType = {
   className?: string
}

const Underline = ({ className }: UnderlineType) => {
	return (
		<div
			className={cn(
				'h-2 w-[min(20rem,20vw)] rounded-[100vmin] bg-primary mx-auto opacity-50',
				className,
			)}
		></div>
	)
}

export default Underline
