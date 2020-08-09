import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {closeModal} from '../../store/actions/favoriteAction'
import { FavoriteList } from '../../components/Favorite/FavoriteList/FavoriteList'
import FavoriteModal from '../../components/Favorite/FavoriteModal/FavoriteModal'

export const Favorite = () => {
    const dispatch = useDispatch()
    const factoryReducer = useSelector(state => ({
        openMainModal: state.favorite.openMainModal,
        changeModal: state.favorite.changeModal
    }))

    useEffect(() => {
        dispatch(closeModal())
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            { factoryReducer.openMainModal
                ? <FavoriteModal title='Сохранить запрос'/>
                : <FavoriteList />
            }
        </>
    )
}