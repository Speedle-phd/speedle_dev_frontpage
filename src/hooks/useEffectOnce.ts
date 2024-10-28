
import {  useEffect, useRef } from 'react'
import { EffectCallback } from 'react';


type Destructor = ReturnType<EffectCallback> | void;

export const useEffectOnce = (effect : EffectCallback) => {
	const destroyFunc = useRef<Destructor>()
	const calledOnce = useRef(false)
	const renderAfterCalled = useRef(false)

	if (calledOnce.current) {
		renderAfterCalled.current = true
	}

	useEffect(() => {
		if (calledOnce.current) {
			return
		}

		calledOnce.current = true
		destroyFunc.current = effect()

		return () => {
			if (!renderAfterCalled.current) {
				return
			}

			if (destroyFunc.current) {

				destroyFunc.current()
			}
		}
	}, [effect])
}
