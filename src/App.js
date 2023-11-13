
import {Component} from 'react';
import CardList from './components/coffee-cards-list/coffee-card-item';
import Searchbar from './components/search-input/search-input-module';
import CoffeeTitle from './components/coffee-title/coffee-title-module';
import CoffeeFooter from './components/footer/coffee-lover-footer';
// import cardContent1 from './components/card-recipe-module/card-recipe-module';
import './App.css';

class  App extends Component {
  constructor () {
     super();

     this.state = {
      coffee: [
        {
          name: "Americano",
          id: "americano11#5",
          blockid: "block1",
          cardimg: require("./img/kofe-amerikano-v-domashnix-usoviyax.jpg"),
          ribbonId: "1A1"
        },

        {
          name: "Bicerin",
          id: "bicerin12#2",
          blockid: "block2",
          cardimg: require("./img/kofe-bicerin-768x650.jpg"),
          ribbonId: "1B2"
        },

        {
          name: "Breve",
          id: "breve12#7",
          blockid: "block3",
          cardimg: require("./img/kofe-breve-1.jpg"),
          ribbonId: "1B3"
        },

        {
          name: "Bulletproof",
          id: "bulletproof22#94",
          blockid: "block12",
          cardimg: require("./img/kofe-so-slivochnym-i-kokosovym-maslom.jpg"),
          ribbonId: "2B1"
         },

        {
          name: "Corretto",
          id: "corretto33#1",
          blockid: "block4",
          cardimg: require("./img/kak-pit-kofe-koretto.jpg"),
          ribbonId: "2C2"
        },

        {
          name: "Con Panna",
          id: "conpanna33#4",
          blockid: "block5",
          cardimg: require("./img/espresso-kon-panna.jpg"),
          ribbonId: "2C3"
        },

        {
          name: "Caffe Latte",
          id: "caffelatte33#00",
          blockid: "block6",
          cardimg: require("./img/cafe-latte-recipe-featured-800x530.jpg"),
          ribbonId: "3C1"
        },

        {
          name: "Cappuccino",
          id: "cappuccino33#0",
          blockid: "block7",
          cardimg: require("./img/kak-sdelat-kapuchino-v-domashnix-usloviyax.jpg"),
          ribbonId: "3C2"
        },

        {
          name: "Caffe Affogato",
          id: "caffeaffogato33#01",
          blockid: "block8",
          cardimg: require("./img/affogato-v-domashnix-usloviyax.jpg"),
          ribbonId: "3C3"
        },

        {
          name: "Chocolate Milk",
          id: "chocolatemilk33#10",
          blockid: "block9",
          cardimg: require("./img/delish-2021-chocolatemilk-036-1615340969.jpg"),
          ribbonId: "4C1"
        },

        {
          name: "Caramel Frappucino",
          id: "caramelfrappucino33#99",
          blockid: "block10",
          cardimg: require("./img/8e9aad464054682c60a1542750e17cda.jpg"),
          ribbonId: "4C2"
        },

 
        {
         name: "Doppio",
         id: "doppio22#9",
         blockid: "block11",
         cardimg: require("./img/napitok-doppio.jpg"),
         ribbonId: "4D3"
        },

       

        {
          name: "Espresso",
          id: "espresso11#0",
          blockid: "block13",
          cardimg: require("./img/kofe-espresso-v-chashke.jpg"),
          ribbonId: "5E1"
        },

        {
          name: "Flat White",
          id: "flatwhite55#9",
          blockid: "block14",
          cardimg: require("./img/kofejnyj-napitok-flat-white.jpg"),
          ribbonId: "5F2"
         },

         {
          name: "Frappe",
          id: "frappe55#00",
          blockid: "block15",
          cardimg: require("./img/kofejnyj-napitok-frappe-1.jpg"),
          ribbonId: "5F3"
         },

        

         {
          name: "Freddo",
          id: "freddo55#30",
          blockid: "block17",
          cardimg: require("./img/kofe-freddo.jpg"),
          ribbonId: "6F1"
         },

         {
          name: "Glace",
          id: "glace66#11",
          blockid: "block18",
          cardimg: require("./img/kofe-glyase.jpg"),
          ribbonId: "6G2"
         },

        
         {
          name: "Honey Raf",
          id: "honeyraf95#17",
          blockid: "block27",
          cardimg: require("./img/kofe-medovyj-raf-1.jpg"),
          ribbonId: "6H3"
        },


         {
          name: "Irish Coffee",
          id: "irishcoffee77#1",
          blockid: "block20",
          cardimg: require("./img/tradicionnyj-irlandskij-kofe.jpg"),
          ribbonId: "7I1"
         },
 
        {
         name: "Lungo",
         id: "lungo33#7",
         blockid: "block21",
         cardimg: require("./img/kofe-lungo.jpg"),
         ribbonId: "7L2"
       },

       {
        name: "Latte",
        id: "latte00#1",
        blockid: "block22",
        cardimg: require("./img/kofe-latte-v-bokale.jpg"),
        ribbonId: "7L3"
      },

       {
        name: "Latte Macchiato",
        id: "lattemacchiato88#10",
        blockid: "block23",
        cardimg: require("./img/latte-makiato.jpg"),
        ribbonId: "8L1"
      },

     

      {
        name: "Macchiato",
        id: "macchiato95#22",
        blockid: "block25",
        cardimg: require("./img/kofejnyj-napitok-makiato.jpg"),
        ribbonId: "8M2"
      },

     

      
 
        {
         name: "Ristretto",
         id: "ristretto44#1",
         blockid: "block28",
         cardimg: require("./img/kofejnyj-napitok-ristretto.jpg"),
         ribbonId: "8R3"
       },

       {
        name: "Romano",
        id: "romano00#09",
        blockid: "block29",
        cardimg: require("./img/kofe-s-limonom-romano.jpg"),
        ribbonId: "9R1"
      },

      {
        name: "Raf Coffee",
        id: "rafcoffee00#19",
        blockid: "block30",
        cardimg: require("./img/kofejnyj-napitok-raf.jpg"),
        ribbonId: "9R2"
      },

      {
        name: "Torre",
        id: "torre95#12",
        blockid: "block26",
        cardimg: require("./img/kofe-torre-1-150x150.jpg"),
        ribbonId: "9T3"
      }
      ],

      searchField: ""
     }
  }

  // componentDidMount() {
  //    fetch('https://github.com/fernandohg97/coffee-api.git.')
  //    .then(response => console.log(response));
  // }

  

  onChangeSearch = (event) => {
    let searchField = event.target.value;
    this.setState( () => {
     return {searchField};
    });
   };


  render () {

    const { coffee,searchField } = this.state;
    const { onChangeSearch } = this;


    let filteredCoffee = coffee.filter( (word) => {return word.name.includes(searchField)});

    return (
      <div className="App">
        {/* <input type='search' name='Search' placeholder='Type your coffee' onChange={onChangeSearch}/> */}

          {/* {
            filteredCoffee.map( (coffee) => {
                 return <div key={coffee.id}>
                    <h1>{coffee.name}</h1>
                 </div>
            })
          } */}
          <CoffeeTitle/>


          <Searchbar searchOnChange={onChangeSearch} />
          

          <CardList coffeeLover={filteredCoffee} />


          <CoffeeFooter />
      </div>
    );
  }
  
}

export default App;
