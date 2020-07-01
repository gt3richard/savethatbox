const addDefaultCategory = (business) => {
  if ('cat' in business === false) {
    business['cat'] = 'other'
  }
  return business
}

const filterBusinessBySearch = (business, search) => {
  return business.name.toLowerCase().indexOf(search.toLowerCase().trim()) > -1
}

const sortBusinessName = (a, b) => {
  var nameA = a.name.toUpperCase()
  var nameB = b.name.toUpperCase()
  if (nameA < nameB) {
    return -1
  } else if (nameA > nameB) {
    return 1
  } else {
    return 0
  }
}

const sortBusinessPolicy = (a, b) => {
  var scoreA = (a.nrf ? 1000 : 0) + (a.frs ? 100 : 0) + (a.sl ? 10 : 0) + (a.gn ? 1 : 0)
  var scoreB = (b.nrf ? 1000 : 0) + (b.frs ? 100 : 0) + (b.sl ? 10 : 0) + (b.gn ? 1 : 0)
  if (scoreA > scoreB) {
    return -1
  } else if (scoreA < scoreB) {
    return 1
  } else {
    return 0
  }
}

export { addDefaultCategory, filterBusinessBySearch, sortBusinessName, sortBusinessPolicy }
