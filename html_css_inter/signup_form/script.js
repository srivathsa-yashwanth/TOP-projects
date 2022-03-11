function check(event)
{
    let pw = p2.textContent;
    pw_og = p1.textContent;
    if (pw != pw_og)
    {
        p2.classList.add('error');
        error_msg.classList.add('err_msg');
    }
    else
    {
        p2.classList.remove('error');
        error_msg.classList.remove('err_msg');
    }
}

let p1 = document.querySelector('#pw1');
let p2 = document.querySelector('#pw2');
let error_msg = document.querySelector('#error');

p2.addEventListener('change',check)


