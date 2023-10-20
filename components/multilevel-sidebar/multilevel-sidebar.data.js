let options = [
    {
      id: 1,
      title: "Главная",
      icon: <i className="fa fa-graduation-cap"></i>,
      hideBorder: false,
      disabled: false,
      to: "/"
    },
    {
      id: 2,
      title: "Мужское",
      icon: <i className="fa fa-paragraph"></i>,
      hideBorder: true,
      disabled: false,
      to: "/shop",
      children: [
        {
          id: 1,
          title: "Обувь",
          icon: <i className="fa fa-opera"></i>,
          children: [
            {
              id: 1,
              title: "Кросовки",
              icon: <i className="fa fa-opera"></i>
            },
            {
              id: 2,
              title: "Ботинки",
              icon: <i className="fa fa-opera"></i>
            }
          ]
        }
      ]
    }
  ];
  
  export default options;
  