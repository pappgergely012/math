const initialState = [
  {
    categoryName: 'Téglalap / Négyzet',
    subcategories: [
      {
        name: 'Terület (négyzetméter)',
        measure: 'm2',
        id: '01',
        dimensions: ['length', 'width'],
        description: 'A téglalap területének képlete:\n[a * b]'
      },
      {
        name: 'Kerület',
        measure: null,
        id: '02',
        dimensions: ['length', 'width'],
        description: 'A téglalap átlóinak kiszámolási képlete:\n[2 * (a + b)]'
      },
      {
        name: 'Átlók',
        measure: null,
        id: '03',
        dimensions: ['length', 'width'],
        description: 'A téglalap kerületének képlete:\n[√a² + b²]'
      },
    ],
    selectedSubcategory: null
  },
  {
    categoryName: 'Kocka / Téglatest',
    subcategories: [
      {
        name: 'Térfogat (köbméter)',
        measure: 'm3',
        id: '11',
        dimensions: ['length', 'width', 'height'],
        description: `A Kocka / Téglatest térfogatát képlete:\n[a * b * c ]\n\n A téglatest olyan test, melynek oldalait hat téglalap alkotja. A szembeni oldalak megegyezőek és párhuzamosak. A testátlók mindíg egyforma hosszúak. Amikor minden oldala megegyezik azt nevezzük Kockának. \na = hosszúság \nb = szélesség \nc = magasság \n\nÁtváltás: \n0.1m = 10cm` 
      },
      {
        name: 'Testátló',
        measure: 'm',
        id: '12',
        dimensions: ['length', 'width', 'height'],
        description: `Kocka / Téglatest testátlójának képlete:\n[√a² * b² * c²] . \n\n A téglatest olyan test, melynek oldalait hat téglalap alkotja. A szembeni oldalak megegyezőek és párhuzamosak. A testátlók mindíg egyforma hosszúak. \na = hosszúság \nb = szélesség \nc = magasság` 
      },
      {
        name: 'Felszín',
        measure: 'm',
        id: '13',
        dimensions: ['length', 'width', 'height'],
        description: `Kocka / Téglatest felszínének képlete:\n[2 * (a*b + a*c + b*c)] . \n\n A téglatest olyan test, melynek oldalait hat téglalap alkotja. A szembeni oldalak megegyezőek és párhuzamosak. A testátlók mindíg egyforma hosszúak. \na = hosszúság \nb = szélesség \nc = magasság` 
      },
    ],
  },
  {
    categoryName: 'Kör',
    subcategories: [
      {
        name: 'Terület',
        measure: null,
        id: '21',
        dimensions: ['diameter'],
        description: `A kör területének képlete:\n[π * r²] \nr = átmérő \n\nA kör adott középponttal és sugárral vagy átmérővel.` 
      },
      {
        name: 'Kerület',
        measure: null,
        id: '22',
        dimensions: ['diameter'],
        description: `A kör kerületének képlete:\n[2 * π * r] \nr = átmérő \n\nA kör adott középponttal és sugárral vagy átmérővel.` 
      },
      {
        name: 'Sugár',
        measure: null,
        id: '23',
        dimensions: ['diameter'],
        description: `A kör sugarának képlete:\n[r / 2] \nr = átmérő \n\nA kör adott középponttal és sugárral vagy átmérővel.` 
      },
    ]
  },
  {
    categoryName: 'Gömb',
    subcategories: [
      {
        name: 'Térfogat',
        measure: null,
        id: '31',
        dimensions: ['diameter'],
        description: `A gömb térfogatának képlete:\n[4 / 3 * π * r^3] \nr = átmérő \n\nA kör adott középponttal és sugárral vagy átmérővel.` 
      },
      {
        name: 'Felszín',
        measure: null,
        id: '32',
        dimensions: ['diameter'],
        description: `A gömb felszínének képlete:\n[4 * π * r²] \nr = átmérő \n\nA kör adott középponttal és sugárral vagy átmérővel.` 
      },
    ]
  },
  {
    categoryName: 'Háromszög',
    subcategories: [
      {
        name: 'Terület',
        measure: null,
        id: '41',
        dimensions: ['A', 'height'],
        description: `A háromszög területének képlete:\n[(a * m) / 2] \nm = magasság \na,b,c = oldalak` 
      },
      {
        name: 'Kerület',
        measure: null,
        id: '42',
        dimensions: ['A', 'B', 'C'],
        description: `A háromszög kerületének képlete:\n[a + b + c] \na,b,c = oldalak` 
      },
    ]
  },
]


const CategoryReducer = (state = initialState, actions) => {
  switch(actions.type){
    default:
      return state;
  }
}

export default CategoryReducer;