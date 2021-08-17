import React , { useState } from 'react'

function Pagination({numberOfPages, currentPage, changeCurrentPage}) {
    
    

    // *pagination
    // for navigation to diffrent page number
    
    let pageNumberArray = [];
    for (let i = 0; i < numberOfPages; i++) {
        pageNumberArray.push(1 + i);
    }

    

    return (
        <div>
            <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        {pageNumberArray.map(pageNumber => {
                            let additional = (pageNumber == currentPage) ? "page-item active" : "page-item";
                            return (
                                <li
                                    key={pageNumber}
                                    className={additional}
                                    aria-current="page" onClick={() => { changeCurrentPage(pageNumber) }}>
                                    <span className="page-link">{pageNumber}</span>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </div>
    )
}

export default Pagination
