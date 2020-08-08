import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {verticalGrid, horizontalGrid} from '../../store/actions/homeAction'

export const GridButton = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => ({
        grid: state.home.grid
    }))
    
    const changeGridHandler = (actionFunction) => {
        dispatch(actionFunction())
    }

    const verticalCls = ['fas', 'fa-list-ul']
    const horizontalCls = ['fas', 'fa-th-large']

    if (!selector.grid) {
        verticalCls.push('active')
    } else {
        horizontalCls.push('fa-th-large', 'active')
    }

    return (
        <>
            <button onClick={changeGridHandler.bind(null, verticalGrid)}>
                <i className={verticalCls.join(' ')} />
            </button>
            <button onClick={changeGridHandler.bind(null, horizontalGrid)}>
                <i className={horizontalCls.join(' ')} />
            </button>
        </>
    )
}