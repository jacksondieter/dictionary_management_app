import React from 'react'
import useDictionary from './useDictionary';
import DictionaryElement from '../dictionaryElement/dictionaryElement';
import DictionaryForm from '../dictionaryForm/dictionaryForm'

function DictionaryList({dictionaryName}) {
    const {dataList, addRow, deleteRow,updateRow} = useDictionary(dictionaryName);
    //console.log(dataList);
    return (
        <div>
            <DictionaryForm addRow={addRow}/>
            <div className="dictionary-list">
                {dataList.map((row) => (
                <DictionaryElement row={row} key={row.domain} deleteRow={deleteRow} updateRow={updateRow}/>
                ))}
            </div>
        </div>
    )
}

export default DictionaryList
