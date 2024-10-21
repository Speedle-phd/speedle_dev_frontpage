import { cn } from "@/lib/utils"

type CenteringType = React.PropsWithChildren & {className?: string}

const Centering = ({children, className} : CenteringType) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      {children}
    </div>
  )
}

export default Centering
