import React from 'react';
import '../styles/SearchError.css'

class SearchError extends React.Component {

    render() {
        return (
            <div className="error">
                No results found. Try nearby airports or a different date. 
            </div>
        )
    }
}

export default SearchError