function ArrMethods() {
  const niji = [
    {
      id: 1,
      name: 'Shu',
      order: 'Fruit plate',
      price: 80,
    },
    {
      id: 2,
      name: 'Uki',
      order: 'Omelette plate',
      price: 100,
    },
    {
      id: 3,
      name: 'Elira',
      order: 'Brunch plate',
      price: 160,
    },
    {
      id: 4,
      name: 'Enna',
      order: 'Tiramisu',
      price: 120,
    },
    {

      id: 5,
      name: 'Millie',
      order: 'Spaghetti',
      price: 140,
    },
  ];


  return (<>
    {niji.map((item) => {
      return (<div key={item.id}>
        <ul>
          <li className="name" style={{ fontSize: '24px' }}>
            {item.name}
          </li>
          <li className="order">
            {item.order}
          </li>
        </ul>
      </div>)
    })}
  </>)
};

export default ArrMethods;