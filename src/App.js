
import {Component} from 'react';
import CardList from './components/coffee-cards-list/coffee-card-item';
import Searchbar from './components/search-input/search-input-module';
import CoffeeTitle from './components/coffee-title/coffee-title-module';
import CoffeeFooter from './components/footer/coffee-lover-footer';
//import onClickRibbon from './components/card-recipe-module/card-recipe-module';
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
          cardimg: require("./img/kofe-amerikano-v-domashnix-usoviyax.jpg")
        },

        {
          name: "Bicerin",
          id: "bicerin12#2",
          blockid: "block2",
          cardimg: require("./img/kofe-bicerin-768x650.jpg")
        },

        {
          name: "Breve",
          id: "breve12#7",
          blockid: "block3",
          cardimg: require("./img/kofe-breve-1.jpg")
        },

        {
          name: "Bulletproof",
          id: "bulletproof22#94",
          blockid: "block12",
          cardimg: require("./img/kofe-so-slivochnym-i-kokosovym-maslom.jpg")
         },

        {
          name: "Corretto",
          id: "corretto33#1",
          blockid: "block4",
          cardimg: require("./img/kak-pit-kofe-koretto.jpg")
        },

        {
          name: "Con Panna",
          id: "conpanna33#4",
          blockid: "block5",
          cardimg: require("./img/espresso-kon-panna.jpg")
        },

        {
          name: "Caffe Latte",
          id: "caffelatte33#00",
          blockid: "block6",
          cardimg: require("./img/cafe-latte-recipe-featured-800x530.jpg")
        },

        {
          name: "Cappuccino",
          id: "cappuccino33#0",
          blockid: "block7",
          cardimg: require("./img/kak-sdelat-kapuchino-v-domashnix-usloviyax.jpg")
        },

        {
          name: "Caffe Affogato",
          id: "caffeaffogato33#01",
          blockid: "block8",
          cardimg: require("./img/affogato-v-domashnix-usloviyax.jpg")
        },

        {
          name: "Chocolate Milk",
          id: "chocolatemilk33#10",
          blockid: "block9",
          cardimg: require("./img/delish-2021-chocolatemilk-036-1615340969.jpg")
        },

        {
          name: "Caramel Frappucino",
          id: "caramelfrappucino33#99",
          blockid: "block10",
          cardimg: require("./img/8e9aad464054682c60a1542750e17cda.jpg")
        },

 
        {
         name: "Doppio",
         id: "doppio22#9",
         blockid: "block11",
         cardimg: require("./img/napitok-doppio.jpg")
        },

       

        {
          name: "Espresso",
          id: "espresso11#0",
          blockid: "block13",
          cardimg: require("./img/kofe-espresso-v-chashke.jpg")
        },

        {
          name: "Flat White",
          id: "flatwhite55#9",
          blockid: "block14",
          cardimg: require("./img/kofejnyj-napitok-flat-white.jpg")
         },

         {
          name: "Frappe",
          id: "frappe55#00",
          blockid: "block15",
          cardimg: require("./img/kofejnyj-napitok-frappe-1.jpg")
         },

        

         {
          name: "Freddo",
          id: "freddo55#30",
          blockid: "block17",
          cardimg: require("./img/kofe-freddo.jpg")
         },

         {
          name: "Glace",
          id: "glace66#11",
          blockid: "block18",
          cardimg: require("./img/kofe-glyase.jpg")
         },

        
         {
          name: "Honey Raf",
          id: "honeyraf95#17",
          blockid: "block27",
          cardimg: require("./img/kofe-medovyj-raf-1.jpg")
        },


         {
          name: "Irish Coffee",
          id: "irishcoffee77#1",
          blockid: "block20",
          cardimg: require("./img/tradicionnyj-irlandskij-kofe.jpg")
         },
 
        {
         name: "Lungo",
         id: "lungo33#7",
         blockid: "block21",
         cardimg: require("./img/kofe-lungo.jpg")
       },

       {
        name: "Latte",
        id: "latte00#1",
        blockid: "block22",
        cardimg: require("./img/kofe-latte-v-bokale.jpg")
      },

       {
        name: "Latte Macchiato",
        id: "lattemacchiato88#10",
        blockid: "block23",
        cardimg: require("./img/latte-makiato.jpg")
      },

     

      {
        name: "Macchiato",
        id: "macchiato95#22",
        blockid: "block25",
        cardimg: require("./img/kofejnyj-napitok-makiato.jpg")
      },

     

      
 
        {
         name: "Ristretto",
         id: "ristretto44#1",
         blockid: "block28",
         cardimg: require("./img/kofejnyj-napitok-ristretto.jpg")
       },

       {
        name: "Romano",
        id: "romano00#09",
        blockid: "block29",
        cardimg: require("./img/kofe-s-limonom-romano.jpg")
      },

      {
        name: "Raf Coffee",
        id: "rafcoffee00#19",
        blockid: "block30",
        cardimg: require("./img/kofejnyj-napitok-raf.jpg")
      },

      {
        name: "Torre",
        id: "torre95#12",
        blockid: "block26",
        cardimg: require("./img/kofe-torre-1-150x150.jpg")
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
