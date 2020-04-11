import React,{useState,useEffect} from 'react'

function Header() {


const filter=()=>{
    let filter = document.querySelector('.filter_search')
    let regex = new RegExp("^" +filter.value,"i")
    let li = document.getElementsByTagName("li")
    for(let i=0;i<li.length;i++){
        if(!regex.test(li[i].classList[0])){
            li[i].style.display = 'none'
        }else{
            li[i].style.display = 'block'
        }
    }
}

    return (
        <header>
            <h1>Todo List</h1>
            <div className="control_section">
                <input onKeyUp={filter} className='filter_search' placeholder="Filter...."></input>
            </div>
        </header>
    )
}

export default Header;
