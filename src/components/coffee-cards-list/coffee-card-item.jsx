import { Component } from "react";
import './coffee-cards-style.css';


// const onClickRibbonFalse = ( ) => {
//    return(
//          <div style={{display: "none"}} className="modal-window-container">
//             <div className="modal-window-block">
//                  <div className="window-content"></div>
//             </div>
//          </div>
//    );
// }

// const onClickRibbonTrue = ( ) => {
//    return(
//          <div style={{display: "block"}} className="modal-window-container">
//             <div className="modal-window-block">
//                  <div className="window-content"></div>
//             </div>
//          </div>
//    );
// }

class CardList extends Component {
    constructor() {
       super();

       this.state = {
          modalState: {display: "none"}

       }


        this.modalStateEvent = this.modalStateEvent.bind(this);
    }





  
   // onClickRibbon = (event) => {
   //    console.log(event.target);
      
   //    function clickEvent() {
   //       return   <div className="modal-window-container">
   //                   <div className="modal-window-block">
   //                        <div className="window-content"></div>
   //                   </div>
   //                </div>
   //    };

     
   //  return(
   //    <div className="coffee-card-ribbon" onClick={clickEvent}>
   //       <h3 className="ribbon-text">Recipe</h3>
   //      <i></i>
   //      <i></i>
   //      <i></i>
   //      <i></i>
   //   </div>
   //  );
   // };

     modalStateEvent = () => {
        console.log("clicked");

        this.setState({
           clicked: true,
           modalState: {display: "block"}
        });
     }

    render() {
         const {coffeeLover} = this.props;
         //const {modalStateEvent} = this;
         //const modalStateEvent = (this.state.modalState ? this.modalStateEvent : null)
          
        return( 
                <div className="coffee-cards-box">
                   {coffeeLover.map((cup) => (
                     <div key={cup.blockid} className="coffee-card-item">
                      <h2 key={cup.id}>{cup.name}</h2>

               
                      <img src={cup.cardimg} className="coffee-card-img" alt="coffee-img"></img>

                

                

                      <div className="ribbon-block">
                          <div className="block-content">
                              <div className="ribbon-container">
                              <div className="coffee-card-ribbon" onClick={
                                 this.modalStateEvent
                              }>
                                 <h3 className="ribbon-text">Recipe</h3>
                                 <i></i>
                                 <i></i>
                                 <i></i>
                                 <i></i>
                              </div>
                          </div>
                        </div>
                     </div>



                   
                   
                      

             </div>



     
             
      
    
           ))}


                              <div style={this.state.modalState} className="modal-window-container">
                                 <div className="modal-window-block">
                                    <div className="window-content"></div>
                                 </div>
                              </div>  

                  
            </div>

                   
     
            
       
        );
    }
}

export default CardList;