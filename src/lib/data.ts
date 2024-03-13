import type { Product } from 'types'

export const products: Product[] = [
  {
    id: 1,
    slug: 'blue-kush',
    title: 'Blue Kush',
    description:
      'Blue Kush es una semilla de marihuana feminizada capaz de estimular todos tus sentidos y de llenarte de buenas vibraciones. En Dinafem Seeds nos apetecía trabajar con dos iconos cannábicos de la categoría de Blueberry y OG Kush, y, aunque son genéticas bien diferentes y con gran personalidad, ambas han sabido complementarse a la perfección',
    image: 'https://www.dinafem.org/uploads/0003053-blue-kush.jpg',
    cogo: 'https://i.postimg.cc/sD4mf6W1/blue-kush-cogo.png',
    mix: 'Blueberry x OG Kush',
    genotype: '45% Indica / 55% Sativa',
    time: '60',
    weight: 500,
    category: 'fotoperiodicas',
    price: 10000,
    quantity: 0
  },
  {
    id: 2,
    slug: 'cookies-autoflowering',
    title: 'Cookies Auto',
    description:
      'Cookies Autoflowering es una semilla de cannabis autofloreciente que hereda los valores de la famosa Girl Scout Cookies, potenciados por la robustez y rapidez de OG Kush Autoflowering. De estatura media y estructura arbustiva, su condición de automática la hace más apta para climas templados que su versión feminizada',
    image: 'https://www.dinafem.org/uploads/DNFS0080.jpg',
    cogo: 'https://i.postimg.cc/0jb6gN7p/cookie-auto-cogo.png',
    mix: 'Girl Scout Cookies x OG Kush Auto',
    genotype: '50% Indica / 50% Ruderalis',
    time: '75',
    weight: 200,
    category: 'autoflorecientes',
    price: 12000,
    quantity: 0
  },
  {
    id: 3,
    slug: 'amnesia-kush',
    title: 'Amnesia Kush',
    description:
      'Si dos de las grandes mecas cannábicas, California y Holanda, decidieran tener descendencia, el resultado serían las semillas de marihuana Amnesia Kush. Y es que esta variedad, fruto del cruce entre una Amnesia Haze y una OG Kush, reúne lo mejor de cada una de estas tradiciones cannábicas.',
    image: 'https://i.postimg.cc/xdd3mXNB/amnesia-kush.webp',
    cogo: 'https://i.postimg.cc/htgdvKnq/amnesia-kush-cogo.png',
    mix: 'Amnesia Haze x OG Kush',
    genotype: '30% Indica / 70% Sativa',
    time: '60-70',
    weight: 800,
    category: 'fotoperiodicas',
    price: 13000,
    quantity: 0
  },
  {
    id: 4,
    slug: 'critical-+',
    title: 'Critical +',
    description:
      'Critical + es una semilla de marihuana feminizada que lo tiene todo y que se encuentra entre las grandes damas del cannabis: crece sin problemas, su capacidad productiva es espectacular, sus cualidades aromáticas y gustativas son inigualables, y su potente efecto produce un impresionante y característico subidón que todo el mundo quiere experimentar',
    image: 'https://i.postimg.cc/cLLMfpC8/critical.webp',
    cogo: 'https://i.postimg.cc/yNQZsxyf/critical-cogo.png',
    mix: 'Big Bud x Skunk',
    genotype: 'Dominancia indica',
    time: '45-50',
    weight: 1300,
    category: 'fotoperiodicas',
    price: 15000,
    quantity: 0
  },
  {
    id: 5,
    slug: 'og-kush',
    title: 'OG Kush',
    description:
      'Las semillas de marihuana de OG Kush son un ‘must’ para cualquier banco que se precie. Es una de las variedades de cannabis más demandadas de California y, por ende, del mundo, y fue elegida como la mejor variedad de cannabis de todos los tiempos por la biblia cannábica, High Times.',
    image: 'https://i.postimg.cc/wTbYNzfZ/og-kush-1.webp',
    cogo: 'https://i.postimg.cc/PxZ1WdQ4/og-kush.webp',
    mix: 'Lemon Thai x Chemdawg',
    genotype: '75% Indica / 25% Sativa',
    time: '55',
    weight: 1100,
    category: 'fotoperiodicas',
    price: 17000,
    quantity: 0
  },
  {
    id: 6,
    slug: 'dinamed-kush',
    title: 'Dinamed Kush Auto',
    description:
      'Dinamed Kush CBD Autoflowering es una variedad de cannabis autofloreciente que se convierte en una planta de morfología muy indica, con un aroma Kush muy fuerte, y con un sabor muy marcado. Lo más importante es que los cogollos resultantes no producen psicoactividad alguna, dado que apenas presenta trazas de THC, pero sí produce altos niveles de CBD',
    image: 'https://i.postimg.cc/KvzFgCNf/dinamed-kush.webp',
    cogo: 'https://i.postimg.cc/zDp8vqn3/dinamed-kush-cogo.webp',
    mix: 'Purple Kush x Dinamed Auto CBD',
    genotype: '50% Indica / 50% Ruderalis',
    time: '65',
    weight: 500,
    category: 'autoflorecientes',
    price: 15000,
    quantity: 0
  },
  {
    id: 7,
    slug: 'white-cheese-auto',
    title: 'White Cheese Auto',
    description:
      'White Cheese Auto reúne la potencia demoledora de la White Widow Auto con el sabor de la Cheese Auto, lo mejor de cada casa para forjar un híbrido autofloreciente de dominancia índica y calidad superior. Una fuera de serie pensada para aquellos que no disponen de mucho tiempo y buscan un efecto poderoso sin renunciar al sabor.',
    image: 'https://i.postimg.cc/G2rDdvD4/white-cheese-auto.webp',
    cogo: 'https://i.postimg.cc/k5WS0T2r/white-cheese-auto-cogo.png',
    mix: 'Purple Kush x Dinamed Auto CBD',
    genotype: '90% Indica / 10% Sativa',
    time: '75',
    weight: 150,
    category: 'autoflorecientes',
    price: 14000,
    quantity: 0
  },
  {
    id: 8,
    slug: 'haze-2.0',
    title: 'Haze 2.0 Auto',
    description:
      'Haze 2.0 Auto es una chica que pisa fuerte, una Dinagirl con mucho carácter que, gracias a su dominancia sativa y su calidad aromática, se ha convertido en una joya que todo amante de las Haze debería cultivar al menos una vez en la vida.',
    image: 'https://i.postimg.cc/7PTZL5x9/haze-2-0-auto.webp',
    cogo: 'https://i.postimg.cc/ncbc9nrJ/haze-2-0-auto-cogo.webp',
    mix: 'Haze Auto x Jack Herer',
    genotype: '30% Indica / 70% Sativa',
    time: '75-80',
    weight: 170,
    category: 'autoflorecientes',
    price: 17000,
    quantity: 0
  }
]
