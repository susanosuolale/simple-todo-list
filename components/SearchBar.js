import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();
		let newItem = {
			text: this.state.term,
			complete: false,
			id: this.state.term,
		};

		this.props.onSubmit(newItem);
		this.setState({ term: '' })
	};

	render() {
		return (
			<div className="segment">
				<form onSubmit={this.onFormSubmit} className="ui form ">
					<div className="field">
						<div>
							{' '}
							<h1>TODOLIST</h1>
						</div>
						<input
							value={this.state.term}
							type="text"
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
						<button type="button" onClick={this.onFormSubmit}>
							Add
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
