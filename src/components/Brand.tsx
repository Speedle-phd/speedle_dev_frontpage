import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import logo from '@/assets/logo.jpg'


const Brand = () => {
	return (
		<header className="flex items-center">
			<Avatar>
				<AvatarImage className="object-cover" src={logo} alt="logo" />
				<AvatarFallback>SD</AvatarFallback>
			</Avatar>
			<h1 className="ml-1 text-xl font-bold font-mono">Speedle.dev</h1>
		</header>
	)
}

export default Brand
