const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

console.log(Object.assign({}, defaultState, { status:'online'}))