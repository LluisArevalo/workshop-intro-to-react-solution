const apiUrl = 'https://api.spacexdata.com/v2/';
const capsules = ['dragon1', 'dragon2', 'crewdragon'];

const fetchDataCollection = () => {
  const rocketsReq = fetch(`${apiUrl}rockets`).then(response => response.json());
  const capsulesReq = fetch(`${apiUrl}capsules`).then(response => response.json());

  return Promise.all([rocketsReq, capsulesReq]).then(([rockets, capsules]) => {
    return rockets.concat(capsules);
  });
};

const checkOutCapsule = itemId => capsules.indexOf(itemId) > -1;

const fetchDataItem = id => {
  const isCapsule = checkOutCapsule(id);
  const url = `${apiUrl}${ isCapsule ? 'capsules' : 'rockets'}/${id}`;
  return fetch(url).then(response => response.json());
};

export {
  fetchDataCollection,
  fetchDataItem
};
