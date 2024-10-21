const LoadingBars = () => {
	return (
		<div className="loading-container grid">
			<div className="LoadingBars aspect-square w-[50px] rounded-full border-4 border-primary"></div>
			<div
				style={{ animationDelay: '1000ms' }}
				className="LoadingBars aspect-square w-[50px] rounded-full border-4 border-primary"
			></div>
		</div>
	)
}

export default LoadingBars
