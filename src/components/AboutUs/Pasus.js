import React from 'react'

const TryHelper = (props) => {
    return (
        <div class="newContent">
            <table style={{ width: '90%', marginTop: '20px' }}>
                <tr>
                    <th style={{ width: '30%' }}></th>
                    <th style={{ width: '100%' }} className="aboutTitle">  {props.title}  </th>
                </tr>
                <tr style={{ width: '50px', border: '0', marginLeft: '50px' }}>
                    <td rowspan="1" style={{ width: '30px', border: '0' }}>
                        <img className="blokPhoto1"
                            src={props.src}
                            style={{
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '0'
                            }} /></td>
                    <td className="aboutText">{props.text}</td>
                </tr>
            </table>
        </div>
    )
}

export default TryHelper