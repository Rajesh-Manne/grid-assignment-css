import React from 'react'

export default function Gallery(props)
{
    const { results } = props;
  console.log(results)
    return (
        <div className="cards">
            
        {
            results.map((item) =>
            {
                return (
                    // <div className="col-md-4 col-12 hero-2">
                    //     <div className="mx-auto px-5">
                    // <img src={item.avatar} alt={item.firstname} />
                    //     <h5 className="mx-auto">{item.first_name}</h5>
                    //     <h5 className="mx-auto">{item.last_name}</h5>
                    //         <p className="mx-auto">{item.email}</p>
                    //         </div>
                    //     </div>
                    
                <div className="card">
                <img
                    src={item.avatar}
                    className="card-img"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{item.first_name}</h5>
                    <h5 className="card-title">{item.last_name}</h5>
                    <p className="card-email">{item.email}</p> 
                </div>
                        </div>
                    
                )
            })
                }
            
            </div>
    )
}
