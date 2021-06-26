import React from 'react'
import {Route,BrowserRouter as Router, Link} from 'react-router-dom'
const Participants = ({users}) => {

   
    
    return (

        


        <div className="text-center">
            <h2 className="text-center">List of Users</h2>

        
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    
                {

                        users.map((curElem) => {
                        
                            const { id} = curElem;
                        return (
                              <div className="col-10 col-md-4 mt-5" key={id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"><img src={curElem.url} className="w-25" /></div>
                                    <div className="ml-3 w-100">
                                            
                                            {/* <span className="text-left">{type }</span> */}
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">ID</span> <span className="number1">{curElem.id}</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">AlbumID</span> <span className="number2">{curElem.albumId}</span> </div>

                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                          
                    </div>
                        )
                })        

                }
                </div>
            </div>
            <pie></pie>
        </div>
    )
}

export default Participants