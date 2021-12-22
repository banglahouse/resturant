import React , { useCallback, useState } from 'react'




function Categories({filterItems}) {


    return (
        <div>
        <div id="myBtnContainer">
  <button class="btn active" value ='munchies' onClick={() => filterItems('Burger')}> Show all</button>
  <button class="btn" onclick="filterSelection('cars')"> Cars</button>
  <button class="btn" onclick="filterSelection('animals')"> Animals</button>
  <button class="btn" onclick="filterSelection('fruits')"> Fruits</button>
  <button class="btn" onclick="filterSelection('colors')"> Colors</button>
</div> 
        </div>
    )
}

export default Categories
