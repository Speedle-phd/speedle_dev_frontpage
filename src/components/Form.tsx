import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import axios, { isAxiosError } from 'axios'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { catchErrorTyped } from '@/lib/utils'
import { Checkbox } from './ui/checkbox'
import { Progress } from './ui/progress'
import { toast, ToastOptions } from 'react-toastify'
import { useTheme } from '@/context/ThemeProvider'
// import { useCookies } from 'react-cookie'

const schema = z.object({
	name: z
		.string()
		.min(3, { message: 'Name should contain at least 3 characters' }),
	subject: z
		.string()
		.min(5, { message: 'Subject should contain at least 5 characters' }),
	message: z.string().min(10, {
		message: 'Message should contain 10 at least characters',
	}),
	email: z.string().email({ message: 'Invalid email' }),
   // isHuman: z.string({message: "Make sure you're a human!"}).refine(v => v === "on")
})
const instance = axios.create({
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'https://email-service.speedle.dev',
		'x-auth-token': "panda-punch#panda-bear-yeah",
	},
})

type ServerResponseType = {
	statuscode: number
	description: string
}

const Form = () => {
   const {theme} = useTheme()
   //USESTATE
   const [progress, setProgress] = useState<number | null>(null)
   //REFS
	const cleanUpErrors = useRef<NodeJS.Timeout>()
	const progressTimer = useRef<NodeJS.Timeout>()
   const checkboxRef = useRef<HTMLButtonElement>(null)
   //CONSTANTS
	const ERROR_TIMEOUT = 4000
   const TOAST_OPTIONS : ToastOptions<unknown> = {
      position: 'bottom-center',
      autoClose: 3000,
      theme
   }
	// const [
	// 	cookies,
	// 	setCookie,
	// 	removeCookie
	// ] = useCookies(['cookie-panda'])
	const {
		register,
		handleSubmit,
		clearErrors,
		reset,
		formState: { errors, isLoading },
	} = useForm({ resolver: zodResolver(schema), reValidateMode: 'onSubmit' })
	const onSubmit = handleSubmit(async (data) => {
      setProgress(null)
      
		const [error, response] = await catchErrorTyped(
			instance.post<ServerResponseType>(
				'https://email-service.speedle.dev/api/v1/send_email',
				data,
			),
		)
		if (!error) {
			const { statuscode, description } = response.data
			if (statuscode === 200) {
				toast.success(description, TOAST_OPTIONS)
			}
			reset()
         checkboxRef.current!.ariaChecked = 'false'
			checkboxRef.current!.disabled = false
		} else {
			// TODO: Error Handling
			console.log(error)
         if (isAxiosError(error)) {
            toast.error(error?.response?.data?.error, TOAST_OPTIONS)
		} else {
         toast.error(error.message, TOAST_OPTIONS)
      }
      setProgress(0)}
		// TODO: Add toast notification for success and error and save response to variable
	})

	useEffect(() => {
		if (Object.keys(errors).length > 0) {
			cleanUpErrors.current = setTimeout(clearErrors, ERROR_TIMEOUT)
		}
		return () => clearTimeout(cleanUpErrors.current)
	}, [errors, clearErrors])

   useEffect(() => {
      if (progress !== 0 && progress !== null) {
         progressTimer.current = setInterval(() => setProgress(prev => prev! -= 20 ), 1000)
      }
		return () => clearTimeout(progressTimer.current)
   }, [progress])


	return (
		<>
			<form
				className="flex min-w-64 max-w-[min(30rem,100%-7rem)] flex-col gap-2"
				onSubmit={onSubmit}
			>
				<header className="mb-4 text-center">
					<h2 className="mb-2 font-mono text-4xl font-bold">
						Make a connection
					</h2>
					<p className="text-sm">
						If you're interested to contact me for projects or
						hiring, feel free to leave an email.
					</p>
				</header>
				<div className="form-control">
					<Label className="relative">Company name / Name</Label>
					<Input
						aria-invalid
						{...register('name', {
							onChange: (e) => {
								const { success } = schema.shape.name.safeParse(
									e.target.value,
								)
								if (success) {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'false',
									)
								} else {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'true',
									)
								}
							},
						})}
					/>
					{errors?.name && (
						<p className="error">
							{errors?.name.message as string}
						</p>
					)}
				</div>
				<div className="form-control">
					<Label className="relative max-w-fit">Email address</Label>
					<Input
						aria-invalid
						{...register('email', {
							onChange: (e) => {
								const { success } =
									schema.shape.email.safeParse(e.target.value)
								if (success) {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'false',
									)
								} else {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'true',
									)
								}
							},
						})}
					/>
					{errors?.email && (
						<p className="error">
							{errors?.email.message as string}
						</p>
					)}
				</div>
				<div className="form-control">
					<Label className="relative">Subject</Label>
					<Input
						aria-invalid
						{...register('subject', {
							onChange: (e) => {
								const { success } =
									schema.shape.subject.safeParse(
										e.target.value,
									)
								if (success) {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'false',
									)
								} else {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'true',
									)
								}
							},
						})}
					/>
					{errors?.subject && (
						<p className="error">
							{errors?.subject.message as string}
						</p>
					)}
				</div>
				<div className="form-control">
					<Label className="relative">Message</Label>
					<Textarea
						aria-invalid
						{...register('message', {
							onChange: (e) => {
								const { success } =
									schema.shape.message.safeParse(
										e.target.value,
									)
								if (success) {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'false',
									)
								} else {
									e.currentTarget.setAttribute(
										'aria-invalid',
										'true',
									)
								}
							},
						})}
					/>
					{errors?.message && (
						<p className="error">
							{errors?.message.message as string}
						</p>
					)}
				</div>
				<div className="form-control flex flex-row items-center gap-2 rounded-lg bg-secondary px-2 py-4 text-secondary-foreground">
					<Checkbox
						// {...register('isHuman')}
						ref={checkboxRef}
						aria-checked="false"
						defaultChecked={false}
						onCheckedChange={(state) => {
                     if (!state) return
							checkboxRef.current!.ariaChecked = state as string
							checkboxRef.current!.disabled = true
							setProgress(100)
						}}
					/>
					<label className="relative text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 lg:text-nowrap">
						Are you really a human? Find out.
					</label>
					{/* {errors?.isHuman && (
						<p className="error">
							{errors?.isHuman.message as string}
						</p>
					)} */}
					{progress !== null && progress >= 0 ? (
						<Progress className="flex-shrink-1" value={progress} />
					) : null}
				</div>
				<p className="text-xs">
					Fields marked with
					<span className="NotificationDot mx-2 inline-block translate-y-[-50%]"></span>{' '}
					are required and validated.
				</p>
				<Button disabled={isLoading || progress === null || progress > 0} type="submit">
					{isLoading ? 'Submitting...' : 'Submit'}
				</Button>
			</form>
		</>
	)
}

export default Form
