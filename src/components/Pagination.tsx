import React from 'react';
import { ReactSVG } from 'react-svg';

function Pagination() {
  return (
    <div className="flex justify-center align-center">
      <button>
        <ReactSVG
          width={24}
          height={24}
          className="bg-stone p-2 mr-2 rounded"
          src="/prev-arrow.svg"
        />
      </button>
      <button>
        <div className="bg-stone text-sm text-white h-6 w-6 mr-2 rounded">1</div>
      </button>
      <button>
        <div className="text-stone text-sm h-6 w-6 mr-2 rounded">2</div>
      </button>
      <button>
        <div className="text-stone text-sm h-6 w-6 mr-2 rounded">3</div>
      </button>
      <button>
        <div className="text-stone text-sm h-6 w-6 mr-2 rounded">4</div>
      </button>
      <button>
        <div className="text-stone text-sm h-6 w-6 mr-2 rounded">5</div>
      </button>
      <button>
        <ReactSVG
          width={24}
          height={24}
          className="p-2 mr-2 rounded"
          src="/next-arrow.svg"
        />
      </button>
    </div>
  );
}

export default Pagination;
