import React from 'react'

function MainContent() {
    let style = 'green'
    const remove = (e)=>{
        let target = e.target
        let list = document.querySelector('.list')
        if(target.classList[1]=="fa-trash"){
            let li = target.parentElement
            let ul = target.parentElement.parentElement
            li.classList.add("active")
            setTimeout(() => {
                li.classList.remove("active")
                ul.removeChild(li)
                window.localStorage.items = list.innerHTML
            }, 350);
        }
        if(target.classList[1]=="fa-check-circle" && target.style.color!== style){
            target.style.color = style
            target.parentElement.style.textDecoration = 'line-through'
            window.localStorage.items = list.innerHTML
        }else if(target.style.color === style && target.classList[1]=="fa-check-circle"){
            target.style.color = "black"
            target.parentElement.style.textDecoration = 'none'
            window.localStorage.items = list.innerHTML

        }
    }

    return (
        <div className="todos_container">
            <ul className="list" onClick={remove}></ul>
            <img src={require('./ishan-seefromthesky-6U-sSfBV-gM-unsplash.jpg')}></img>
        </div>
    )
}

export default MainContent
