import { Component } from "react";
import './coffee-cards-style.css';







class CardList extends Component {
    constructor() {
       super();

       this.state = {
          modalState: {display: "none"},
          windowTextBox: [],
          currentRec: undefined,
          windowPanel: undefined
       }


        this.modalStateEvent = this.modalStateEvent.bind(this);
    }

   



   
      modalStateEvent = (event) =>  {
         event.preventDefault();
         event.stopPropagation();
         console.log("clicked");
         console.log(event.target);

 
         let clickTarget = event.target;

         
         
         



          
         this.setState({
            clicked: true,
            modalState: {display: "block"},
            windowTextBox: [
               {
                 recipeTitle: "Americano",
                 recipeId: "1A"
               },
   
               {
                recipeTitle: "Bicerin",
                recipeId: "2B"
               },
   
               {
                recipeTitle: "Breve",
                recipeId: "3B"
               },
   
               {
                recipeTitle: "Bulletproof",
                recipeId: "4B"
               },
   
               {
                recipeTitle:  "Corretto",
                recipeId: "5C"
               },
   
               {
                recipeTitle: "Con Panna",
                recipeId: "6C"
               },
   
   
               {
                recipeTitle: "Caffe Latte",
                recipeId: "7C"
              },
   
              {
               recipeTitle: "Cappuccino",
               recipeId: "8C"
              },
   
              {
               recipeTitle: "Caffe Affogato",
               recipeId: "9C"
              },
   
              {
               recipeTitle: "Chocolate Milk",
               recipeId: "10C"
              },
   
              {
               recipeTitle:  "Caramel Frappucino",
               recipeId: "11C"
              },
   
              {
               recipeTitle: "Doppio",
               recipeId: "12D"
              },
   
   
   
              {
                recipeTitle: "Espresso",
                recipeId: "13E"
              },
   
              {
               recipeTitle: "Flat White",
               recipeId: "14F"
              },
   
              {
               recipeTitle: "Frappe",
               recipeId: "15F"
              },
   
              {
               recipeTitle: "Freddo",
               recipeId: "16F"
              },
   
              {
               recipeTitle:  "Glace",
               recipeId: "17G"
              },
   
              {
               recipeTitle: "Honey Raf",
               recipeId: "18H"
              },
   
   
              {
                recipeTitle: "Irish Coffee",
                recipeId: "19I"
              },
   
              {
               recipeTitle: "Lungo",
               recipeId: "20L"
              },
   
              {
               recipeTitle: "Latte",
               recipeId: "21L"
              },
   
              {
               recipeTitle: "Latte Macchiato",
               recipeId: "22L"
              },
   
              {
               recipeTitle:  "Macchiato",
               recipeId: "23M"
              },
   
              {
               recipeTitle: "Ristretto",
               recipeId: "24R"
              },
   
   
              {
                recipeTitle: "Romano",
                recipeId: "25R"
               },
   
               {
                recipeTitle:  "Raf Coffee",
                recipeId: "26R"
               },
   
               {
                recipeTitle: "Torre",
                recipeId: "27T"
               },
           ],
            currentRec: {clickTarget},
            
         });
      };




      
    

     


     

    render() {
         const {coffeeLover} = this.props;
          const {windowTextBox} = this.state;
        
          
        return( 
                <div className="coffee-cards-box">
                   {coffeeLover.map((cup) => (
                     <div key={cup.blockid} className="coffee-card-item">
                      <h2  className="coffee-card-title" key={cup.id}>{cup.name}</h2>

               
                      <img src={cup.cardimg} className="coffee-card-img" alt="coffee-img"></img>

                

                

                      <div className="ribbon-block">
                          <div className="block-content">
                              <div className="ribbon-container">
                              <div id={cup.ribbonId} className="coffee-card-ribbon" onClick={
                                  this.modalStateEvent
                              }>
                                 <h3 className="ribbon-text">Recipe</h3>
                                 <i className="ribbon-tail" ></i>
                                 <i className="ribbon-tail"></i>
                                 <i className="ribbon-tail"></i>
                                 <i className="ribbon-tail" ></i>
                              </div>
                          </div>
                        </div>
                     </div>



                   
                   
                      

             </div>



     
             
      
    
           ))}


                              <div style={this.state.modalState} className="modal-window-container">
                                 <div className="modal-window-block">
                                    <div className="window-content">
                                      {windowTextBox.map((content) => (  
                                            <div key={content.recipeId} className="window-text-block">
                                                <div>{this.state.windowPanel}</div>
                                           </div>
                                      ))}
                                    </div>
                                 </div>
                              </div>  

                  
            </div>

                   
     
            
       
        );
    }
}

export default CardList;