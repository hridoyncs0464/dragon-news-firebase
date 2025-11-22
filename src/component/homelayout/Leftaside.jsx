import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const Leftaside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>
}>
              <Catagories></Catagories>


            </Suspense>
        </div>
    );
};

export default Leftaside;