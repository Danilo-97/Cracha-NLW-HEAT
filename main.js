const linksSocialMidia = {
  github: 'Danilo-97',
  youtube: 'channel/UCSAHmHt0hgGoi6h--jg0rFQ',
  facebook: 'danilo.baskete/',
  instagram: 'danilow.23/',
  twitter: 'Danilo267980551'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMidiaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  fetch(url)
  .then(response => response.json() )
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLogin.textContent = data.login
    userLink.href = data.html_url
    userImage.src = data.avatar_url

    


  } )
  

}


getGitHubProfileInfos()





