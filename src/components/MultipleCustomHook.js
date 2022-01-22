import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import '../App.css';

export const MultipleCustomHook = () => {
    
    const {counter, increment} = useCounter(1);
    const{loading,data}=useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);
    const{char_id,name,birthday,occupation,img,status,appearance,nickname,portrayed}  =!!data && data[0];
    //console.log(data);


    return (
        <div>
            <h1>Breaking Bad Characters!!!</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                :
                    (
                        <>
                            <div class="card w-50 border-primary mb-3">
                                <div className='box-img'>
                                    <img src={img} class="card-img-top" alt={name}></img>
                                </div>
                                <div className='conteiner'>
                                    <div>
                                        <span className='id'>{char_id} </span><h2>{name}</h2>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><span>Birthday</span> {birthday}</li>
                                            <li class="list-group-item"><span>Occupation</span>
                                                {occupation.map((idx) => {
                                                    return (
                                                        <li className='occupation' key={idx}>
                                                            {idx}
                                                        </li>
                                                    );
                                                })}
                                            </li>
                                            <li class="list-group-item"><span>Status</span> {status}</li>
                                            <li class="list-group-item"><span>Appearance</span> {appearance}</li>
                                            <li class="list-group-item"><span>Nickname</span> {nickname}</li>
                                            <li class="list-group-item"><span>Portrayed</span> {portrayed}</li>
                                        </ul>
                                        <div class="card-body">
                                            <button class="btn btn-primary" onClick={increment}>
                                                Siguiente 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    )
            }
            
        </div>
    )
}
