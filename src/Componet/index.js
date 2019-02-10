import React, { Component } from 'react';
import { connect } from "react-redux"


class List extends Component {

    render() {
        console.log(this.props.name.items)
        return (
            <div>
                <ul>
                  {this.props.name.items.map((value, index)=>{
                      return(
                          <li key={index}>{value}</li>
                      )
                  })}
                </ul>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return ({
      name: state.root,
    });
  };
//   const mapDispatchToProp = (dispatch) => {
//     return {
//       name_Action: (data) => {
//         dispatch(nameAction(data))
//       },
//     };
//   };

  export default connect(mapStateToProp)(List)


