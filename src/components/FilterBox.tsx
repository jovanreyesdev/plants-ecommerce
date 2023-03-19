import React from 'react';
import { ReactSVG } from 'react-svg'

function FilterBox() {
  return (
    <div className="p-5 bg-banner" style={{ minWidth: 280 }}>
      <span className="font-bold">Shop by Departments</span>
      <ul className="mt-5 mb-5">
        <li className="py-1 px-2 font-bold shadow-md mb-2">Trees</li>
        <li className="py-1 px-2 mb-2">Fruits, Trees & Bushes</li>
        <li className="py-1 px-2 mb-2">Seeds</li>
        <li className="py-1 px-2 mb-2">Bushes & Shrubs</li>
        <li className="py-1 px-2 mb-2">Perrenials</li>
        <li className="py-1 px-2 mb-2">Succulents</li>
        <li className="py-1 px-2 mb-2">Trerraniums</li>
        <li className="py-1 px-2 mb-2">Houseplants</li>
        <li className="py-1 px-2 mb-2">Vines & Groundcovers</li>
        <li className="py-1 px-2 mb-2">Bulbs</li>
        <li className="py-1 px-2 mb-2">Flowers</li>
      </ul>
      <div className="mb-5 p-5 bg-white">
        <div className="font-bold pb-4 border-b border-gray-300 border-solid mb-5">Price Range</div>
        <div>
          <input
            type="range"
            min="0"
            max="1000"
            value="300"
            step="10"
            className="w-full mb-5"
          />
        </div>
        <div className="flex justify-between">
          <input type="text" value="0" className="w-16 py-1 px-2 rounded border-solid border-gray-300 border" />
          <input type="text" value="5000" className="w-16 py-1 px-2 rounded border-solid border-gray-300 border" />
          <button className="bg-green rounded p-2 px-4 text-white">
            <ReactSVG src="play.svg" />
          </button>
        </div>
      </div>
      <div className="mb-5 p-5 bg-white">
        <div className="font-bold pb-4 border-b border-gray-300 border-solid mb-2">Size</div>
        <ul>
          <li className="flex justify-between mb-2">
            Small
            <span>(300)</span>
          </li>
          <li className="flex justify-between mb-2">
            Medium
            <span>(125)</span>
          </li>
          <li className="flex justify-between mb-2">
            Large
            <span>(50)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterBox;