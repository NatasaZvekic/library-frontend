import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation, useParams } from 'react-router';

const Paginationn = ({ numberOfPages, url }) => {
  const pageNumbers = [];

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let pageNum = useQuery().get("pageNum");

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  function getUrl(number) {
    
    return  url + "?pageNum=" + number;
    return `/books?pageNum=${number}`
  }

  return (
  
    <div className='center'>
      {pageNumbers.map(number => (
        <div className={pageNum === `${number}` ? 'page-item-active' : 'page-item'} key={number} >
          <Link to={getUrl(number)} style={{ textDecoration: 'none' }} >
            {number}
          </Link>
        </div>
      ))}
 
    </div>

  );
};

export default Paginationn;
// import React, { Component } from 'react'
// import { Link, NavLink } from 'react-router-dom';

// export default class Pagination extends Component {
//   constructor(props) {
//     super(props)
//     console.log("con")
//     this.state = {
//       pageNumbers: [],
//       currentPage: 0,
//     }
//   }
//   componentDidMount() {
//     for (let i = 1; i <= 2; i++) {
//       this.state.pageNumbers.push(i);

//     } console.log("in pag " + this.props.currentPage)
//     this.setState({ currentPage: this.props.currentPage })
//   }
//   getUrl(number) {
//     return `books?pageNum=${number}`
//   }
//   render() {
//     console.log("i do render")


//     return (
//       <ul className='pagination'>
//         {this.state.pageNumbers.map(number => (
//           <div className={this.state.currentPage === `${number}` ? 'page-item-active' : 'page-item'} key={number} >
//             <Link to={this.getUrl(number)} >
//               {number}
//             </Link>
//           </div>
//         ))}
//       </ul>
//     )
//   }
// }
