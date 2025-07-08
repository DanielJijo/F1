"use client"

import React from "react";

interface Driver {
  slug: string;
  teamLogo: string;
  team: string;
  name: string;
  // ...add any other properties you use
}

interface DriversGridProps {
  drivers: Driver[];
}

const DriversGrid: React.FC<DriversGridProps> = ({ drivers }) => (
  <>
    {drivers.map((driver) => (
      <div key={driver.slug}>
        <div className="relative h-64 overflow-hidden">
          {/* Team Logo */}
          <img
            src={`/teams/${driver.teamLogo}`}
            alt={driver.team}
            onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
            className="absolute top-2 left-2 w-8 h-8 rounded bg-white object-contain z-10"
          />
          <img
            src={`/drivers/${driver.slug}.jpg`}
            alt={driver.name}
            className={
              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" +
              ((driver.slug === "lando-norris" || driver.slug === "carlos-sainz") ? " object-[center_60%]" : "")
            }
          />
        </div>
        {/* ...other card content... */}
      </div>
    ))}
  </>
);

export default DriversGrid;
