import './card-recipe-style.css';

let onClickRibbon;

onClickRibbon = (event) => {
    console.log(event.target);

    return(
        <div className="modal-window-container">
            <div className="modal-window-block">
                <div className="window-content"></div>
            </div>
        </div>
    );
 };

 export default onClickRibbon;