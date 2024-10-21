const DomainTitle = () => {
	const DOMAIN = 'Speedle.dev'.split('')
	return (
		<>
			{DOMAIN.map((letter, i) => {
				return (
					<span
						key={i}
						className="text-[clamp(1.6rem,1.4rem+1.2vw,6rem)] font-extrabold tracking-widest text-primary opacity-45 hover:opacity-100 select-none transition-[text-shadow_250ms,_opacity_250ms] hover:text-shadow-primary"
					>
						{letter}
					</span>
				)
			})}
		</>
	)
}

export default DomainTitle
