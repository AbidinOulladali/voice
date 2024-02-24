import React, { useEffect, useState } from 'react'
import { deletePatient } from './action';
import { useDispatch } from 'react-redux';

export default function List2() {
    const [list,setList] = useState([]);
    
   
    
    
    useEffect(()=>{
        load();
    },[])
    function load(){
        fetch('http://localhost:3500/patient')
        .then(res=>{
            if(!res.ok){
                return false
            }
            return res.json();
        })
        .then(res=>{
            setList(res)
        })
    }
    
  
                    
  return (
    <div className='container'>
        
        <div className='card'>
            <div className='card-header'>
                <h1>Liste des rendez-vous</h1>

            </div>
            <div className='card-body'>
                <table class="table table-bordered">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            
                            <th scope="col">cin</th>
                            <th scope="col">sex</th>
                           
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {list && list.map(r=>(
                            <tr key={r.id}>
                                <td>{r.nom}</td>
                                <td>{r.prenom}</td>
                               
                                <td>{r.cin}</td>
                              

                             
                                <td>{r.sex}</td>
                               

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}
