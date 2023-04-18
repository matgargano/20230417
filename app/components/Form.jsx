"use client";

import { useState } from 'react';

const Form = () => {

    const [data, setData] = useState('');

    return <div>
        <label htmlFor="data">Data</label>
        <input 
            type="text" 
            value={data} 
            onChange={e => setData(e.target.value)} 
            className="border-2 border-blue-500"
            
            />
    </div>

}

export default Form;