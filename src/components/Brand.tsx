import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'


const Brand = () => {
	return (
		<header className="flex items-center">
			<Avatar>
				<AvatarImage className="object-cover" src={'SD'} alt="logo" />
				<AvatarFallback>SD</AvatarFallback>
			</Avatar>
			<h1 className="ml-1 text-lg font-bold">Speedle.dev</h1>
		</header>
	)
}

export default Brand
