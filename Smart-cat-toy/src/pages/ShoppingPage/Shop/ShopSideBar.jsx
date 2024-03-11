import React from 'react';

function ShopSidebar() {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5 mx-4 min-w-60">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 1 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">Discover</div>
            <ul className="text-sm font-medium space-y-2">
             
              <li>
                <a className="text-slate-600 hover:text-slate-700" href="#0">New Arrivals</a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-slate-700" href="#0">Holiday Bundle</a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-slate-700" href="#0">Toys</a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-slate-700" href="#0">All Products</a>
              </li>
           
            </ul>
          </div>
          {/* Price Range */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">Price Range</div>
            <label className="sr-only">Price</label>
            <select className="form-select w-full">
              <option>Less than $20</option>
              <option>$20 - $40</option>
              <option>$40 - $80</option>
              <option>More than $80</option>
            </select>
          </div>
          {/* Group 3 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">Availability</div>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 font-medium ml-2">In Stock</span>
                </label>
              </li>
        
            </ul>
          </div>
          {/* Group 4 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">Sort By Rating</div>
            <ul className="space-y-2">
              <li>
                {/* Rating button */}
                <button className="flex items-center space-x-2 mr-2">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </div>
                  <div className="inline-flex text-sm text-slate-500 italic"><span className="sr-only">4 Stars</span> And up</div>
                </button>
              </li>
              <li>
                {/* Rating button */}
                <button className="flex items-center space-x-2 mr-2">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </div>
                  <div className="inline-flex text-sm text-slate-500 italic"><span className="sr-only">3 Stars</span> And up</div>
                </button>
              </li>
              <li>
                {/* Rating button */}
                <button className="flex items-center space-x-2 mr-2">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </div>
                  <div className="inline-flex text-sm text-slate-500 italic"><span className="sr-only">2 Stars</span> And up</div>
                </button>
              </li>
              <li>
                {/* Rating button */}
                <button className="flex items-center space-x-2 mr-2">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                    <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                      <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                    </svg>
                  </div>
                  <div className="inline-flex text-sm text-slate-500 italic"><span className="sr-only">1 Stars</span> And up</div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopSidebar;