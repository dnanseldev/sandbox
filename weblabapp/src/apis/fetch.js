const fetch = require('cross-fetch')

const url = 'https://www.google.com/search?q=naught+dog&sxsrf=ALeKk02RxPVxDOUbDvbDn4hCzqhBmdZfVg:1623626675280&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiRs-bZ4JXxAhXpqZUCHXjBBtEQ_AUoA3oECAEQBQ&biw=1366&bih=641#imgrc=3IXjB63kTkbdIM&imgdii=RWcLdwRXfqU14M'



fetch(url)
   .then( res => {
       if (!res.ok)
         throw new Error(`Error status: ${res.status}`)
        
       const {status, statusText, counter, url} = res

       console.log(res.url)
   }) 
   