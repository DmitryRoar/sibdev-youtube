import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {closeModal, changeModalClose} from '../../store/actions/favoriteAction'
import { FavoriteList } from '../../components/Favorite/FavoriteList/FavoriteList'
import FavoriteModal from '../../components/Favorite/FavoriteModal/FavoriteModal'

export const Favorite = () => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => ({
        openMainModal: state.favorite.openMainModal,
        changeModal: state.favorite.changeModal
    }))

    useEffect(() => {
        dispatch(closeModal())
        dispatch(changeModalClose())
        // eslint-disable-next-line
    }, [])

    return (
        <>
            { selectors.openMainModal
                ? <FavoriteModal title={selectors.changeModal ? 'Изменить запрос' : 'Сохранить запрос'}/>
                : <FavoriteList />
            }
        </>
    )
}