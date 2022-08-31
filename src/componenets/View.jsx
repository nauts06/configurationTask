import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({data,deleteData}) => {
    return data.map(elem=>(
        <tr key={elem.isbn}>
         
            <td>{elem.name}</td>
            <td>{elem.date}</td>
            <td>{Date.now()}</td>
            <td>{elem.ram}</td>
            <td>{elem.hard}</td>
            <td>{elem.keyboard}</td>
            <td>{elem.processor}</td>
            <td className='delete-btn' onClick={()=>deleteData(elem.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
))
}
