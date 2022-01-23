const findRoutes = (routes) => {
  const length = routes.length;
  const sorted = findFirstRoute(routes);

  while (sorted.length < length) {
    const lastRoute = sorted[sorted.length - 1];
    routes.forEach((currentRoute, index) => {
      if (lastRoute[1] === currentRoute[0]) {
        routes.splice(index, 1);
        sorted.push(currentRoute);
      }
    });
  }

  const countrySet = new Set(sorted.flat());
  return [...countrySet].join(', ');
};

const findFirstRoute = (routes) => {
  const arrivals = routes.map(([a, b]) => b);
  for (route of routes) {
    if (!arrivals.includes(route[0])) {
      return [route];
    }
  }
};

const solution = findRoutes;

module.exports = solution;
