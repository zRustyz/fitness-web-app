import React, { useState } from 'react';
import _ from 'lodash';

export default function DataTable(props) {
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  const handleClick = (event) => {
    const criteria = event.target.name;
    if (criteria !== sortByCriteria) {
      setSortByCriteria(criteria);
      setIsAscending(true);
    } else {
      if (isAscending === true) {
        setIsAscending(false);
      } else {
        setSortByCriteria(null);
        setIsAscending(null);
      }
    }
  };

  let sortedData = props.data;
  if (sortByCriteria) {
    sortedData = _.sortBy(sortedData, sortByCriteria);
    if (isAscending === false) {
      sortedData = sortedData.reverse();
    }
  }

  const rows = sortedData.map((match) => {
    console.log(match);
    return <DataRow key={match.name} data={match} />
  });

  const sortButtonProps = [
    { name: 'name', label: 'Name' },
    { name: 'body_part', label: 'Body Part' },
    { name: 'equipment', label: 'Equipment' },
    { name: 'image', label: 'Image' },
    { name: 'image_source', label: 'Source' },
  ];

  const sortButtons = sortButtonProps.map((buttonProps) => {
    let isThisSortCriteria = buttonProps.name === sortByCriteria;
    let isThisSortAscending = isThisSortCriteria && isAscending;
    let ascending = isThisSortAscending || null;
    return (
      <th key={buttonProps.name}>
        {buttonProps.label}
        <SortButton
          name={buttonProps.name}
          active={isThisSortCriteria}
          ascending={ascending}
          onClick={handleClick}
        />
      </th>
    );
  });
 
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {sortButtons}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

function SortButton(props) {
  let iconClasses = "";
  if (props.active) {
    iconClasses += " active";
  }
  if (props.ascending === true) {
    iconClasses += " flip";
  }
  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={`material-icons${iconClasses}`} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function DataRow({ data }) {
  return (
    <tr>
      <td className="text-center">{data.name}</td>
      <td className="text-center">{data.body_part}</td>
      <td className="text-center">{data.equipment}</td>
      <td className="text-center"><img className="card-img-top" src={`${data.image}`} alt={data.name} /></td>
      <td className="text-center">{data.image_source}</td>
    </tr>
  );
}
