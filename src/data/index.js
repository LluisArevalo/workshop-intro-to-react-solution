const apiUrl = 'https://api.spacexdata.com/v2/';

const fetchDataCollection = () => {
  const rocketsReq = fetch(`${apiUrl}rockets`).then(response => response.json());
  const capsulesReq = fetch(`${apiUrl}capsules`).then(response => response.json());

  return Promise.all([rocketsReq, capsulesReq]).then(([rockets, capsules]) => {
    return rockets.concat(capsules);
  });
};

const fetchDataItem = (id, isCapsule) => {

};

export {
  fetchDataCollection,
  fetchDataItem
};
