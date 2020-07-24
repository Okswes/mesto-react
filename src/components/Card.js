import React from 'react';


function Card(props) {
    function handleClick() {
        props.onClick(props.card);
    }

    return (
        <div className="place" key={props.card._id}>
            <img className="place__picture" alt="" src={props.card.link} onClick={handleClick} />
            <button className="place__delete"></button>
            <div className="place__textarea">
                <p className="place__text">{props.card.name}</p>
                <div className="place__likesform">
                    <button className="place__like"></button>
                    <p className="place__likecount">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card