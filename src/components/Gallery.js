import React from 'react'

export default function Gallery(props)
{
    const { results } = props;
    // console.log(results);
    return (
        <div className="cards">
            
        {
            results.map((item) =>
            {
                return (
                <div className="card">
                    <img
                        src={item.avatar}
                        className="card-img"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-firstname">{item.first_name}</h5>
                        <h5 className="card-lastname">{item.last_name}</h5>
                        <p className="card-email">{item.email}</p> 
                    </div>
                </div>
                    
                )
            })
                }
            
            </div>
    )
}
