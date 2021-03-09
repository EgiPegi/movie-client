import React from 'react'

const ComboBox = ({ label, item, blank, ...rest }) => {
    return (
        <div>
            <label className="label">{label}</label>
            <select className="input" {...rest}>
                <option value=''>
                    {blank}
                </option>
                {
                    item.map((itm) => {
                        return (
                            <option value={itm} key={itm}>
                                {itm}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default ComboBox
