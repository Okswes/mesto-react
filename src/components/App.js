import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({
        isOpen: false,
        link: '',
        name: ''
    });

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleDeleteCardClick() {
        setIsDeleteCardPopupOpen(true);
    }

    function handleCardClick(props) {
        setSelectedCard({
            isOpen: true,
            name: props.name,
            link: props.link
        });
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }


    return (
        <div className="App">
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick} />


                <PopupWithForm title="Обновить аватар" name="avatar" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                    children={
                        <>
                            <input className="popup__item popup__item_el_avatar" name="avatar" id="avatar-input" type="url"
                                placeholder="Ссылка на аватар" required />
                            <span className="popup__error" id="avatar-input-error"></span>
                        </>
                    }
                />

                <PopupWithForm title="Редактировать профиль" name="info" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                    children={
                        <>
                            <input className="popup__item popup__item_el_name" name="author" id="name-input" type="text" required
                                minLength="2" maxLength="40" pattern="[A-Za-zА-ЯЁа-яё -]{1,}" placeholder="Имя" />
                            <span className="popup__error" id="name-input-error"></span>
                            <input className="popup__item popup__item_el_prof" name="job" id="prof-input" type="text" required
                                minLength="2" maxLength="200" placeholder="Занятие" />
                            <span className="popup__error" id="prof-input-error"></span>
                        </>
                    }
                />

                <PopupWithForm title="Новое место" name="add" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                    children={
                        <>
                            <input className="popup__item popup__item_el_place" name="name" id="place-input" type="text"
                                placeholder="Название" required minLength="1" maxLength="30" />
                            <span className="popup__error" id="place-input-error"></span>
                            <input className="popup__item popup__item_el_link" name="link" id="url-input" type="url"
                                placeholder="Ссылка на картинку" required />
                            <span className="popup__error" id="url-input-error"></span>
                        </>
                    }
                />

                <PopupWithForm title="Вы уверены?" name="delete" buttonName="Да" isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
