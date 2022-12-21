import React from 'react';
import './Style.css';

class TodoList extends React.Component {
	doneTodo = (event, i) => {
		this.props.completeTodo(i);
	};
	deleteItem = (event, i) => {
		this.props.deleteTodo(i);
	};

	render() {
		const arrays = this.props.arrayList.map((eachArray) => (
			<li key={eachArray.id}>
				<label className={eachArray.complete ? 'is-checked' : 'is-not-checked'}>
					<div>
						<input
							type="checkbox"
							name="lang"
							value={eachArray.text}
							onChange={(event) => this.doneTodo(event, eachArray.id)}
							className="Textbox"
							checked={eachArray.complete}
						/>
						<span>{eachArray.text}</span>
					</div>

					<div>
						<button
							type="button"
							onClick={(event) => this.deleteItem(event, eachArray.id)}
						>
							Delete!
						</button>
					</div>
				</label>
			</li>
		));
		return (
			<div className="todo_list">
				<ul>{arrays}</ul>
			</div>
		);
	}
}
export default TodoList;
