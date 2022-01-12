import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { taskComplete, titleChange } from './store/actions'
import { initiateStore } from './store/store'

const store = initiateStore()

const App = (params) => {
	const [state, setState] = useState(store.getState())

	useEffect(() => {
		store.subscribe(() => {
			setState(store.getState())
		})
	}, [])

	const completeTask = (taskId) => {
		store.dispatch(taskComplete(taskId))
	}

	const changeTitle = (taskId) => {
		store.dispatch(titleChange(taskId))
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
