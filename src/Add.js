import React,{useEffect} from 'react'

function Add() {


    const set = ()=>{
        if(!window.localStorage.items){
            window.localStorage.items=''
        }
        let list  = document.querySelector(".list")
        list.innerHTML = window.localStorage.items
    }



    const add = ()=>{
        let moment = require('moment')
        let time = new Date();
        let upTime = moment(time).calendar()
        let add_todo = document.querySelector(".todo_add").value
        let list  = document.querySelector(".list")
        let items = []
        items.push(add_todo)
        window.localStorage.items += '<li class='+items[0]+'><i class="fa fa-check-circle"></i>'+items[0]+'<i class="fa fa-trash"></i><p>'+upTime+
        '</p><span class=one></span><span class=two></span><span class=three></span><span class=four></span></li>'
        list.innerHTML = window.localStorage.items
        list.lastChild.classList.add('active1')
        setTimeout(() => {
            list.lastChild.classList.remove('active1')
        }, 350);

    }
    useEffect(()=>{
        set()
    })
    


    return (
        <div className="add_section">
            <i className="fa fa-plus-square" onClick={add}></i>
            <input className="todo_add" placeholder="Add Todo..."></input>
        </div>
    )
}
export default Add;
