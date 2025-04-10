import { useEffect, useState } from 'react'
import notFoundImage from '../assets/notfound.jfif'

const NotFound = () => {
	const [cd, setCd] = useState(5)

	useEffect(() => {
		const timeout = setTimeout(() => {
			history.back()
		}, 4000)
		return () => clearTimeout(timeout)
	})

	useEffect(() => {
		const interval = setInterval(() => {
			if (cd <= 0) {
				clearInterval(interval)
				return 0
			}
			setCd((prev) => prev - 1)
		}, 1000)

		return () => clearInterval(interval)
	})

	return (
		<>
			<div className="flex h-screen flex-col items-center justify-center text-center">
				<figure className="mb-6 h-52 w-52 overflow-clip rounded-full">
					<img src={notFoundImage} alt="not-found-image" />
				</figure>
				<p className="font-mono">
					Page not found. Redirecting to last page...
				</p>
				<h3>{cd}</h3>
			</div>
		</>
	)
}

export default NotFound
