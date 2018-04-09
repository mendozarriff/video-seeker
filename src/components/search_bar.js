import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
    }
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        value={this.state.term}
                        placeholder="Search for your favorite video"
                        onChange={e => this.onInputChange(e.target.value)} />
                </form>
            </div>
        )
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;