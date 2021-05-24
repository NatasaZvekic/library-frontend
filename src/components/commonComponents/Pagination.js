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
