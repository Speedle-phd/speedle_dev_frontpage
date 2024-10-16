import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

type AppLayoutProps = {} & React.PropsWithChildren

const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<div className="grid min-h-[100dvh] overflow-x-clip">
			<Navbar />
			<main className="mx-auto mt-24 w-[min(calc(100vw-7rem),70rem)]">
				{children}
				<Outlet />
			</main>
			<Footer className="mt-4 self-end bg-accent p-3 opacity-60" />
		</div>
	)
}

export default AppLayout
