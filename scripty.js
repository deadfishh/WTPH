function scrollFunction(id)
{
    let e = document.getElementById(id);
    console.log(e);
    e.scrollIntoView
    ({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  function redirect(id)
  {
    window.location.href = id + '.html';
  }
    

