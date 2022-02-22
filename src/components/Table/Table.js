import React from 'react';
import './table.css'
import { NavLink } from "react-router-dom";


const Table = ({ sortData, tests, sites, searchItem, search }) => {
    const getItem = (siteId) => {
        let site = sites.find(item => item.id === siteId)
        return site ? site.url : ""
    }

    return (

        <div >
            <div className='post__header'>

                <div className='post__headerDiv' onClick={() => { sortData('name') }}>Name</div>
                <div className='post__headerDiv' onClick={() => { sortData('type') }}>Type</div>
                <div className='post__headerDiv'>Status</div>
                <div className='post__headerDiv' onClick={() => { sortData('site') }}>Site</div>

            </div>
            <div >
                {searchItem(tests, search).map(item =>
                    <div className="post" key={item.id}>
                        <p className='postItem__name'>{item.name}</p>
                        <p className='postItem__type'>{item.type}</p>
                        <p className='postItem__status'>{item.status}</p>
                        <p className='postItem___siteID'>{getItem(item.siteId)}</p>
                        <div className='button'>
                            <button className="btn">
                                {item.status === "DRAFT" ? (
                                    < NavLink className="btn-liz" to="/finalize">Finalize</NavLink>
                                ) : (
                                    <NavLink className="btn-res" to="/results">Results</NavLink>
                                )}
                            </button>
                        </div>
                    </div>

                )}
            </div>
        </div>

    );
};

export default Table;