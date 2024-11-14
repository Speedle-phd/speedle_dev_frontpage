import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export function catchErrorTyped<T, E extends new (message?: string) => Error>(
	promise: Promise<T>,
	errorsToCatch?: E[],
): Promise<[undefined, T] | [InstanceType<E>]> {
	return promise
		.then((data) => [undefined, data] as [undefined, T])
		.catch((error) => {
			if (errorsToCatch == undefined) {
				return [error]
			} else if (errorsToCatch.some((err) => error instanceof err)) {
				return [error]
			} else {
				throw error
			}
		})
}