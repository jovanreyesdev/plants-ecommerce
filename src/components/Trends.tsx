import React from 'react';
import Image from 'next/image';

function Trends() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between w-seemoreBox bg-banner">
        <div className="flex flex-col justify-center p-7">
          <div className="font-bold mb-2">SUMMER CACTUS & SUCCULENTS</div>
          <div className="mb-5" style={{ maxWidth: '266px' }}>We are an online plant shop offering a wide range cheap and trendy plants</div>
          <div>
            <button type="button" className="px-5 py-2 bg-stone text-white rounded">See More</button>
          </div>
        </div>
        <Image src="/seemore/plant_1.png" height={270} width={190} alt="Plant" />
      </div>
      <div className="flex justify-between w-seemoreBox bg-banner">
        <div className="flex flex-col justify-center p-7">
          <div className="font-bold mb-2">SUMMER CACTUS & SUCCULENTS</div>
          <div className="mb-5" style={{ maxWidth: '266px' }}>We are an online plant shop offering a wide range cheap and trendy plants</div>
          <div>
            <button type="button" className="px-5 py-2 bg-stone text-white rounded">See More</button>
          </div>
        </div>
        <Image src="/seemore/plant_2.png" height={270} width={190} alt="Plant" />
      </div>
    </div>
  )
}

export default Trends;