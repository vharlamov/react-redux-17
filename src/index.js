import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { taskComplete, titleChange, taskDelete } from './store/tasks'
import configureStore from './store/store'

const store = configureStore()

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

	const deleteTask = (taskId) => {
		store.dispatch(taskDelete(taskId))
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
						<button onClick={() => deleteTask(el.id)}>Delete</button>
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
