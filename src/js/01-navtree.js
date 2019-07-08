;(function () {
  var toggler = document.getElementsByClassName('caret')
  var i

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function () {
      console.log('weeee', i)
      this.parentElement.querySelector('.navtree-nested').classList.toggle('is-active')
      this.classList.toggle('caret-down')
    })
  }
})()
