import react from 'react';
import React from 'react';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import './Style.css';

class App extends react.Component {
	state = {
		item: '',
		myArray: [
			{
				id: 'bath the baby',
				text: 'bath the baby',
				complete: true,
			},
			{
				id: 'read a book',
				text: 'read a book',
				complete: false,
			},
			{
				id: 'work online',
				text: 'work online',
				complete: false,
			},
		],
	};
	componentDidMount = () => {
		const localStorageList = localStorage.getItem('todo')
		if (localStorageList) {
			this.setState({ myArray: JSON.parse(localStorage.getItem('todo'))});
		  } 
		
	}
	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.myArray !== this.state.myArray) {
			window.localStorage.setItem('todo', JSON.stringify(this.state.myArray));
		  }
	}
	onSearchSubmit = (term) => {
		console.log(term);
		this.setState({ myArray: [term, ...this.state.myArray] }, () => {
			console.log(this.state.myArray);
		});
		
	};
	doneItem = (i) => {
		console.log(i);
		const updatedItems = this.state.myArray.map((eachArray) => {
			if (eachArray.id === i) {
				eachArray.complete = !eachArray.complete;
			}
			return eachArray;
		});

		this.setState({ myArray: updatedItems });
		console.log(`done list`, this.state.myArray);
	};

	deleteItem = (i) => {
		console.log(i);
		const deletedItems = this.state.myArray.filter(
			(eachArray) => eachArray.id !== i
		);

		// console.log(`prop list`,this.props.arrayList);

		// console.log(`deleted items`,deletedItems);
		this.setState({ myArray: deletedItems }, () => {
			console.log(`deleted list`, this.state.myArray);
		});
	};
	render() {
		return (
			<div className="container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<TodoList
					deleteTodo={this.deleteItem}
					arrayList={this.state.myArray}
					completeTodo={this.doneItem}
				/>
			</div>
		);
	}
}

export default App;
