import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(); //prevents page refresh upon submit

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search for a Video</label>
          <input
            onChange={(event) => setTerm(event.target.value)} //call back function (can also be done inline)
            type="text"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
// state = { term: "" };

// onInputChange = (event) => {
//   this.setState({ term: event.target.value });
// };
// onFormSubmit = (event) => {
//   event.preventDefault();  //prevents page refresh upon submit

//   this.props.onFormSubmit(this.state.term)
// };
// render() {
// return (
//   <div className="search-bar ui segment">
//     <form className="ui form" onSubmit={this.onFormSubmit}>
//       <div className="field">
//         <label>Video Search</label>
//         <input
//           onChange={this.onInputChange} //call back function (can also be done inline)
//           type="text"
//           value={this.state.term}
//         />
//       </div>
//     </form>
//   </div>
// );
// }
// }

export default SearchBar;
