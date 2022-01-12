import { taskUpdate } from './actionTypes'

export function taskReducer(state = [], action) {
	switch (action.type) {
		case taskUpdate:
			console.log('update', action.payload)
			const newArray = [...state]
			const elementIndex = newArray.findIndex(
				(el) => el.id === action.payload.id
			)
			newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }

			console.log(newArray)

			return newArray

		default:
			return state
	}
}
