import React from 'react';
import api from '../utils/Api';
import Card from './Card';


function Main(props) {
    const [userName, setUserName] = React.useState('One');
    const [userDescription, setUserDescription] = React.useState('Two');
    const [userAvatar, setUserAvatar] = React.useState('Three');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards([...initialCards]);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-block">
                    <img src={userAvatar} className="profile__avatar" alt="Жак-Ив Кусто" />
                    <button className="profile__edit-icon" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__info-grid">
                        <h2 className="profile__title">{userName}</h2>
                        <button className="edit-button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="place-list">
                {cards.map(item => <Card key={item._id} card={item} onClick={props.onCardClick} />)}
            </section>
        </main>
    )
}

export default Main