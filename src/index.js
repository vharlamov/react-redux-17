import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import * as actions from './store/actionTypes'
import { initiateStore } from './store/store'

const App = (params) => {
	const store = initiateStore()
	console.log(store)
	const [state, setState] = useState(store.getState())

	useEffect(() => {
		store.subscribe(() => {
			setState(store.getState())
		})
		console.log('subscribe')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const completeTask = (taskId) => {
		store.dispatch({
			type: actions.taskUpdate,
			payload: { id: taskId, completed: true },
		})
		console.log(state)
	}

	const changeTitle = (taskId) => {
		store.dispatch({
			type: actions.taskUpdate,
			payload: { id: taskId, title: `New task for ${taskId}` },
		})
		console.log(state)
	}

	return (
		<>
			<h1>App</h1>
			<ul>
				{state.map((el) => (
					<li key={el.id}>
						<h3>{el.title}</h3>
						<p>{el.completed ? `Completed` : 'Waiting'}</p>
						<button onClick={() => completeTask(el.id)}>Complete</button>
						<button onClick={() => changeTitle(el.id)}>
							Change task title
						</button>
						<hr />
					</li>
				))}
			</ul>
		</>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
