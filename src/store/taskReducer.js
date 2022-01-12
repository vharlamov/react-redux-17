import { taskUpdate, taskDelete } from './actionTypes'

export function taskReducer(state = [], action) {
	const newArray = [...state]

	switch (action.type) {
		case taskUpdate:
			let elementIndex = newArray.findIndex((el) => el.id === action.payload.id)
			newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload }

			return newArray

		case taskDelete:
			return newArray.filter((el) => el.id !== action.payload.id)

		default:
			return state
	}
}
