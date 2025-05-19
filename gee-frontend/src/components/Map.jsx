import React from 'react';

export default function Map() {
  return (
    <div className="relative w-full pb-[57.14%] text-right">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-none">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=24.7805,84.9997&z=17&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};
