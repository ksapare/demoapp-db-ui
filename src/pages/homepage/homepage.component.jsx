import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';



export default function HomePage() {
    function handleChange(e) {
      setSearchField(e.target.value)
    }

    return (
        <div>
             <SearchBox
              placeholder = 'search category'
              handleChange = { handleChange }
            />
        </div>
    )
    
}