export const fetchDetail = (key) => {
  const chart = [
    {
      name: "12.01",
      Price: 4000,
    },
    {
      name: "12.02",
      Price: 3000,
    },
    {
      name: "12.03",
      Price: 2000,
    },
    {
      name: "12.04",
      Price: 2780,
    },
    {
      name: "12.05",
      Price: 1890,
    },
    {
      name: "12.06",
      Price: 2390,
    },
    {
      name: "12.07",
      Price: 3490,
    },
  ];

  const chart1 = [
    { name: "12.01", Price: 4561 },
    { name: "12.02", Price: 1550 },
    { name: "12.03", Price: 3351 },
    { name: "12.04", Price: 2194 },
    { name: "12.05", Price: 2596 },
    { name: "12.06", Price: 1144 },
    { name: "12.07", Price: 3410 },
  ];

  const chart2 = [
    { name: "12.01", Price: 2720 },
    { name: "12.02", Price: 4624 },
    { name: "12.03", Price: 2906 },
    { name: "12.04", Price: 1129 },
    { name: "12.05", Price: 1804 },
    { name: "12.06", Price: 1844 },
    { name: "12.07", Price: 3305 },
  ];

  console.log("fetchDetail", key);

  const data = [
    {
      url: "https://images.unsplash.com/photo-1642611012881-a95922e7e373?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Matilda #1",
      price: 3490,
      id: 101,
      chart,
    },
    {
      url: "https://images.unsplash.com/photo-1640973063709-4160b665d787?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Matilda #2",
      price: 3490,
      id: 102,
      chart: chart1,
    },
    {
      url: "https://images.unsplash.com/photo-1649255917534-5ca5c56fca06?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Matilda #3",
      price: 3490,
      id: 103,
      chart: chart2,
    },
  ];

  return data;
};
