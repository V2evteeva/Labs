const ages = (persons) => {
    const lifeSpan = {};
  
    for (const person in persons) {
      lifeSpan[person] = persons[person].died - persons[person].born;
    }
  
    return lifeSpan;
  };
  
  const persons = {
    john: { born: 1920, died: 1995 },
    alice: { born: 1950, died: 2020 },
    bob: { born: 1880, died: 1945 },
    charlie: { born: 1935, died: 2010 },
  };
  
  console.log(ages(persons));
  