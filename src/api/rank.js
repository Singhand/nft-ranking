export const fetchRanks = async ({ pageParam = 0, keyWord, tag }) => {
  console.log("fetch", pageParam, keyWord, tag);

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataArray = [
        { name: "Alex Smith", tags: "Influencer" },
        { name: "Jordan Johnson", tags: "Model, Singer" },
        { name: "Taylor Williams", tags: "Model, Comedian" },
        { name: "Morgan Brown", tags: "Comedian" },
        { name: "Casey Jones", tags: "Model, Singer, Comedian" },
        { name: "Riley Miller", tags: "Influencer" },
        { name: "Jamie Davis", tags: "Singer" },
        { name: "Avery Garcia", tags: "Influencer, Dancer" },
        { name: "Peyton Rodriguez", tags: "Model, Dancer" },
        { name: "Quinn Wilson", tags: "Singer, Model" },
      ];

      let data = [];
      for (let index = 0; index < 10; index++) {
        let e = {
          url: `https://i.pravatar.cc/50?img=${
            ((pageParam * 10 + index) % 70) + 1
          }`,
          name: dataArray[index].name,
          tags: dataArray[index].tags,
          price: 1000000 - (pageParam * 10 + index) * 1000,
          id: pageParam * 10 + index,
        };
        data.push(e);
      }
      resolve(data);
    }, 1000);
  });
};
