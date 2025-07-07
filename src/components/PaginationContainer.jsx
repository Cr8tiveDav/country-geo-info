import { useState } from 'react';
import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';
import CountryCard from './CountryCard';

const PaginationContainer = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const itemsPerPage = 10;
  const totalItems = countries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = countries.slice(startIndex, endIndex);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={activeClass ? 'page-btn' : 'transparent-btn'}
        style={{
          width: '2.5rem',
          height: '2rem',
          border: 'none',
          borderRadius: '.4rem',
          cursor: 'pointer',
        }}
        value={pageNumber}
        onClick={(e) => {
          setCurrentPage(parseInt(e.target.value));
        }}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButton = () => {
    const pageButtons = [];
    // First button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );

    // Hidden pages
    if (currentPage > 2) {
      pageButtons.push(
        <button
          key='dots-1'
          className='page-btn'
          style={{
            width: '2.5rem',
            height: '2rem',
            border: 'none',
            background: 'transparent',
            borderRadius: '.4rem',
          }}
        >
          ...
        </button>
      );
    }

    // current page
    if (currentPage !== 1 && currentPage !== totalPages) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage, activeClass: true })
      );
    }

    // Hidden pages
    if (currentPage < totalPages - 1) {
      pageButtons.push(
        <button
          key='dots-2'
          className='page-btn'
          style={{
            width: '2.5rem',
            height: '2rem',
            border: 'none',
            background: 'transparent',
            borderRadius: '.4rem',
          }}
        >
          ...
        </button>
      );
    }
    // Last button
    pageButtons.push(
      addPageButton({
        pageNumber: totalPages,
        activeClass: currentPage === totalPages,
      })
    );

    return pageButtons;
  };

  return (
    <>
      <section className='countries-container'>
        {data.map((country) => {
          return <CountryCard {...country} key={country.cca3} />;
        })}
      </section>
      {totalPages > 1 && (
        <Wrapper>
          <section className='pagination page-btns'>
            <button
              className='prev-btn'
              disabled={currentPage === 1}
              onClick={() => prevPage()}
            >
              <GrPrevious style={{ marginRight: '.5rem' }} /> Previous
            </button>
            {renderPageButton()}
            <button
              className='next-btn'
              disabled={currentPage === totalPages}
              onClick={() => nextPage()}
            >
              Next <GrNext style={{ marginLeft: '.5rem' }} />
            </button>
          </section>
        </Wrapper>
      )}
    </>
  );
};
export default PaginationContainer;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  .prev-btn,
  .next-btn {
    display: flex;
    place-items: center;
    padding: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .page-btns {
    display: flex;
    column-gap: 0.5rem;
  }
`;
